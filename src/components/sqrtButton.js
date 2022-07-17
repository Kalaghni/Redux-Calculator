import {sqrt} from "../actions";
import {useDispatch} from "react-redux";

export function SqrtButton() {

    const dispatch = useDispatch();

    return (<button className="number-btn" onClick={() => dispatch(sqrt())}>√</button>)
}