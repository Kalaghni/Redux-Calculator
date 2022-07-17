import {clear} from "../actions";
import {useDispatch} from "react-redux";

export function ClearButton() {

    const dispatch = useDispatch();

    return (<button className="number-btn" onClick={() => dispatch(clear())}>C</button>)
}