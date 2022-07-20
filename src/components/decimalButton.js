import { decimal } from "../actions";
import { useDispatch } from "react-redux";

export function DecimalButton() {

    const dispatch = useDispatch();

    return(<button className="number-btn" onClick={() => dispatch(decimal())}>{"."}</button>);
}