export enum calcButtons_e {
  // ? Controls
  BACK,
  CE, // Clears current entry on display
  C, // Clears entire calculation

  // ? Memory
  MC, // Memory Clear
  MR, // Memory Recall
  MS, // Memory Save
  MPLUS, // Add to Memory Value

  // ? Dual Value Operations
  ADD,
  SUBTRACT,
  MULTIPLY,
  DIVIDE,

  // ? Single Value Operations
  SQ_RT,
  PERCENT,
  ONE_OVER,

  // ? Solve
  EQUALS,

  // ? VALUE MODIFIERS
  POS_NEG,
  DECIMAL,

  // ! Scientific Mode

  // ? VARIABLES:
  PI
}
