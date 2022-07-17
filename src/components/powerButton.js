import {appendSymbol} from "../actions";
import {useDispatch} from "react-redux";

export function PowerButton(props) {

    const dispatch = useDispatch();

    return (<button className="number-btn" onClick={() => dispatch(appendSymbol("^"))}>x<sup>y</sup></button>);
}