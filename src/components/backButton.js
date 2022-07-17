import { back } from "../actions";
import {useDispatch} from "react-redux";

export function BackButton() {

    const dispatch = useDispatch();

    return (<button className="number-btn" onClick={() => dispatch(back())}>{"←"}</button>)
}