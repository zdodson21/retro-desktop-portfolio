#if defined(__EMSCRIPTEN__)
  #include <emscripten.h>
#else
  #define EMSCRIPTEN_KEEPALIVE
#endif

EMSCRIPTEN_KEEPALIVE
double add(double a, double b) {
  return a + b;
}

EMSCRIPTEN_KEEPALIVE
double subtract(double a, double b) {
  return a - b;
}

EMSCRIPTEN_KEEPALIVE
double multiply(double a, double b) {
  return a * b;
}

EMSCRIPTEN_KEEPALIVE
double divide(double a, double b) {
  if (b != 0) {
    return a / b;
  }

  return 0;
}

EMSCRIPTEN_KEEPALIVE
double find_root(double root, double num) {
  return num + root; // TODO obviously not done, just init setup
}

EMSCRIPTEN_KEEPALIVE
double percent(double a) {
  return a; // TODO find out exactly what this function should do based on how it works on win95
}
