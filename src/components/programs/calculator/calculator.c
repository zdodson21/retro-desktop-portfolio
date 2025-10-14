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
