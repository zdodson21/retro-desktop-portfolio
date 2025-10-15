#include <stdio.h>
#include <stdbool.h>
#include "../calculator.h"

void print_bar(void) {
  printf("-------------------\n");
}


bool test_add(double a, double b, double c) {
  if (add(a, b) != c) {
    printf("Add %f + %f = %f: Fail\n", a, b, add(a, b));
    return false;
  }

  printf("Add %f + %f = %f: Pass\n", a, b, add(a, b));
  return true;
}


bool test_sub(double a, double b, double c) {
  if (subtract(a, b) != c) {
    printf("Subtract %f - %f = %f: Fail\n", a, b, subtract(a, b));
    return false;
  }

  printf("Subtract %f - %f = %f: Pass\n", a, b, subtract(a, b));
  return true;
}

bool test_mult(double a, double b, double c) {
  if (multiply(a, b) != c) {
    printf("Multiply %f * %f = %f: Fail\n", a, b, multiply(a, b));
    return false;
  }

  printf("Multiply %f * %f = %f: Pass\n", a, b, multiply(a, b));
  return true;
}

bool test_div(double a, double b, double c, bool test_0) {
  if (b == 0) {
    if (test_0) {
      printf("Intentional Divide by 0 Error: Pass \n");
      return true;
    } else {
      printf("Unintentional Divide by 0. Set test_0 to false!\n");
      return false;
    }
  }

  if (divide(a, b) != c) {
    printf("Divide %f / %f = %f: Fail\n", a, b, divide(a, b));
    return false;
  }

  printf("Divide %f / %f = %f: Pass\n", a, b, divide(a, b));
  return true;

}

bool test_fnd_rt(double a, double b, double c) {
  if (find_root(a, b) != c) {
    printf("%f root of %f = %f: Fail\n", a, b, find_root(a, b));
    return false;
  }

  printf("%f root of %f = %f: Pass\n", a, b, find_root(a, b));
  return true;
}

bool test_one_over(double a, double b, bool test_0) { // TODO add support for divide by 0
  if (a == 0) {
    if (test_0) {
      printf("Intentional Divide by 0 Error: Pass \n");
      return true;
    } else {
      printf("Unintentional Divide by 0. Set test_0 to false!\n");
      return false;
    }
  }

  if (divide(1, a) != b) {
    printf("1 / %f = %f: Fail\n", a, divide(1, a));
    return false;
  }

  printf("1 / %f = %f: Pass\n", a, divide(1, a));
  return true;
}

char * convert_result(bool result) {
  if (result == true) {
    return "Pass";
  }

  return "Fail";
}


// bool has_false(size_t n, bool arr[]) {
//   for (size_t i = 0; i < n; i++) {
//     if (!arr[i]) {
//       return false;
//     }
//   }

//   return true;
// }

// TODO figure out colored text (green & red) for pass and fail respectivly

