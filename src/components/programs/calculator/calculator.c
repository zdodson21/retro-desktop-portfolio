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

const double e = 2.718281828;

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

EMSCRIPTEN_KEEPALIVE
double root(double root, double base) {
  return exponent(base, 1/root);
}

EMSCRIPTEN_KEEPALIVE
double ln(double arguement) {
  // return logarithm(e, arguement);
  return 0; // TODO find a formula I can use for this part
  // TODO also see if there are any laws I follow (such as value arugement == e, 1, 0, etc.)
}

EMSCRIPTEN_KEEPALIVE
double logarithm(double base, double arguement) {
  return divide(ln(arguement), ln(base));
}
