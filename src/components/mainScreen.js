import {useSelector} from "react-redux";

export function MainScreen() {
    const display = useSelector((state) => state.display);

    return (<p id="mainscreen" className="main-screen">{display}</p>);
}