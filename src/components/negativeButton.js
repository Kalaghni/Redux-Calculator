import {negative} from "../actions";
import {useDispatch} from "react-redux";

export function NegativeButton() {

    const dispatch = useDispatch();

    return(<button className="number-btn" onClick={() => dispatch(negative())}>{"-/+"}</button>);
}