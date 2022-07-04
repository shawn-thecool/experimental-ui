import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";
import { setCountByAmount } from "./Counter.slice";

export function Counter() {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootState) => state.counter);

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(setCountByAmount(count - 1))}
        >
          -1
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(setCountByAmount(count + 1))}
        >
          +1
        </button>
      </div>
    </div>
  );
}
