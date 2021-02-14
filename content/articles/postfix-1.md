# Never Buy a Private Email Again
*Hosting a private email on a virtual private server.*

This is absolutely unsafe. However, desperate times, desperate measures -- and half the tutorials lied to you anyways.

<hr />

## Specs
This is being done on a very generic, cheapest option, VPS Pulsar (Namecheap) running Debian 10.

## Required Packages
This requires `net-tools` for peaking, `ufw` as a firewall, `postfix` for smtp, and `dovecot` for IMAP/POP3.

### Pre-Installation
```bash
$ sudo apt install net-tools ufw
```

## Postfix

To start off, let's install postfix using:
```bash
$ sudo apt install postfix
```

When you install **postfix**, it actually gives you an easy setup.

When I set this up, I configured it with the settings of `Internet Site`.
For the hostname, you can set it to the domain of choice: `example.org`.

It installs the rest for you.

### IMPORTANT DIRECTORIES FOR POSTFIX
* `/etc/postfix`
* `/etc/mailname`
* `/etc/hosts`
* `/etc/aliases`
* `~/Maildir/` (we'll get to this later)

### You can start postfix by running:
```bash
$ sudo systemctl start postfix
```

### Configuring Postfix
I'm setting an organizational email up for two people, and for organization purposes, it was easy for me to just use a user account for each user. In this configuration, I'll be `user1` and my partner will be `user2`.

You actually have to create this directory called maildir, like so:
```bash
$ mkdir ~/Maildir
```

I was working off of the **user1** account, so I quickly made one for **user2** (`sudo useradd -m user2 && sudo mkdir /home/user2/Maildir`)

To manage the machine users in respect to the emails assigned, you can set the accounts in `/etc/postfix/virtual`. The format for an entry is `<email> <machineuser>` like so:
```
user1@example.org user1
user2@example.org user2
```

We can update these entries and update the database by running
```bash
$ sudo postman /etc/postfix/virtual
```

Inside the main configuration file, `main.cf` you need to specify the hostname, destinations, domains, maildirectory, aliasmaps, and networks.

```
myhostname = example.org
alias_maps = hash:/etc/aliases
alias_database = hash:/etc/aliases
myorigin = /etc/mailname
mydestination = mail.example.org, example.org, localhost.example.org, localhost

relayhost =
mydomain = example.org 
mynetworks = your.ip.addr.here/32 127.0.0.0/8 [::ffff:127.0.0.0]/104 [::1]/128

home_mailbox = Maildir/
virtual_alias_maps = hash:/etc/postfix/virtual
```

As well as setting those, the following smtp settings should be set:

```
smtp_use_tls = yes
smtp_sasl_auth_enable = yes
smtp_sasl_security_options = noanonymous
``` 

After these are set, you can restart postfix by running
```bash
$ sudo systemctl restart postfix
```

## dovecot

We're using dovecot to set up the POP3/IMAP servers. First, you have to install dovecot and it's components. For this examplem we only need to set up POP3, since that's what GMail asks for. You can install what we need like so:

```bash
$ sudo apt install dovecot-dev dovecot-core dovecot-pop3d
```

dovecot will automatically integrate with postfix. That's nice because it'd probably be a pain to try to do that ourselves, so thank you dovecot. There are 3 dovecot files that need to be configured.

### `/etc/dovecot/dovecot.conf`
This file should include the protocols. Since we are doing the pop3 protocol, we can add this to the end of the file:
```
protocols = pop3
```
If we wanted more protocols, we could simply list them as so
```
protocols = pop3 imap
```

### `/etc/dovecot/conf.d/10-auth.conf`
This file needs to enable plaintext authorization, by uncommenting this line and setting it to no:
```
disable_plaintext_auth = no
```

### `/etc/dovecot/conf.d/10-mail.conf`
The line specifying the **mail_location** needs to be uncommented and specified to work with `~/Maildir`. This is set as so:

```
mail_location = maildir:~/Maildir
```

##
Now that these are all setup and configured, we can restart dovecot.

```bash
$ sudo systemctl restart dovecot
```

## DNS
We're using Cloudflare. However much it dislikes this (and it's probably bad practive), the MX record is set respectively to:
```
MX    example.org     example.org
A     example.org     your.vps.ip
```

We also have a SPF TXT record to use with GMail:
```
v=spf1 ip4:162.0.230.5/32 include:_spf.google.com include:gmail.com include:mail.google.com include:example.org a:mail.google.com a:gmail.com a:example.org ~all
```

## Gmail Integration
To set this up with GMail, we link it to an existing Gmail account. Under Settings, we go to **Accounts and Import**. We make our way to **Send mail as**, and add another email address.

First, you enter in your email, for example:
```
user1@example.org
```
However, we are NOT going to treat it as an alias.

On the next page, we have to configure the SMTP server. We can use Gmail's for this.

```
smtp: smtp.gmail.com
port: 587
username: yourgmailaccount@gmail.com
password: app password
```

If you do not have an app password, you can generate one [here](https://support.google.com/accounts/answer/185833?hl=en).
By preference, the email added is set to default. You can now send email from the Gmail client!

To set up receiving email, a working (and quite hacky) way to do so is by configuring Gmail to check the imap server. Under **Check mail from other accounts**, we have to add a mail account.

For the email address to add, you can enter `user1@example.com`. You have to choose the setting to check email using POP3, and continue.

On the next page, you're prompted for a username, password, POP Server, and port.
I configured mine as so:

```
username: vps account username (user1)
password: vps account password (since by default dovecot uses /etc/passwd)
pop server: vps ip
port: 110
 * always use SSL
 ```

## Conclusion
Hopefully this is a good start base for trying to set up dovecot and postfix on a VPS. Was it horrendous to figure out? Yes. Is it safe? Probably not. Nonetheless, it allows our custom domain to be used as an email, which looks kind of nice with out organization.
