#include <stdio.h>
#include <stdbool.h>
#include "calculator.h"

bool test_Addition(void) {
  bool test1, test2, test3;
  test1 = test2 = test3 = true;
  
  if (add(2, 2) != 4) {
    test1 = false;
  }

  printf("Add 2 + 2: " + test1);

  if (test1 == false || test2 == false || test3 == false) {
    return false;
  }
} 

int main(void) {
  printf("Running tests\n");
  test_Addition();
  return 0;
}
