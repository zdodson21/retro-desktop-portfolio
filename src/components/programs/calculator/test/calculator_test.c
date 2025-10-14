#include <stdio.h>
#include <stdbool.h>
#include "../calculator.h"
#include "helper.h"

// TODO figure out colored text (green & red) for pass and fail respectivly

bool test_Addition(void) {
  bool test1, test2, test3;
  test1 = test2 = test3 = true;
  
  if (add(2, 2) != 4) {
    test1 = false;
  }

  printf("Add 2 + 2: %s\n", convertResult(test1));

  if (add(3, 2) != 5) {
    test2 = false;
  }

  if (test1 == false || test2 == false || test3 == false) {
    return false;
  }
}

bool test_Subtraction(void) {
  bool test1, test2, test3;
  test1 = test2 = test3 = true;

  if (subtract(3, 2) != 1) {
    test1 = false;
  }

  printf("Subtract 3 - 2: %s\n", convertResult(test1));
}

int main(void) {
  printf("Running tests:\n");
  print_Bar();
  test_Addition();
  print_Bar();
  test_Subtraction();
  print_Bar();
  
  return 0;
}
