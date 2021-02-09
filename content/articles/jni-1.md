I've been trying to get JNI working, but since I work on MacOS most of the time, it's pretty aids. I got the change to finally try it on Debian.
As expected, it works, because we all know development shit actually *works* on linux.

It was quite a normal implementation, but now that this is able to work, creating optimizations via CI is doable.

This is a very simple implementation of JNI, and the invocation of the native functions.

<hr />

### We wrote 2 classes to do this:
`NativeImpl` to hold the native functions and libraries and `Main` to actually run the functions.

### In addition to those two classes, two scripts were written:
`compile.sh`: compile the *.java files as well as the library

```bash
#!/bin/bash

# https://www.baeldung.com/jni reference for linking JNI

# JAVA_HOME on this debian machine
JAVA="/usr/lib/jvm/java-11-openjdk-amd64/" 

# Create the object file (.o)
g++ -c -fPIC -I"$JAVA"/include -I"$JAVA"/include/linux NativeImpl.cc -o NativeImpl.o

# Create the library (*.so)
g++ -shared -fPIC -o libNativeImpl.so NativeImpl.o -lc

# Compile the java files (*.java -> *.class)
javac Main.java NativeImpl.java
```
`run.sh`: run the Main class.
```bash
#!/bin/bash

CURRENT_DIR=`pwd`

java -Djava.library.path="$CURRENT_DIR" Main
```

## Header File
The first time I did this, I did this on MacOS (Catalina, intel) and struggled with creating the header file. It's actually quite simple, however.
One command can handle this for you:

`javac -h . "$FILENAME".java`

In this example, the name of `$FILENAME` is **"NativeImpl"**. So this was ran respectively:

`javac -h . NativeImpl.java`

and voila! a header file.

Now we have a headerfile, that we will link to our C++ file.

Since our java class is called NativeImpl, we will call our C++ file `NativeImpl.cc`.
After creating `NativeImpl.cc`, we can include the headerfile and start writing some C++.

This implementation has two very simple methods:
`add(int i1, int i2);` and `print(String s);`.

The headerfile gives us these functions, respectively:
```cpp
// Where JNIEnv is the environment, jobject is the class object, jstring (java-type string) is the parameter.
JNIEXPORT void JNICALL Java_NativeImpl_print(JNIEnv *, jobject, jstring);
```
```cpp
// The same as the latter, but the jints are the parameters, and are java-type integers.
JNIEXPORT jint JNICALL Java_NativeImpl_add(JNIEnv *, jobject, jint, jint);
```

When we implement this in C++, we have to match the function names, and be sure to include the headerfile. The code for this is shown in [NativeImpl.cc](https://gist.github.com/bfu4/1e6e556854a89befb11b952a8a3c273b#file-nativeimpl-cc).

## Compilation
*Could we do this in a Makefile? Absolutely. I'm just lazy.*

After we've written the code, we can compile it, and create a library.
`compile.sh` holds all of the lines of code used for compilation.

A very important about compiling is linking the actual JNI library. I had to find my **JAVA_HOME** since it wasn't set, and it was found at `/usr/lib/jvm/java-11-openjdk-amd64/ `.
I set a variable named `JAVA` to that directory in the script. Then while compiling, we link, create the object, then create the library.

## Running
After we compile, we can finally run the code. You also have to set the `java.library.path` for java to find your library. I created a script to run this for that ease.
To do this independently from the script, you can add the argument `-Djava.library.path="$YOUR_PATH_DIR"` to your JVM arguments.

The output should come out as so:

```
bfu4@penguin:~/nativeimpl$ ./run.sh 
5
0x7b71c66dc998
```
