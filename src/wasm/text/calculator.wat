(module
  (type (;0;) (func (param f64 f64) (result f64)))
  (type (;1;) (func))
  (type (;2;) (func (param f64) (result f64)))
  (type (;3;) (func (param i32)))
  (type (;4;) (func (result i32)))
  (func (;0;) (type 1)
    nop)
  (func (;1;) (type 0) (param f64 f64) (result f64)
    local.get 0
    local.get 1
    f64.add)
  (func (;2;) (type 0) (param f64 f64) (result f64)
    local.get 0
    local.get 1
    f64.sub)
  (func (;3;) (type 0) (param f64 f64) (result f64)
    local.get 0
    local.get 1
    f64.mul)
  (func (;4;) (type 0) (param f64 f64) (result f64)
    local.get 0
    local.get 1
    f64.div
    f64.const 0x0p+0 (;=0;)
    local.get 1
    f64.const 0x0p+0 (;=0;)
    f64.ne
    select)
  (func (;5;) (type 2) (param f64) (result f64)
    local.get 0)
  (func (;6;) (type 0) (param f64 f64) (result f64)
    (local f64 f64 i32)
    block  ;; label = @1
      block  ;; label = @2
        local.get 0
        f64.const 0x0p+0 (;=0;)
        f64.eq
        br_if 0 (;@2;)
        local.get 1
        f64.const 0x0p+0 (;=0;)
        f64.eq
        if  ;; label = @3
          f64.const 0x1p+0 (;=1;)
          f64.const -0x1p+0 (;=-1;)
          local.get 0
          f64.const 0x0p+0 (;=0;)
          f64.gt
          select
          return
        end
        local.get 0
        f64.const -0x1p+0 (;=-1;)
        f64.eq
        local.get 0
        f64.const 0x1p+0 (;=1;)
        f64.eq
        i32.or
        local.get 1
        f64.const 0x1p+0 (;=1;)
        f64.eq
        i32.or
        br_if 1 (;@1;)
        local.get 1
        f64.const -0x1p+0 (;=-1;)
        f64.eq
        if  ;; label = @3
          f64.const 0x1p+0 (;=1;)
          local.get 0
          f64.div
          return
        end
        local.get 0
        local.set 2
        local.get 1
        local.get 1
        local.get 1
        f64.add
        f64.sub
        local.get 1
        local.get 1
        f64.const 0x0p+0 (;=0;)
        f64.lt
        select
        local.tee 3
        f64.const 0x1p+0 (;=1;)
        f64.gt
        if  ;; label = @3
          i32.const 1
          local.set 4
          loop  ;; label = @4
            local.get 0
            local.get 2
            f64.mul
            local.set 2
            local.get 3
            local.get 4
            i32.const 1
            i32.add
            local.tee 4
            f64.convert_i32_u
            f64.gt
            br_if 0 (;@4;)
          end
        end
        local.get 1
        f64.const 0x0p+0 (;=0;)
        f64.gt
        i32.eqz
        local.get 0
        f64.const 0x0p+0 (;=0;)
        f64.lt
        local.get 2
        f64.const 0x0p+0 (;=0;)
        f64.gt
        i32.and
        local.tee 4
        i32.eqz
        i32.or
        i32.eqz
        if  ;; label = @3
          local.get 2
          f64.neg
          return
        end
        local.get 0
        f64.const 0x0p+0 (;=0;)
        f64.gt
        i32.eqz
        local.get 1
        f64.const 0x0p+0 (;=0;)
        f64.lt
        i32.eqz
        i32.or
        i32.eqz
        if  ;; label = @3
          f64.const 0x1p+0 (;=1;)
          local.get 2
          f64.div
          return
        end
        local.get 1
        f64.const 0x0p+0 (;=0;)
        f64.lt
        i32.eqz
        local.get 4
        i32.eqz
        i32.or
        br_if 0 (;@2;)
        f64.const -0x1p+0 (;=-1;)
        local.get 2
        f64.div
        local.set 2
      end
      local.get 2
      return
    end
    local.get 0)
  (func (;7;) (type 0) (param f64 f64) (result f64)
    local.get 1
    f64.const 0x1p+0 (;=1;)
    local.get 0
    f64.div
    call 6)
  (func (;8;) (type 3) (param i32)
    local.get 0
    global.set 0)
  (func (;9;) (type 4) (result i32)
    global.get 0)
  (table (;0;) 2 2 funcref)
  (memory (;0;) 258 258)
  (global (;0;) (mut i32) (i32.const 66560))
  (export "memory" (memory 0))
  (export "add" (func 1))
  (export "subtract" (func 2))
  (export "multiply" (func 3))
  (export "divide" (func 4))
  (export "percent" (func 5))
  (export "exponent" (func 6))
  (export "find_root" (func 7))
  (export "__indirect_function_table" (table 0))
  (export "_initialize" (func 0))
  (export "_emscripten_stack_restore" (func 8))
  (export "emscripten_stack_get_current" (func 9))
  (elem (;0;) (i32.const 1) func 0))
