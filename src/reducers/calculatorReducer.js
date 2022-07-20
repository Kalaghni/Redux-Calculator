import { evaluate, sqrt } from "mathjs";

const calculatorReducer = (state = "", action) => {
    var element = document.getElementById('mainscreen');
    try {
        element.classList.remove("error");
    }
    catch {

    }
   
    switch(action.type) {
        case "APPEND_NUM":
            return state + action.char.toString();
        case "APPEND_SYMBOL":
            return state + " " + action.char + " ";
        case "BACKSPACE_NUM":
            if (state.toString().endsWith(" ")) {
                return state.toString().slice(0, -3);
            }
            else {
                return state.toString().slice(0, -1);
            }            
        case "EQUALS":
            try {
                let result = evaluate(state);
                if (!isNaN(result)) {
                    return evaluate(state);
                }
                else {
                    element.classList.add("error");
                    return state;
                }
            }
            catch {
                element.classList.add("error");
                return state;
            }
        case "SQRT":
            try {
                let result = sqrt(parseFloat(state));
                if (!isNaN(result)) {
                    return result;
                }
                else {
                    element.classList.add("error");
                    return state;
                }
            }
            catch {
                element.classList.add("error");
                return state;
            }
        case "CLEAR":
            return "";
        case "NEGATIVE":
            try {
                let result = evaluate(state);
                if (!isNaN) {
                    return result * -1;
                }
                else {
                    element.classList.add("error");
                    return state;
                }
            }
            catch {
                element.classList.add("error");
                return state;
            }
        case "DECIMAL":
            return state + ".";
        default:
            return state;
    }
}
export default calculatorReducer;