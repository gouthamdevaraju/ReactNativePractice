import React from "react";
import "./ListStyles.css";

// const ElementsList = () => {
//     return(
//     <ul className="listStyles">
//         <li>First component</li>
//         <li>Second component</li>
//         <li>Third</li>
//         <li>Fourth component</li>
//     </ul>
//     );
// };

const ElementsList = props => {

    console.log("This is prop: " + props.aPropsParameter.id);

    return(
    <ul className="listStyles">
        {
            props.aPropsParameter.map( 
                parama => 
                {
                    return <li key={parama.id}>{parama.text}</li>
                }
            )
        }
    </ul>
    );
};


export default ElementsList;