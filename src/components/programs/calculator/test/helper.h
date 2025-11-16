#ifndef HELPER_H
#define HELPER_H

#define ANSI_COLOR_RED   "\x1b[31m"
#define ANSI_COLOR_GREEN "\x1b[32m"
#define ANSI_COLOR_RESET "\x1b[0m"

void print_bar(void);
bool test_add(double a, double b, double c);
bool test_sub(double a, double b, double c);
bool test_mult(double a, double b, double c);
bool test_div(double a, double b, double c, bool test_0);
bool test_one_over(double a, double b, bool test_0);
bool test_exponent(double base, double exp, double sol);
bool test_is_whole_num(double num, bool response);
bool test_sqroot(double num, double response);
bool test_ln(double in, double result);
bool test_agm(double a, double g, double expected_result);
bool print_status(size_t n, bool arr[]);

#endif
