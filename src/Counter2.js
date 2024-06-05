import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {decrement2, increment2, incrementByAmount} from './Slice2';
import { useState } from "react";

export function Counter2() {
    const count2 = useSelector((state2) => state2.counter2.value2)
    const dispatch = useDispatch()
    const [incrementAmount, setincrementAmount] = useState('5');

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment2())}>
                    Increment2
                </button>
                <span>{count2}</span>
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement2())}>
                    Decrement2
                </button>
            </div>
            <div>
                <input
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={e => setincrementAmount(e.target.value)}
                />
                <button
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incrementAmount) || 0))
                    }>
                    Add Amount
                </button>
            </div>
        </div>
    )
}