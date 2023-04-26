import React, {useState} from "react";
import "./FormCompStyle.css"

const FormComp = props => {

    const onAddHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: generateRandomString(10).toString(),
            text: enteredText
        }

        console.log(newGoal);

        setEnteredText('');

        props.onAppendToForm(newGoal);
    };

    const generateRandomString = (lenth) => {
        const char = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890';
        const random = Array.from(
            {length: lenth},
            () => char[Math.floor(Math.random() * char.length)]
        );
        const randomString = random.join("");
        return randomString;
    };

    const [enteredText, setEnteredText] = useState ('');

    const textChangeHandler = event => {
        setEnteredText(event.target.value);
    }

    return (
        <form className="form-comp-style" onSubmit={onAddHandler}>
            <input type="text" value={enteredText} onChange={textChangeHandler}/>
            <button type="submit"> Add To Element </button>
        </form>
    );
}

export default FormComp;