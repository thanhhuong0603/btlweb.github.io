import { EMAIL, PASSWORD } from "../../constants/type.js";
import { isEmail, isPassword } from "./input.js";
export const validateInput = (input, typeValidate, cbInputEvent, cbTouched) => {
    let isTouched = false;
    let isValid = false;
    input.oninput = () => {
        const value = input.value;
        switch (typeValidate) {
            case EMAIL:
                isValid = isEmail(value);
                break;
            case PASSWORD:
                isValid = isPassword(value);
                break;
        }
        cbInputEvent({
            isValid,
            isTouched,
            type: 'input'
        });
    };
    input.onblur = () => {
        isTouched = true;
        cbTouched({
            isValid,
            isTouched,
            type: 'touched'
        });
    };
    return {
        isValid,
        isTouched,
    };
};
