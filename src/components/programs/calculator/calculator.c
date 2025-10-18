/*
 * Emscripten is required to compile this file to WebAssembly.
 * https://emscripten.org/
 *
 * WASM Build Command (from calculator directory):
 *    emcc -Os calculator.c -o ../../../wasm/calculator.wasm --no-entry
 *
 * A makefile is available in the root of this project.
 * Run this command (from root of project) to compile this file to WebAssembly using MAKE:
 *    make calculator
 */

#if defined(__EMSCRIPTEN__)
  #include <emscripten.h>
#else
  #define EMSCRIPTEN_KEEPALIVE
#endif

#include <stdbool.h>

#define EPS 1e-12

const double e =    2.718281828;
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
   TODO delete this todo when below comment is handled in TS, leave below comment
   * Return 0 is only here because program could break on edge case if it isn't.
   * Any divide by 0 errors should be handled on the TypeScript side of things,
   * without this function being called, so technically this return 0 should
   * never actually be returned.
   */
  return 0;
}

EMSCRIPTEN_KEEPALIVE
double one_over(double x) {
  // TODO make sure the TypeScript call of this function will return an error instead of calling this function
  // divide() contains "divide by 0 protection", so it is not needed her
  return divide(1, x);
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
  // if (init_base != 0 && init_base != 1 && !(init_exp == 0 && init_exp == 1 && init_exp == -1)) {
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
  else { // Exponent is not whole number
    // TODO have to handle decimal exponents.
    // I wrote down a formula in LibreOffice Math,
    // try to interpret that, should work instead of
    // for loop (I think)
    // Really I shouldn't even need a conditional statement,
    // and might be able to remove a lot of the other condtions
    // except when init_base == 0

    // The only part I MIGHT need is the if (exp < 0)
  }

  // }
  return base;
}

/*
 * Arithmetic Mean
 */
EMSCRIPTEN_KEEPALIVE
double am(double a, double b) {
  return multiply(divide(1, 2), add(a, b));
}

EMSCRIPTEN_KEEPALIVE
double sqroot(double radicand) {
  double init_rad = radicand;
  double a1 = add(divide(init_rad, 2), 1);
  double b1 = divide(init_rad, a1);
  double amin1 = a1;
  double bmin1 = b1;

  while(subtract(amin1, bmin1) > 0) {
    double an = am(amin1, bmin1);
    double bn = divide(init_rad, an);

    amin1 = an;
    bmin1 = bn;
    // TODO tell it to stop when "close enough", I think that is causing the hanging
  }

  return bmin1;
}

/*
 * Geometric Mean
 */
EMSCRIPTEN_KEEPALIVE
double gm(double a, double b) {
  return sqroot(multiply(a, b));
}

EMSCRIPTEN_KEEPALIVE
double root(double index, double radicand) {
  return exponent(radicand, divide(1, index));
}

/*
 * Arithmetic-Geometric Mean
 * https://en.wikipedia.org/wiki/Arithmetic%E2%80%93geometric_mean
 */
EMSCRIPTEN_KEEPALIVE
double agm(double a, double g) {
  for (int i = 1; i <= 5; i++) {
    double new_a = am(a, g);
    double new_g = gm(a, g);

    a = new_a;
    g = new_g;
  }

  return divide(add(a, g), 2);
}

EMSCRIPTEN_KEEPALIVE
double ln(double arguement) {
  const double init_arg = arguement;
  const double s = multiply(arguement, 256);

  /*
   TODO ensure on frontend this case returns the proper error
   * Case for safety, frontend should return an error, should not pass through to WASM
   */
  if (arguement == 0) {
    return 0;
  }

  if (arguement == 1) {
    return 0;
  }

  return divide(pi, multiply(2, agm(1, divide(4, s)))) - multiply(m, ln_2);
}

EMSCRIPTEN_KEEPALIVE
double logarithm(double base, double arguement) {
  return divide(ln(arguement), ln(base));
}
