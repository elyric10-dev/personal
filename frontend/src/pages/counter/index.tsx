import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "~/redux/features/counterSlice";
import { type RootState } from "~/redux/features/counterSlice";

export default function CounterPage() {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="grid place-items-center gap-4">
      <h1>The is {counter}</h1>
      <button
        onClick={() => dispatch(increment())}
        className="rounded-md border px-6 py-2 shadow-md"
      >
        Increment
      </button>
      <button
        onClick={() => dispatch(decrement())}
        className="rounded-md border px-6 py-2 shadow-md"
      >
        Decrement
      </button>
    </div>
  );
}
