/*
  MIT License

  Copyright (c) 2025 Zachary Dodson

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in all
  copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
  SOFTWARE.
*/

#if defined(__EMSCRIPTEN__)
  #include <emscripten.h>
#else
  #define EMSCRIPTEN_KEEPALIVE
#endif

#include <stdbool.h>

#define EPS 1e-15

const double e =    2.718281828459045235360287471352;
const double pi =   3.141592654;
const double ln_2 = 0.693147180;
const double m =    8.000000000;

EMSCRIPTEN_KEEPALIVE
double add(double add_a, double add_b) {
  return add_a + add_b;
}

EMSCRIPTEN_KEEPALIVE
double subtract(double minuend, double subtrahend) {
  return minuend - subtrahend;
}

EMSCRIPTEN_KEEPALIVE
double multiply(double prod_a, double prod_b) {
  return prod_a * prod_b;
}

EMSCRIPTEN_KEEPALIVE
double divide(double dividend, double divisor) {
  if (divisor != 0) {
    return dividend / divisor;
  }

  /*
   * Here for safety, Divide by 0 error should be handled on front-end
   */
  return 0;
}

EMSCRIPTEN_KEEPALIVE
double one_over(double x) {
  // divide() contains "divide by 0 protection", so it is not needed here
  return divide(1, x);
}

EMSCRIPTEN_KEEPALIVE
double percent(double value, double percent) {
  double init_percent = percent;
  percent = divide(percent, 100);
  return multiply(value, percent);
}

EMSCRIPTEN_KEEPALIVE
bool is_whole_num(double x) {
  long long int_part = (long long) x;

  double diff = x - (double)int_part;
  if (diff < 0) diff = -diff;

  return diff < EPS;
  return false;
}

EMSCRIPTEN_KEEPALIVE
bool is_even(double x) {
  if (x < 0) {
    x = -x;
  }

  bool even = true;
  for (int i = 1; i < x; i++) {
    even = !even;
  }

  return even;
}

EMSCRIPTEN_KEEPALIVE
double close_to_int(double x) {
  double diff = x - (long long) x;
  if (diff < 0) diff = -diff;
  return diff < 1e-4;
}

/*
 * Arithmetic Mean
 */
EMSCRIPTEN_KEEPALIVE
double am(double a, double b) {
  return multiply(divide(1, 2), add(a, b));
}

EMSCRIPTEN_KEEPALIVE
double sq_root(double radicand) {
  /*
   * Both return 0, but in reality < 0 would return a domain error
   * Returns 0 for safety, should be handled on front-end to prevent
   * function call
   */
  if (radicand < 0 || radicand == 0) {
    return 0;
  }

  double init_rad = radicand;

  double a_prev = add(divide(init_rad, 2), 1);
  double b_prev = divide(init_rad, a_prev);

  for (int i = 0; i < 1000; i++) {
    double a_next = am(a_prev, b_prev);
    double b_next = divide(init_rad, a_next);

    a_prev = a_next;
    b_prev = b_next;
  }

  return b_prev;
}

/*
 * Geometric Mean
 */
EMSCRIPTEN_KEEPALIVE
double gm(double a, double b) {
  return sq_root(multiply(a, b));
}

/*
 * Arithmetic-Geometric Mean
 * https://en.wikipedia.org/wiki/Arithmetic%E2%80%93geometric_mean
 */
EMSCRIPTEN_KEEPALIVE
double agm(double a, double g) {
  for (int i = 1; i <= 1000; i++) {
    double new_a = am(a, g);
    double new_g = gm(a, g);

    a = new_a;
    g = new_g;
  }

  return divide(add(a, g), 2);
}

/*
 * Starts to lose precision in the hundred thousandths place (5th decimal place)
 */
EMSCRIPTEN_KEEPALIVE
double ln(double arg) {
  const double init_arg = arg;
  const double s = multiply(arg, 256);

  /*
   TODO ensure on frontend this case returns the proper error
   * Case for safety, frontend should return an error, should not pass through to WASM
   */
  if (arg <= 0) {
    return 0;
  }

  if (arg == 1) {
    return 0;
  }

  double result = subtract(divide(pi, multiply(2, agm(1, divide(4, s)))), multiply(m, ln_2));

  if (close_to_int(result)) {
    return (long long) result;
  }

  return result;
}

EMSCRIPTEN_KEEPALIVE
double logarithm(double base, double arg) {
  // Domain error on front end for first three cases
  if (base <= 0 || base == 1 || arg <= 0 || arg == 1) {
    return 0;
  }

  return divide(ln(arg), ln(base));
}

EMSCRIPTEN_KEEPALIVE
double exponent(double base, double exp) {
  const double init_base = base;
  const double init_exp = exp;

  if (init_base == 0) {
    /*
     TODO leave this todo until below comment is done, leave below comment, remove this toto
     * TypeScript should have logic to detect if  both base & exp == 0
     * If so, it needs to return a domain error.
     */
    return 0;
  }

  if (init_exp == 0) {
    if (init_base > 0) {
      return 1;
    }
    else {
      return -1;
    }
  }

  if (init_exp == 1 || init_base == 1 || init_base == -1) {
    return init_base;
  }
  else if (init_exp == -1) {
    return 1 / init_base;
  }

  // ! Past extra cases
  if (exp < 0) {
    exp = -exp;
  }

  if (is_whole_num(init_exp)) { // Exponent is whole number
    for (int i = 1; i < exp; i++) {
      base = base * init_base;
    }

    if (init_base < 0 && base > 0 && init_exp > 0) { // Negative bases w/ positive exponent
      return -base;
    }
    else if (init_base > 0 && init_exp < 0) { // Positive base w/ negative exponent
      return 1/base;
    }
    else if (init_base < 0 && base > 0 && init_exp < 0) { // Negative base w/ negative exponent
      return 1/-base;
    }
  }
  else { // Exponent is decimal
    double calc_exp = multiply(exp, ln(base));
    // e ^ calc_exp
  }

  return base;
}

EMSCRIPTEN_KEEPALIVE
double root(double index, double radicand) {
  // TODO TS should return domain error for first condition
  if ((is_even(index) && radicand < 0) || radicand == 0) {
    return 0;
  }

  if (index == 2) {
    return sq_root(radicand);
  }

  return exponent(radicand, divide(1, index));
}
