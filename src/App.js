import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p title="This works!">
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           title = "This will redirect you to a new page"
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App = () => {
//   return <h1> This <span>is</span> ReactJS! </h1>;
// }

import ElementsList from './ListComponents/ElementsList';
import FormComp from './FormComponent/FormComp';

// const App = () => {
//   return (
    // <div>
    //   <h2 className="App">React Elements</h2>
    //   <ElementsList />
    // </div>
//   );
// }

const App = () => {

  // const listElements = [
  //   {id: 'cg1', text: 'list cg 1'},
  //   {id: 'cg2', text: 'list cg 2'},
  //   {id: 'cg3', text: 'list cg 3'},
  //   {id: 'cg4', text: 'list cg 4'},
  //   {id: 'cg5', text: 'list cg 5'},
  //   {id: 'cg6', text: 'list cg 6'},
  //   {id: 'cg7', text: 'list cg 7'},
  //   {id: 'cg8', text: 'list cg 8'},
  //   {id: 'cg9', text: 'list cg 9'},
  //   {id: 'cg10', text: 'list cg 10'}
  // ];

  const [listElements, setCourseGoals] = useState([
    {id: 'cg1', text: 'Hello goal 1'},
    {id: 'cg2', text: 'Hello goal 2'},
    {id: 'cg3', text: 'Hello goal 3'},
    {id: 'cg4', text: 'Hello goal 4'},
    {id: 'cg5', text: 'Hello goal 5'},
    {id: 'cg6', text: 'Hello goal 6'}
  ]);

  const addNewGoalHandler = (newGoal) => {
    // listElements.push(newGoal);
    // console.log(listElements);

    // Must use this type of state update when there is no dependency on the previous data. In our case below is not correct.
    // setCourseGoals(listElements.concat(newGoal));

    // Must use this type of state update when the current update depends on the previous data.
    setCourseGoals( (prevGoals) => {
      return prevGoals.concat(newGoal);
    });     


  };

  return (
    <div>
      <h2 className="App">React Elements</h2>
      <FormComp onAppendToForm={addNewGoalHandler}/>
      <ElementsList aPropsParameter={listElements}/>
    </div>
  );
}

export default App;
