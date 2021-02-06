# quadreg (java) - getting the curve of best fit from 2 points.

<div align="center"><em>this sight is NOT (really) mobile friendly!</em><br><br>this page is on GIST!</div>

<br/>
<hr/>
<br/>

A little bit about this: for the economy aspect of a *plugin* that I'm writing, I need to determine the price
of something based on 1) the initial price and 2) a maximum price.

With this, if we create a parabola (and cut it off where x >= 0) with the axis of symmetry as 0 (x = 0), we can get this value.
Since the parabola is dynamic based on the item needing to be charged, we have to create something to return the **y** of a point when given the **x**.

Our two points for testing were (0, 100) and (2500, 6000). Where 100 is **base**, 6000 is **max**, 2500 is **maxLevel** and
**point** is the point we want to get. *HOWEVER* with the idea that this parabola starts at 0, a good idea is to treat this as
something that is **ZERO INDEXED** by setting the max level point to `maxLevel - 1` and by getting the max level point as `maxLevel - 1`

### Getting a point from a curve :
```java
/**
   * @param base the base value 
   * @param max the maximum value when x >= 0, extrema
   * @param point, the x value to get from
   * 
   * @return y value from point
   */
   private static double fromCurve(double base, double max, int maxLevel, int point) {
      // calculate quadratic regression
      // coords: {(0, base),(-maxLevel, -max), (maxLevel, max)}
      // we learn that (-maxLevel, max) creates a slightly better curve!      
      // corellation
      double[] x = {0, (-1 * maxLevel), maxLevel};
      double[] y = {base, (-1 * max), max};
      // funcs and val storage
      double[] fVals = vals(x[0], x[1], y[0], y[1]);
      double[] sVals = vals(x[1], x[2], y[1], y[2]);
      double bMul = (-1 * (sVals[1]/fVals[1]));

      double a3 = (bMul * fVals[0]) + sVals[0];
      double d3 = (bMul * fVals[2]) + sVals[2];
            
      final double a = d3/a3;
      final double b = (fVals[2] - fVals[0] * a) / fVals[1];
      final double c = y[0] - (a * Math.pow(x[0], 2)) + (b * x[0]);
      return (a * Math.pow(point, 2)) + (b * point) + c;
  }
  ```

### Getting a, b, d values from points (in form of an array) :
  ```java
  // stored: a, b, d
  private static double[] vals(double x1, double x2, double y1, double y2) {
     double[] arr = new double[3];
     arr[0] = (-1 * Math.pow(x1, 2)) +  Math.pow(x2, 2);
     arr[1] = (-1 * x1) + x2;
     arr[2] = (-1 * y1) + y2;
     return arr;
  }
```
