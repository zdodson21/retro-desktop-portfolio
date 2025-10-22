#include <stdio.h>
#include <stdbool.h>
#include "../calculator.h"
#include "helper.h"

#define ABS_DBL(x) ((x) < 0.0 ? -(x) : (x))

#define EPS 1e-9

void print_bar(void) {
  printf("-------------------\n");
}

bool test_add(double a, double b, double c) {
  if (ABS_DBL(add(a, b) - c) > EPS) {
    printf(ANSI_COLOR_RED "Add %f + %f = %f: Fail" ANSI_COLOR_RESET "\n", a, b, add(a, b));
    return false;
  }

  printf(ANSI_COLOR_GREEN "Add %f + %f = %f: Pass" ANSI_COLOR_RESET "\n", a, b, add(a, b));
  return true;
}

bool test_sub(double a, double b, double c) {
  if (ABS_DBL(subtract(a, b) - c) > EPS) {
    printf(ANSI_COLOR_RED "Subtract %f - %f = %f: Fail" ANSI_COLOR_RESET "\n", a, b, subtract(a, b));
    return false;
  }

  printf(ANSI_COLOR_GREEN "Subtract %f - %f = %f: Pass" ANSI_COLOR_RESET "\n", a, b, subtract(a, b));
  return true;
}

bool test_mult(double a, double b, double c) {
  if (ABS_DBL(multiply(a, b) - c) > EPS) {
    printf(ANSI_COLOR_RED "Multiply %f * %f = %f: Fail" ANSI_COLOR_RESET "\n", a, b, multiply(a, b));
    return false;
  }

  printf(ANSI_COLOR_GREEN "Multiply %f * %f = %f: Pass" ANSI_COLOR_RESET "\n", a, b, multiply(a, b));
  return true;
}

bool test_div(double a, double b, double c, bool test_0) {
  if (b == 0) {
    if (test_0) {
      printf(ANSI_COLOR_GREEN "Intentional Divide by 0 Error: Pass" ANSI_COLOR_RESET "\n");
      return true;
    } else {
      printf(ANSI_COLOR_RED "Unintentional Divide by 0. Set test_0 to false!" ANSI_COLOR_RESET "\n");
      return false;
    }
  }

  if (ABS_DBL(divide(a, b) - c) > EPS) {
    printf(ANSI_COLOR_RED "Divide %f / %f = %f: Fail" ANSI_COLOR_RESET "\n", a, b, divide(a, b));
    return false;
  }

  printf(ANSI_COLOR_GREEN "Divide %f / %f = %f: Pass" ANSI_COLOR_RESET "\n", a, b, divide(a, b));
  return true;
}

bool test_one_over(double a, double b, bool test_0) {
  if (a == 0) {
    if (test_0) {
      printf(ANSI_COLOR_GREEN "Intentional Divide by 0 Error: Pass" ANSI_COLOR_RESET "\n");
      return true;
    } else {
      printf(ANSI_COLOR_RED "Unintentional Divide by 0. Set test_0 to false!" ANSI_COLOR_RESET "\n");
      return false;
    }
  }

  if (ABS_DBL(one_over(a) - b) > EPS) {
    printf(ANSI_COLOR_RED "1 / %f = %f: Fail" ANSI_COLOR_RESET "\n", a, divide(1, a));
    return false;
  }

  printf(ANSI_COLOR_GREEN "1 / %f = %f: Pass" ANSI_COLOR_RESET "\n", a, divide(1, a));
  return true;
}

bool test_exponent(double base, double exp, double sol) {
  if (ABS_DBL(exponent(base, exp) - sol) > EPS) {
    printf(ANSI_COLOR_RED "%f to the power of %f = %f: Fail" ANSI_COLOR_RESET "\n", base, exp, exponent(base, exp));
    return false;
  }

  printf(ANSI_COLOR_GREEN "%f to the power of %f = %f: Pass" ANSI_COLOR_RESET "\n", base, exp, exponent(base, exp));
  return true;
}

bool test_is_whole_num(double num, bool response) {
  if (ABS_DBL(is_whole_num(num) - response) > EPS) {
    printf(ANSI_COLOR_RED "%f is %d: Fail" ANSI_COLOR_RESET "\n", num, is_whole_num(num));
    return false;
  }

  printf(ANSI_COLOR_GREEN "%f is %d: Pass" ANSI_COLOR_RESET "\n", num, is_whole_num(num));
  return true;
}

bool test_sqroot(double num, double response) {
  if (ABS_DBL(sq_root(num) - response) > EPS){
    printf(ANSI_COLOR_RED "Square Root of %f = %f: Fail" ANSI_COLOR_RESET "\n" , num, sq_root(num));
    return false;
  }

  printf(ANSI_COLOR_GREEN "Square Root of %f = %f: Pass" ANSI_COLOR_RESET "\n" , num, sq_root(num));
  return true;
}

bool test_ln() { // TODO write this out
  printf("%f\n", ln(5));
}

bool test_agm() { // TODO write this out
  printf("Testing AGM\n");
  printf("%f\n", agm(24, 6)); // Expect 13.458171...
}

// TODO get this working
bool print_status(size_t n, bool arr[]) {
  printf("\nStatus: ");

  for (size_t i = 0; i < n; i++) {
    if (!arr[i]) {
      printf(ANSI_COLOR_RED "Failed" ANSI_COLOR_RESET "\n");
      print_bar();
      return false;
    }
  }

  printf(ANSI_COLOR_GREEN "Passed" ANSI_COLOR_RESET "\n");
  print_bar();
  return true;
}
