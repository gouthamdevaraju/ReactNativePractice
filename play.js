var nameIs = 'Max';
let number = 123;
var hasHobbies = true;

number = 30;

function summariseUser (userName, userAge, userHasHobbies) {

    return ('Name is ' + nameIs + ', Age is ' + number + ', hobbies are ' + hasHobbies);
}

let output = summariseUser(
    nameIs, number, hasHobbies
)

const namedFunc = function(userName, userAge, userHasHobbies) {
    return ('Name is ' + nameIs + ', Age is ' + number + ', hobbies are ' + hasHobbies);
}

const unNamedFunc = (userName, userAge, userHasHobbies) => {
    return ('Name is ' + nameIs + ', Age is ' + number + ', hobbies are ' + hasHobbies);
}

const signleLineFun = (userName, userAge, userHasHobbies) => ('Name is ' + nameIs + ', Age is ' + number + ', hobbies are ' + hasHobbies);

console.log( 'SignleLine: ' + signleLineFun(
    nameIs, number, hasHobbies
));

console.log(namedFunc(
    nameIs, number, hasHobbies
));

console.log(unNamedFunc(
    nameIs, number, hasHobbies
));

console.log(output)

console.log(nameIs);



const person = {
    name: 'Max',
    age: 29,
    greet: () => {
        console.log('Hi, I am ' + this.name)
    }
}

person.greet();

const personOne = {
    name: 'Max',
    age: 29,
    greet: function() {
        console.log('Hi, I am ' + this.name)
    }
}

personOne.greet();

const personTwo = {
    name: 'Maxi',
    age: 29,
    greet() {
        console.log('Hi, I am ' + this.name)
    }
}

personTwo.greet();

const hobbies = ['Swimming', 'Criket'];

for (let hobby of hobbies) {
    console.log(hobby);
}

console.log(hobbies.map( hob => {
    return 'Hobby: ' + hob;
} ));

console.log(hobbies.map( hob => 'HobbyOne: ' + hob ));

console.log(hobbies);


const names = ['Frog', 'Dog', 'Goat'];
console.log(names);
names.push('Elephant');
console.log(names);

// Speard operators

const oldArray = ['Hello', 'How', 'Are']
console.log(oldArray);

const newCopiedArray = [...oldArray];
newCopiedArray.push('You');
console.log(newCopiedArray);

const copiedPerson = {...person}

console.log(copiedPerson);


// Rest operator
const normalArguments = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}

console.log(normalArguments(1, 2, 3));

// in above function the parameters are static and cannot pass more than defined number of arguments.
// Rest opearator allows to pass dynamic number of parameter as an arguments to a function.

const restArguments = (...dynamicArgs) => {
    return dynamicArgs;
}

console.log(restArguments(1, 2));
console.log(restArguments('DynamicOne', 'DynamicTwo'));
console.log(restArguments('DynamicOne', 'DynamicTwo', 'DynamicThree'));


// Object destructuring. Restricting access to the properties of reference types.

const car = {
    carName: 'Mustang',
    cost: '$120',
    actualCost: '$100'
}

const getCarDetails = ({ carName, cost }) => {
    console.log('Name of the car: ' + carName + ' & Cost of car: ' + cost + ' & No access to actual cost of the car.');
}

getCarDetails(car);

const {carName, cost} = car;

console.log('Name of car is: ' + carName + ' and cost is: ' + cost);

// destructing arrays

const arrayForDestructing = ['FirstElement', 'SecondElement', 'ThridElement'];

const [elementOne, elementTwo] = arrayForDestructing;

console.log(elementOne);
console.log(elementTwo);


// Asyncronus code - Getting lost in nested callbacks. Promises comes to rescue.

const fetchData = callback => {
    setTimeout( () => {

        callback('Done!');

    }, 1500 );
}

setTimeout(() => {

    console.log('Done with timer!');

    fetchData( buext => {
        console.log(buext);
    })

}, 2000);


// Promises 

const fetchAllData = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve('Fetching Done!');
        }, 1500 );
    } );
    return promise;
};

setTimeout( () => {
    console.log('Started fetching data!!')
    fetchAllData()
    .then( text => {
        console.log(text);
        return fetchAllData();
    })
    .then ( text2 => {
        console.log(text2);
    });

}, 2000);




