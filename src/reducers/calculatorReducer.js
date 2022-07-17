import { evaluate, sqrt } from "mathjs";

const calculatorReducer = (state = "", action) => {
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
                    return state;
                }
            }
            catch {
                return state;
            }
        case "SQRT":
            return sqrt(parseFloat(state));
        case "CLEAR":
            return "";
        case "NEGATIVE":
            try {
                let result = evaluate(state);
                if (!isNaN) {
                    return result * -1;
                }
                else {
                    return state;
                }
            }
            catch {
                return state;
            }
        default:
            return state;
    }
}
export default calculatorReducer;