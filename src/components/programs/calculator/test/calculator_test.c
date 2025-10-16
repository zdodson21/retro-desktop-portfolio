#include <stdio.h>
#include <stdbool.h>
#include "helper.h"

/*
 * Each test needs to test the following as applicable:
 * Positive whole numbers
 * Negative whole numbers
 * Mix of positive & negative whole numbers
 * Positive decimals
 * Negative decimals
 * Mix of positive & negative decimals
 */

// ! Standard Operations

bool run_addition_tests() {
  printf("Addition Tests: \n\n");

  const int n = 6;
  bool test[n];

  test[0] = test_add(5, 2, 7);
  test[1] = test_add(-3, -2, -5);
  test[2] = test_add(2, -3, -1);
  test[3] = test_add(2.3, 4.6, 6.9);
  test[4] = test_add(-2.3, -4.6, -6.9);
  test[5] = test_add(-2.3, 4.6, 2.3);

  printf("\nStatus: ");

  // size_t n = sizeof(test) / sizeof(test[0]);
  for (int i = 0; i < n; i++) {
    if (!test[i]) {
      printf(ANSI_COLOR_RED "Failed" ANSI_COLOR_RESET "\n");
      print_bar();
      return false;
    }
  }

  printf(ANSI_COLOR_GREEN "Passed" ANSI_COLOR_RESET "\n");
  print_bar();
  return true;
}

bool run_subtraction_tests() {
  printf("Subtraction Tests: \n\n");

  const int n = 6;
  bool test[n];

  test[0] = test_sub(3, 2, 1);
  test[1] = test_sub(-3, -2, -1);
  test[2] = test_sub(-3, 2, -5);
  test[3] = test_sub(4.6, 2.3, 2.3);
  test[4] = test_sub(-4.6, -2.3, -2.3);
  test[5] = test_sub(-4.6, 2.3, -6.9);

  printf("\nStatus: ");

  for (size_t i = 0; i < n; i++) {
    if (!test[i]) {
      printf(ANSI_COLOR_RED "Failed" ANSI_COLOR_RESET "\n");
      print_bar();
      return false;
    }
  }

  printf(ANSI_COLOR_GREEN "Passed" ANSI_COLOR_RESET "\n");
  print_bar();
  return true;
}

bool run_multiply_tests() {
  printf("Multiplication  Tests: \n\n");

  const int n = 17;
  bool test[n];

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

  printf("\nStatus: ");

  for (size_t i = 0; i < n; i++) {
    if (!test[i]) {
      printf(ANSI_COLOR_RED "Failed" ANSI_COLOR_RESET "\n");
      print_bar();
      return false;
    }
  }

  printf(ANSI_COLOR_GREEN "Passed" ANSI_COLOR_RESET "\n");
  print_bar();
  return true;
}

bool run_divide_tests() {
  printf("Division Tests: \n\n");

  const int n = 13;
  bool test[n];

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

  printf("\nStatus: ");

  for (size_t i = 0; i < n; i++) {
    if (!test[i]) {
      printf(ANSI_COLOR_RED "Failed" ANSI_COLOR_RESET "\n");
      print_bar();
      return false;
    }
  }

  printf(ANSI_COLOR_GREEN "Passed" ANSI_COLOR_RESET "\n");
  print_bar();
  return true;
}

// bool run_root_tests() {
//   printf("Root Tests: \n\n");


//   const int n = 3;
//   bool test[n];

//   test[0] = test_fnd_rt(2, 4, 2);
//   test[1] = test_fnd_rt(2, 9, 3);
//   test[2] = test_fnd_rt(2, 729, 27);

//   printf("\nStatus: ");

//   for (size_t i = 0; i < n; i++) {
//     if (!test[i]) {
//       printf(ANSI_COLOR_RED "Failed" ANSI_COLOR_RESET "\n");
//       print_bar();
//       return false;
//     }
//   }

//   printf(ANSI_COLOR_GREEN "Passed" ANSI_COLOR_RESET "\n");
//   print_bar();
//   return true;
// }

bool run_one_over_tests() {
  printf("One / X Tests: \n\n");

  const int n = 3;
  bool test[n];

  test[0] = test_one_over(0, 0, true);
  test[1] = test_one_over(3, 0.33, false);
  test[2] = test_one_over(500, 0.002, false);

  printf("\nStatus: ");

  for (size_t i = 0; i < n; i++) {
    if (!test[i]) {
      printf(ANSI_COLOR_RED "Failed" ANSI_COLOR_RESET "\n");
      print_bar();
      return false;
    }
  }

  printf(ANSI_COLOR_GREEN "Passed" ANSI_COLOR_RESET "\n");
  print_bar();
  return true;
}

bool run_exponent_tests() {
  printf("Exponent Tests: \n\n");

  const int n = 13;
  bool test[n];

  test[0] = test_exponent(2, 2, 4);
  test[1] = test_exponent(6, 4, 1296);
  test[2] = test_exponent(12, 6, 2985984);
  test[3] = test_exponent(-2, 2, -4);
  test[4] = test_exponent(0, 3, 0); // Normally would return domain error
  test[5] = test_exponent(5, 0, 1);
  test[6] = test_exponent(-5, 0, -1);
  test[7] = test_exponent(5, 1, 5);
  test[8] = test_exponent(1, 3, 1);
  test[9] = test_exponent(-1, 3, -1);
  test[10] = test_exponent(5, -1, 1/5);
  test[11] = test_exponent(5, -2, 1/25);
  test[12] = test_exponent(-5, -2, -1/25);
  // TODO write more tests

  printf("\nStatus: ");

  for (size_t i = 0; i < n; i++) {
    if (!test[i]) {
      printf(ANSI_COLOR_RED "Failed" ANSI_COLOR_RESET "\n");
      print_bar();
      return false;
    }
  }

  printf(ANSI_COLOR_GREEN "Passed" ANSI_COLOR_RESET "\n");
  print_bar();
  return true;
}

// ! Scientific Operations



// ! Main

int main(void) {
  printf("\nRunning tests:\n");
  print_bar();

  bool results[] = {
    run_addition_tests(),
    run_subtraction_tests(),
    run_multiply_tests(),
    run_divide_tests(),
    // run_root_tests(),
    run_one_over_tests(),
    run_exponent_tests(),
  };

  size_t n = sizeof(results) / sizeof(results[0]);
  for (size_t i = 0; i < n; i++) {
    if (results[i] == false) {
      printf(ANSI_COLOR_RED "\nNot all tests passed!" ANSI_COLOR_RESET "\n");
      return 0;
    }
  }

  printf(ANSI_COLOR_GREEN "\nAll tests passed!" ANSI_COLOR_RESET "\n");
  return 1;
}
