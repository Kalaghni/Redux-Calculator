import {equals} from "../actions";
import {useSelector, useDispatch} from "react-redux";

export function EqualsButton() {

    const dispatch = useDispatch();
    const current = useSelector((state) => state.display);

    return (<button className="number-btn" onClick={() => dispatch(equals(current))}>=</button>)
}