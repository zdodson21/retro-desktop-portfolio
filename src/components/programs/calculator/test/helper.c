#include <stdio.h>
#include <stdbool.h>

void print_Bar(void) {
  printf("-------------------\n");
}

char * convertResult(bool result) {
  if (result == true) {
    return "Pass";
  }

  return "Fail";
}