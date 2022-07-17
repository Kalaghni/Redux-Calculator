import {appendNum} from "../actions";
import { useDispatch } from "react-redux";

function NumberButton(props) {

    const dispatch = useDispatch();

    return (<button className="number-btn" onClick={() => dispatch(appendNum(props.name))}>{props.name}</button>);
}
export default NumberButton