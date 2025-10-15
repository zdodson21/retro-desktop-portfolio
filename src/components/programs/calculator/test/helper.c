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

// bool has_false(size_t n, bool *arr) {
//   for (int i = 0; i < n; i++) {
//     if (arr[i] == false) {
//       return false;
//     }
//   }

//   return true;
// }

// TODO figure out colored text (green & red) for pass and fail respectivly

