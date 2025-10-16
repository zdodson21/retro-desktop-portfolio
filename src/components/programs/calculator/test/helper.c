#include <stdio.h>
#include <stdbool.h>
#include "../calculator.h"
#include "helper.h"

void print_bar(void) {
  printf("-------------------\n");
}

bool test_add(double a, double b, double c) {
  if (add(a, b) != c) {
    printf(ANSI_COLOR_RED "Add %f + %f = %f: Fail" ANSI_COLOR_RESET "\n", a, b, add(a, b));
    return false;
  }

  printf(ANSI_COLOR_GREEN "Add %f + %f = %f: Pass" ANSI_COLOR_RESET "\n", a, b, add(a, b));
  return true;
}

bool test_sub(double a, double b, double c) {
  if (subtract(a, b) != c) {
    printf(ANSI_COLOR_RED "Subtract %f - %f = %f: Fail" ANSI_COLOR_RESET "\n", a, b, subtract(a, b));
    return false;
  }

  printf(ANSI_COLOR_GREEN "Subtract %f - %f = %f: Pass" ANSI_COLOR_RESET "\n", a, b, subtract(a, b));
  return true;
}

bool test_mult(double a, double b, double c) {
  if (multiply(a, b) != c) {
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

  if (divide(a, b) != c) {
    printf(ANSI_COLOR_RED "Divide %f / %f = %f: Fail" ANSI_COLOR_RESET "\n", a, b, divide(a, b));
    return false;
  }

  printf(ANSI_COLOR_GREEN "Divide %f / %f = %f: Pass" ANSI_COLOR_RESET "\n", a, b, divide(a, b));
  return true;

}

bool test_fnd_rt(double a, double b, double c) {
  if (find_root(a, b) != c) {
    printf(ANSI_COLOR_RED "%f root of %f = %f: Fail" ANSI_COLOR_RESET "\n", a, b, find_root(a, b));
    return false;
  }

  printf(ANSI_COLOR_GREEN "%f root of %f = %f: Pass" ANSI_COLOR_RESET "\n", a, b, find_root(a, b));
  return true;
}

bool test_one_over(double a, double b, bool test_0) { // TODO add support for divide by 0
  if (a == 0) {
    if (test_0) {
      printf(ANSI_COLOR_GREEN "Intentional Divide by 0 Error: Pass" ANSI_COLOR_RESET "\n");
      return true;
    } else {
      printf(ANSI_COLOR_GREEN "Unintentional Divide by 0. Set test_0 to false!" ANSI_COLOR_RESET "\n");
      return false;
    }
  }

  if (divide(1, a) != b) {
    printf(ANSI_COLOR_RED "1 / %f = %f: Fail" ANSI_COLOR_RESET "\n", a, divide(1, a));
    return false;
  }

  printf(ANSI_COLOR_GREEN "1 / %f = %f: Pass" ANSI_COLOR_RESET "\n", a, divide(1, a));
  return true;
}

bool test_exponent(double base, double exp, double sol) {
  if (exponent(base, exp) != sol) {
    printf(ANSI_COLOR_RED "%f to the power of %f = %f: Fail" ANSI_COLOR_RESET "\n", base, exp, exponent(base, exp));
    return false;
  }

  printf(ANSI_COLOR_GREEN "%f to the power of %f = %f: Pass" ANSI_COLOR_RESET "\n", base, exp, exponent(base, exp));
  return true;
}

// bool has_false(size_t n, bool arr[]) {
//   for (size_t i = 0; i < n; i++) {
//     if (!arr[i]) {
//       return false;
//     }
//   }

//   return true;
// }
