export const appendNum = (x) => {
    return {
      type: "APPEND_NUM",
      char: x,
    };
  };

  export const appendSymbol = (x) => {
    return {
        type: "APPEND_SYMBOL",
        char: x
    }
  }

  export const back = () => {
    return {
      type: "BACKSPACE_NUM"
    };
  };

  export const equals = () => {
    return {
        type: "EQUALS"
    }
  }

  export const sqrt = () => {
    return {
        type: "SQRT"
    }
  }

  export const clear = () => {
    return {
        type: "CLEAR"
    }
  }

  export const negative = () => {
    return {
        type: "NEGATIVE"
    }
  }

  export const decimal = () => {
    return {
      type: "DECIMAL"
    }
  }