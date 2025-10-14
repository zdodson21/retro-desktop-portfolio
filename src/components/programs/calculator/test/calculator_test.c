#include <stdio.h>
#include <stdbool.h>
#include "../calculator.h"
#include "helper.h"

// ! Standard Operations

bool test_addition(void) {
  bool test1 = true, test2 = true, test3 = true;

  if (add(2, 2) != 4) {
    test1 = false;
  }

  printf("Add 2 + 2: %s\n", convert_result(test1));

  if (add(3, 2) != 5) {
    test2 = false;
  }

  printf("Add 3 + 2: %s\n", convert_result(test2));

  if (test1 == false || test2 == false || test3 == false) {
    return false;
  }
}

bool test_subtraction(void) {
  bool test1 = true, test2 = true, test3 = true;

  if (subtract(3, 2) != 1) {
    test1 = false;
  }

  printf("Subtract 3 - 2: %s\n", convert_result(test1));
}

// ! Scientific Operations



// ! Main

int main(void) {
  printf("Running tests:\n");
  print_bar();
  test_addition();
  print_bar();
  test_subtraction();
  print_bar();

  return 0;
}
