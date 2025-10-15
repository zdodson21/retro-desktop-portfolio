#include <stdio.h>
#include <stdbool.h>

void print_results() {

}

void print_bar(void) {
  printf("-------------------\n");
}

bool test_add(double a, double b, double c) {
  
}

char * convert_result(bool result) {
  if (result == true) {
    return "Pass";
  }

  return "Fail";
}

// TODO get this to work
bool has_false(size_t n, bool arr[]) {
  for (size_t i = 0; i < n; i++) {
    if (arr[i] == false) {
      return false;
    }
  }

  return true;
}

// TODO figure out colored text (green & red) for pass and fail respectivly

