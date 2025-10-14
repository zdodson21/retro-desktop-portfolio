#include <stdio.h>
#include <stdbool.h>

void print_bar(void) {
  printf("-------------------\n");
}

char * convert_result(bool result) {
  if (result == true) {
    return "Pass";
  }

  return "Fail";
}

// TODO figure out colored text (green & red) for pass and fail respectivly