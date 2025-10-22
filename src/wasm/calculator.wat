(module
  (type (;0;) (func (param f64 f64) (result f64)))
  (type (;1;) (func (param f64) (result f64)))
  (type (;2;) (func (param f64) (result i32)))
  (type (;3;) (func))
  (type (;4;) (func (param i32)))
  (type (;5;) (func (result i32)))
  (func (;0;) (type 3)
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
  (func (;5;) (type 1) (param f64) (result f64)
    f64.const 0x1p+0 (;=1;)
    local.get 0
    f64.div
    f64.const 0x0p+0 (;=0;)
    local.get 0
    f64.const 0x0p+0 (;=0;)
    f64.ne
    select)
  (func (;6;) (type 2) (param f64) (result i32)
    local.get 0
    local.get 0
    i64.trunc_sat_f64_s
    f64.convert_i64_s
    f64.sub
    f64.abs
    f64.const 0x1.203af9ee75616p-50 (;=1e-15;)
    f64.lt)
  (func (;7;) (type 2) (param f64) (result i32)
    (local i32 i32)
    i32.const 1
    local.set 1
    local.get 0
    f64.abs
    local.tee 0
    f64.const 0x1p+0 (;=1;)
    f64.gt
    if  ;; label = @1
      i32.const 1
      local.set 2
      loop  ;; label = @2
        local.get 1
        i32.const 1
        i32.xor
        local.set 1
        local.get 0
        local.get 2
        i32.const 1
        i32.add
        local.tee 2
        f64.convert_i32_u
        f64.gt
        br_if 0 (;@2;)
      end
    end
    local.get 1
    i32.const 1
    i32.and)
  (func (;8;) (type 1) (param f64) (result f64)
    f64.const 0x1p+0 (;=1;)
    f64.const 0x0p+0 (;=0;)
    local.get 0
    local.get 0
    i64.trunc_sat_f64_s
    f64.convert_i64_s
    f64.sub
    f64.abs
    f64.const 0x1.a36e2eb1c432dp-14 (;=0.0001;)
    f64.lt
    select)
  (func (;9;) (type 0) (param f64 f64) (result f64)
    local.get 0
    local.get 1
    f64.add
    f64.const 0x1p-1 (;=0.5;)
    f64.mul)
  (func (;10;) (type 1) (param f64) (result f64)
    (local f64 f64 i32)
    local.get 0
    f64.const 0x0p+0 (;=0;)
    f64.le
    i32.eqz
    if  ;; label = @1
      local.get 0
      local.get 0
      f64.const 0x1p-1 (;=0.5;)
      f64.mul
      f64.const 0x1p+0 (;=1;)
      f64.add
      local.tee 2
      f64.div
      f64.const 0x0p+0 (;=0;)
      local.get 2
      f64.const 0x0p+0 (;=0;)
      f64.ne
      select
      local.set 1
      loop  ;; label = @2
        local.get 0
        local.get 1
        local.get 2
        f64.add
        f64.const 0x1p-1 (;=0.5;)
        f64.mul
        local.tee 2
        f64.div
        f64.const 0x0p+0 (;=0;)
        local.get 2
        f64.const 0x0p+0 (;=0;)
        f64.ne
        select
        local.set 1
        local.get 3
        i32.const 1
        i32.add
        local.tee 3
        i32.const 1000
        i32.ne
        br_if 0 (;@2;)
      end
    end
    local.get 1)
  (func (;11;) (type 0) (param f64 f64) (result f64)
    (local f64 i32)
    local.get 0
    local.get 1
    f64.mul
    local.tee 0
    f64.const 0x0p+0 (;=0;)
    f64.le
    i32.eqz
    if  ;; label = @1
      local.get 0
      local.get 0
      f64.const 0x1p-1 (;=0.5;)
      f64.mul
      f64.const 0x1p+0 (;=1;)
      f64.add
      local.tee 1
      f64.div
      f64.const 0x0p+0 (;=0;)
      local.get 1
      f64.const 0x0p+0 (;=0;)
      f64.ne
      select
      local.set 2
      loop  ;; label = @2
        local.get 0
        local.get 1
        local.get 2
        f64.add
        f64.const 0x1p-1 (;=0.5;)
        f64.mul
        local.tee 1
        f64.div
        f64.const 0x0p+0 (;=0;)
        local.get 1
        f64.const 0x0p+0 (;=0;)
        f64.ne
        select
        local.set 2
        local.get 3
        i32.const 1
        i32.add
        local.tee 3
        i32.const 1000
        i32.ne
        br_if 0 (;@2;)
      end
    end
    local.get 2)
  (func (;12;) (type 0) (param f64 f64) (result f64)
    (local f64 f64 f64 i32 i32)
    i32.const 1
    local.set 5
    loop  ;; label = @1
      f64.const 0x0p+0 (;=0;)
      local.set 2
      local.get 1
      local.get 0
      f64.mul
      local.tee 4
      f64.const 0x0p+0 (;=0;)
      f64.le
      i32.eqz
      if  ;; label = @2
        local.get 4
        local.get 4
        f64.const 0x1p-1 (;=0.5;)
        f64.mul
        f64.const 0x1p+0 (;=1;)
        f64.add
        local.tee 3
        f64.div
        f64.const 0x0p+0 (;=0;)
        local.get 3
        f64.const 0x0p+0 (;=0;)
        f64.ne
        select
        local.set 2
        i32.const 0
        local.set 6
        loop  ;; label = @3
          local.get 4
          local.get 3
          local.get 2
          f64.add
          f64.const 0x1p-1 (;=0.5;)
          f64.mul
          local.tee 3
          f64.div
          f64.const 0x0p+0 (;=0;)
          local.get 3
          f64.const 0x0p+0 (;=0;)
          f64.ne
          select
          local.set 2
          local.get 6
          i32.const 1
          i32.add
          local.tee 6
          i32.const 1000
          i32.ne
          br_if 0 (;@3;)
        end
      end
      local.get 1
      local.get 0
      f64.add
      f64.const 0x1p-1 (;=0.5;)
      f64.mul
      local.set 0
      local.get 2
      local.set 1
      local.get 5
      i32.const 1
      i32.add
      local.tee 5
      i32.const 1001
      i32.ne
      br_if 0 (;@1;)
    end
    local.get 2
    local.get 0
    f64.add
    f64.const 0x1p-1 (;=0.5;)
    f64.mul)
  (func (;13;) (type 1) (param f64) (result f64)
    (local f64)
    local.get 0
    f64.const 0x1p+0 (;=1;)
    f64.eq
    local.get 0
    f64.const 0x0p+0 (;=0;)
    f64.le
    i32.or
    if (result f64)  ;; label = @1
      local.get 1
    else
      f64.const 0x1.921fb5452455p+1 (;=3.14159;)
      f64.const 0x1p+0 (;=1;)
      f64.const 0x1p+2 (;=4;)
      local.get 0
      f64.const 0x1p+8 (;=256;)
      f64.mul
      local.tee 0
      f64.div
      f64.const 0x0p+0 (;=0;)
      local.get 0
      f64.const 0x0p+0 (;=0;)
      f64.ne
      select
      call 12
      local.tee 0
      local.get 0
      f64.add
      local.tee 0
      f64.div
      f64.const -0x1.62e42fead449cp+2 (;=-5.54518;)
      f64.add
      f64.const -0x1.62e42fead449cp+2 (;=-5.54518;)
      local.get 0
      f64.const 0x0p+0 (;=0;)
      f64.ne
      select
      local.tee 0
      i64.trunc_sat_f64_s
      f64.convert_i64_s
      local.tee 1
      local.get 0
      local.get 0
      local.get 1
      f64.sub
      f64.abs
      f64.const 0x1.a36e2eb1c432dp-14 (;=0.0001;)
      f64.lt
      select
    end)
  (func (;14;) (type 0) (param f64 f64) (result f64)
    (local f64)
    local.get 1
    f64.const 0x1p+0 (;=1;)
    f64.eq
    local.get 0
    f64.const 0x0p+0 (;=0;)
    f64.le
    i32.or
    local.get 0
    f64.const 0x1p+0 (;=1;)
    f64.eq
    local.get 1
    f64.const 0x0p+0 (;=0;)
    f64.le
    i32.or
    i32.or
    if (result f64)  ;; label = @1
      local.get 2
    else
      local.get 1
      call 13
      local.get 0
      call 13
      local.tee 0
      f64.div
      f64.const 0x0p+0 (;=0;)
      local.get 0
      f64.const 0x0p+0 (;=0;)
      f64.ne
      select
    end)
  (func (;15;) (type 0) (param f64 f64) (result f64)
    (local f64 f64 i32)
    block  ;; label = @1
      local.get 0
      f64.const 0x0p+0 (;=0;)
      f64.eq
      br_if 0 (;@1;)
      local.get 1
      f64.const 0x0p+0 (;=0;)
      f64.eq
      if  ;; label = @2
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
      i32.eqz
      if  ;; label = @2
        local.get 1
        f64.const -0x1p+0 (;=-1;)
        f64.eq
        if  ;; label = @3
          f64.const 0x1p+0 (;=1;)
          local.get 0
          f64.div
          return
        end
        local.get 1
        local.get 1
        i64.trunc_sat_f64_s
        f64.convert_i64_s
        f64.sub
        f64.abs
        f64.const 0x1.203af9ee75616p-50 (;=1e-15;)
        f64.lt
        if  ;; label = @3
          local.get 0
          local.set 2
          local.get 1
          f64.abs
          local.tee 3
          f64.const 0x1p+0 (;=1;)
          f64.gt
          if  ;; label = @4
            i32.const 1
            local.set 4
            loop  ;; label = @5
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
              br_if 0 (;@5;)
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
          if  ;; label = @4
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
          if  ;; label = @4
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
          br_if 2 (;@1;)
          f64.const -0x1p+0 (;=-1;)
          local.get 2
          f64.div
          return
        end
        local.get 0
        call 13
        drop
      end
      local.get 0
      local.set 2
    end
    local.get 2)
  (func (;16;) (type 0) (param f64 f64) (result f64)
    (local f64 i32 i32)
    i32.const 1
    local.set 4
    block  ;; label = @1
      local.get 0
      f64.abs
      local.tee 2
      f64.const 0x1p+0 (;=1;)
      f64.gt
      i32.eqz
      if  ;; label = @2
        i32.const 1
        local.set 3
        br 1 (;@1;)
      end
      i32.const 1
      local.set 3
      loop  ;; label = @2
        local.get 3
        i32.const 1
        i32.xor
        local.set 3
        local.get 2
        local.get 4
        i32.const 1
        i32.add
        local.tee 4
        f64.convert_i32_u
        f64.gt
        br_if 0 (;@2;)
      end
    end
    f64.const 0x0p+0 (;=0;)
    local.set 2
    block  ;; label = @1
      local.get 1
      f64.const 0x0p+0 (;=0;)
      f64.lt
      local.get 3
      i32.and
      local.get 1
      f64.const 0x0p+0 (;=0;)
      f64.eq
      i32.or
      br_if 0 (;@1;)
      local.get 0
      f64.const 0x1p+1 (;=2;)
      f64.eq
      if  ;; label = @2
        local.get 1
        f64.const 0x0p+0 (;=0;)
        f64.le
        br_if 1 (;@1;)
        local.get 1
        local.get 1
        f64.const 0x1p-1 (;=0.5;)
        f64.mul
        f64.const 0x1p+0 (;=1;)
        f64.add
        local.tee 0
        f64.div
        f64.const 0x0p+0 (;=0;)
        local.get 0
        f64.const 0x0p+0 (;=0;)
        f64.ne
        select
        local.set 2
        i32.const 0
        local.set 3
        loop  ;; label = @3
          local.get 1
          local.get 0
          local.get 2
          f64.add
          f64.const 0x1p-1 (;=0.5;)
          f64.mul
          local.tee 0
          f64.div
          f64.const 0x0p+0 (;=0;)
          local.get 0
          f64.const 0x0p+0 (;=0;)
          f64.ne
          select
          local.set 2
          local.get 3
          i32.const 1
          i32.add
          local.tee 3
          i32.const 1000
          i32.ne
          br_if 0 (;@3;)
        end
        br 1 (;@1;)
      end
      local.get 1
      f64.const 0x1p+0 (;=1;)
      local.get 0
      f64.div
      f64.const 0x0p+0 (;=0;)
      local.get 0
      f64.const 0x0p+0 (;=0;)
      f64.ne
      select
      call 15
      local.set 2
    end
    local.get 2)
  (func (;17;) (type 4) (param i32)
    local.get 0
    global.set 0)
  (func (;18;) (type 5) (result i32)
    global.get 0)
  (table (;0;) 2 2 funcref)
  (memory (;0;) 258 258)
  (global (;0;) (mut i32) (i32.const 66560))
  (export "memory" (memory 0))
  (export "add" (func 1))
  (export "subtract" (func 2))
  (export "multiply" (func 3))
  (export "divide" (func 4))
  (export "one_over" (func 5))
  (export "is_whole_num" (func 6))
  (export "is_even" (func 7))
  (export "close_to_int" (func 8))
  (export "am" (func 9))
  (export "sqroot" (func 10))
  (export "gm" (func 11))
  (export "agm" (func 12))
  (export "ln" (func 13))
  (export "logarithm" (func 14))
  (export "exponent" (func 15))
  (export "root" (func 16))
  (export "__indirect_function_table" (table 0))
  (export "_initialize" (func 0))
  (export "_emscripten_stack_restore" (func 17))
  (export "emscripten_stack_get_current" (func 18))
  (elem (;0;) (i32.const 1) func 0))
