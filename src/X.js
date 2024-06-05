import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {mul} from './Xslice.js';
import {add} from './Aslice.js'
import {dec} from './Dslice.js'
import {div} from './Vslice.js'
import { useState } from "react";

export function Cal(){
    const count3 = useSelector((state3) => state3.counter3.value)
    const count4 = useSelector((state4) => state4.counter4.value)
    const count5 = useSelector((state5) => state5.counter5.value)
    const count6 = useSelector((state6) => state6.counter6.value)
    const dispatch = useDispatch()
    const dispatch2 = useDispatch()
    const [multiplier, setMultiplier] = useState(0);
    const [multiplicand, setMultiplicand] = useState(0);
    const [multiplithird, setMultiplithird] = useState(0);
    const [add1, setAdd1] = useState(0);
    const [add2, setAdd2] = useState(0);
    const [add3, setAdd3] = useState(0);
    const [dec1, setDec1] = useState(0);
    const [dec2, setDec2] = useState(0);
    const [dec3, setDec3] = useState(0);
    const [div1, setDiv1] = useState(0);
    const [div2, setDiv2] = useState(0);
    const [div3, setDiv3] = useState(0);

    return (
        <div>
            <div>
                <input
                    value={multiplier}
                    onChange={e => setMultiplier(e.target.value)}
                />
                X
                <input
                    value={multiplicand}
                    onChange={e => setMultiplicand(e.target.value)}
                />
                X
                <input
                    value={multiplithird}
                    onChange={e => setMultiplithird(e.target.value)}
                />
                =
                {count3}
                <br></br>
                <button
                    onClick={() =>
                        dispatch(mul({"multiplier": multiplier, "multiplicand": multiplicand, "multiplithird": multiplithird}))
                    }
                >
                    Count
                </button>
            </div>
            <br></br>
            <div>
                <input
                    value={add1}
                    onChange={e => setAdd1(e.target.value)}
                />
                +
                <input
                    value={add2}
                    onChange={e => setAdd2(e.target.value)}
                />
                +
                <input
                    value={add3}
                    onChange={e => setAdd3(e.target.value)}
                />
                =
                {count4}
                <br></br>
                <button
                    onClick={() =>
                        dispatch2(add({"add1": add1, "add2": add2, "add3": add3}))
                    }
                >
                    Count
                </button>
            </div>
            <br></br>
            <div>
                <input
                    value={dec1}
                    onChange={e => setDec1(e.target.value)}
                />
                -
                <input
                    value={dec2}
                    onChange={e => setDec2(e.target.value)}
                />
                -
                <input
                    value={dec3}
                    onChange={e => setDec3(e.target.value)}
                />
                =
                {count5}
                <br></br>
                <button
                    onClick={() =>
                        dispatch2(dec({"dec1": dec1, "dec2": dec2, "dec3": dec3}))
                    }
                >
                    Count
                </button>
            </div>
            <br></br>
            <div>
                <input
                    value={div1}
                    onChange={e => setDiv1(e.target.value)}
                />
                /
                <input
                    value={div2}
                    onChange={e => setDiv2(e.target.value)}
                />
                /
                <input
                    value={div3}
                    onChange={e => setDiv3(e.target.value)}
                />
                =
                {count6}
                <br></br>
                <button
                    onClick={() =>
                        dispatch2(div({"div1": div1, "div2": div2, "div3": div3}))
                    }
                >
                    Count
                </button>
            </div>
        </div>
    )
}