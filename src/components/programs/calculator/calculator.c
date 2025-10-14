#if defined(__EMSCRIPTEN__)
  #include <emscripten.h>
#else
  #define EMSCRIPTEN_KEEPALIVE
#endif

EMSCRIPTEN_KEEPALIVE
int add(int a, int b) {
  return a + b;
}

EMSCRIPTEN_KEEPALIVE
int subtract(int a, int b) {
  return a - b;
}

EMSCRIPTEN_KEEPALIVE
int multiply(int a, int b) {
  return a * b;
}

EMSCRIPTEN_KEEPALIVE
int divide(int a, int b) {
  return a / b;
}

EMSCRIPTEN_KEEPALIVE
int find_root(int num, int root) {
  return num + root; // TODO obviously not done, just init setup
}

EMSCRIPTEN_KEEPALIVE
int percent(int a) {
  return a; // TODO find out exactly what this function should do based on how it works on win95
}

int one_over(int a) {
  return 1 / a; // TODO definitely wrong types here, look into data types and change. probably double or something
}
