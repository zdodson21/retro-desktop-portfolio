#include <stdio.h>
#include <stdbool.h>
// #include <math.h>
#include "../calculator.h"
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

// TODO real life - find my calculator so I can make sure I know what certain outputs should be

// ! Standard Operations

bool test_addition(bool print) {
  bool test[] = {true, true, true, true, true, true};

  if (add(5, 2) != 7) {
    test[0] = false;
  }

  if (add(-3, -2) != -5) {
    test[1] = false;
  }

  if (add(2, -3) != -1) {
    test[2] = false;
  }

  if (add(2.3, 4.6) != 6.9) {
    test[3] = false;
  }

  if (add(-2.3, -4.6) != -6.9) {
    test[4] = false;
  }

  if (add(-2.3, 4.6) != 2.3) {
    test[5] = false;
  }

  if (print) {
    printf("Add 5 + 2 = %f: %s\n", add(5, 2), convert_result(test[0]));
    printf("Add -3 + 2 = %f: %s\n", add(-3, -2), convert_result(test[1]));
    printf("Add 2 + -3 = %f: %s\n", add(2, -3), convert_result(test[2]));
    printf("Add 2.3 + 4.6 = %f: %s\n", add(2.3, 4.6), convert_result(test[3]));
    printf("Add -2.3 + -4.6 = %f: %s\n", add(-2.3, -4.6), convert_result(test[4]));
    printf("Add -2.3 + 4.6 = %f: %s\n", add(-2.3, 4.6), convert_result(test[5]));
  }

  size_t n = sizeof(test) / sizeof(test[0]);
  for (int i = 0; i < n; i++) {
    if (test[i] == false) {
      return false;
    }
  }

  return true;
  // return has_false(n, test);
}

bool test_subtraction(bool print) {
  bool test[] = {true, true, true, true, true, true};

  if (subtract(3, 2) != 1) {
    test[0] = false;
  }

  if (subtract(-3, -2) != -1) {
    test[1] = false;
  }

  if (print) {
    // printf("Subtract 3 - 2 = %f: %s\n", subtract(3, 2), convert_result(test[0]));
  }
}

// ! Scientific Operations



// ! Main

int main(void) {
  bool results[] = {
    test_addition(false),
    test_subtraction(false)
  };

  printf("Running tests:\n");
  print_bar();
  printf("\nAddition Tests: %s\n", convert_result(test_addition(true)));
  print_bar();
  printf("\nSubtraction Tests: %s\n", convert_result(test_subtraction(true)));
  print_bar();

  size_t n = sizeof(results) / sizeof(results[0]);
  for (int i = 0; i < n; i++) {
    if (results[i] == false) {
      printf("Not all tests passed!\n");
      return 0;
    }
  }

  printf("All tests passed!");
  return 1;
}
