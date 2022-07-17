import {useSelector} from "react-redux";

export function MainScreen() {
    const display = useSelector((state) => state.display);

    return (<p className="main-screen">{display}</p>);
}