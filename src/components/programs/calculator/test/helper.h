#ifndef HELPER_H
#define HELPER_H

#define ANSI_COLOR_RED   "\x1b[31m"
#define ANSI_COLOR_GREEN "\x1b[32m"
#define ANSI_COLOR_RESET "\x1b[0m"

void print_bar(void);
bool test_add(double, double, double);
bool test_sub(double, double, double);
bool test_mult(double, double, double);
bool test_div(double, double, double, bool);
bool test_one_over(double, double, bool);
bool test_exponent(double, double, double);
bool test_is_whole_num(double, bool);
bool test_sqroot(double, double);
bool test_ln();
bool test_agm();
// bool has_false(size_t, bool);

#endif
