#include <stdio.h>
#include <stdbool.h>
#include "helper.h"

/*
  Each test needs to test the following as applicable:
    * Positive whole numbers
    * Negative whole numbers
    * Mix of positive & negative whole numbers
    * Positive decimals
    * Negative decimals
    * Mix of positive & negative decimals
*/

// ! Standard Operations

static bool run_addition_tests() {
  bool test[6];

  test[0] = test_add(5, 2, 7);
  test[1] = test_add(-3, -2, -5);
  test[2] = test_add(2, -3, -1);
  test[3] = test_add(2.3, 4.6, 6.9);
  test[4] = test_add(-2.3, -4.6, -6.9);
  test[5] = test_add(-2.3, 4.6, 2.3);

  printf("\nAddition Tests: ");

  size_t n = sizeof(test) / sizeof(test[0]);
  for (size_t i = 0; i < n; i++) {
    if (!test[i]) {
      printf("Failed\n");
      print_bar();
      return false;
    }
  }

  printf("Passed\n");
  print_bar();
  return true;
}

static bool run_subtraction_tests() {
  bool test[6];

  test[0] = test_sub(3, 2, 1);
  test[1] = test_sub(-3, -2, -1);
  test[2] = test_sub(-3, 2, -5);
  test[3] = test_sub(4.6, 2.3, 2.3);
  test[4] = test_sub(-4.6, -2.3, -2.3);
  test[5] = test_sub(-4.6, 2.3, -6.9);

  printf("\nSubtraction Tests: ");

  size_t n = sizeof(test) / sizeof(test[0]);
  for (size_t i = 0; i < n; i++) {
    if (!test[i]) {
      printf("Failed\n");
      print_bar();
      return false;
    }
  }

  printf("Passed\n");
  print_bar();
  return true;
}

static bool run_multiply_tests() {
  bool test[17];

  // Positive whole nums
  test[0] = test_mult(5, 2, 10);
  test[1] = test_mult(5, 1, 5);
  test[2] = test_mult(5, 0, 0);

  // Negative whole nums
  test[3] = test_mult(-5, -2, 10);
  test[4] = test_mult(-5, -1, 5);
  test[5] = test_mult(-5, 0, 0);

  // Positive & negative whole nums
  test[6] = test_mult(-5, 2, -10);
  test[7] = test_mult(-5, 1, -5);
  test[8] = test_mult(-5, 0, 0);

  // Positive decimals
  test[9] = test_mult(5.2, 2.3, 11.96);
  test[10] = test_mult(5.2, 1, 5.2);
  test[11] = test_mult(5.2, 0, 0);

  // Negative decimals
  test[12] = test_mult(-5.2, -2.3, 11.96);
  test[13] = test_mult(-5.2, -1, -5.2);
  test[14] = test_mult(-5.2, 0, 0);

  // Positive & negative decimals
  test[15] = test_mult(-5.2, 2.3, -11.96);
  test[16] = test_mult(5.2, -2.3, -11.96);

  printf("\nMultiplication  Tests: ");

  size_t n = sizeof(test) / sizeof(test[0]);
  for (size_t i = 0; i < n; i++) {
    if (!test[i]) {
      printf("Failed\n");
      print_bar();
      return false;
    }
  }

  printf("Passed\n");
  print_bar();
  return true;
}

static bool run_divide_tests() {
  bool test[13];

  // Positive whole numbers
  test[0] = test_div(5, 0, 0, true);
  test[1] = test_div(5, 1, 5, false);
  test[2] = test_div(10, 2, 5, false);
  test[3] = test_div(0, 10, 0, false);

  // Negative whole numbers
  test[4] = test_div(-5, 0, 0, true);
  test[5] = test_div(-5, -1, 5, false);
  test[6] = test_div(-10, -2, 5, false);
  test[7] = test_div(0, -10, 0, false);

  // Positive & negative whole numbers
  test[8] = test_div(-5, 1, -5, false);
  test[9] = test_div(10, -2, -5, false);

  // Positive decimals
  test[10] = test_div(5.2, 2.3, 2.260870, false);

  // Negative decimals
  test[11] = test_div(-5.2, -2.3, 2.260870, false);

  // Positive & negative decimals
  test[12] = test_div(-5.2, 2.3, -2.260870, false);
  test[13] = test_div(5.2, -2.3, -2.260870, false);

  printf("\nDivision Tests: ");

  size_t n = sizeof(test) / sizeof(test[0]);
  for (size_t i = 0; i < n; i++) {
    if (!test[i]) {
      printf("Failed\n");
      print_bar();
      return false;
    }
  }

  printf("Passed\n");
  print_bar();
  return true;
}

// TODO root tests

static bool run_root_tests() {
  bool test[3];

  test[0] = test_fnd_rt(2, 4, 2);
  test[1] = test_fnd_rt(2, 9, 3);
  test[2] = test_fnd_rt(2, 729, 27);

  printf("\nRoot Tests: ");

  size_t n = sizeof(test) / sizeof(test[0]);
  for (size_t i = 0; i < n; i++) {
    if (!test[i]) {
      printf("Failed\n");
      print_bar();
      return false;
    }
  }

  printf("Passed\n");
  print_bar();
  return true;
}

static bool run_one_over_tests() {
  bool test[3];

  test[0] = test_one_over(0, 0, true);
  test[1] = test_one_over(3, 0.33, false);
  test[2] = test_one_over(500, 0.002, false);

  printf("\n One / X Tests: ");

  size_t n = sizeof(test) / sizeof(test[0]);
  for (size_t i = 0; i < n; i++) {
    if (!test[i]) {
      printf("Failed\n");
      print_bar();
      return false;
    }
  }

  printf("Passed\n");
  print_bar();
  return true;
}

// ! Scientific Operations



// ! Main

int main(void) {
  printf("Running tests:\n");
  print_bar();

  bool results[] = {
    run_addition_tests(),
    run_subtraction_tests(),
    run_multiply_tests(),
    run_divide_tests(),
    run_root_tests(),
    run_one_over_tests(),
  };

  size_t n = sizeof(results) / sizeof(results[0]);
  for (size_t i = 0; i < n; i++) {
    if (results[i] == false) {
      printf("Not all tests passed!\n");
      return 0;
    }
  }

  printf("All tests passed!");
  return 1;
}
