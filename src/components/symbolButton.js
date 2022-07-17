import {appendSymbol} from "../actions";
import {useDispatch} from "react-redux";

export function SymbolButton(props) {

    const dispatch = useDispatch();

    return (<button className="number-btn" onClick={() => dispatch(appendSymbol(props.value))}>{props.name}</button>);
}