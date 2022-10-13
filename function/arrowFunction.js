//arrow function
const add = (a, b) => {
    return a + b;
    }
    console.log(add(1, 2));
    console.log(add(6, 8));

    // bind example with arrow function
    let name = {
        firstName: "John",
        lastName: "Doe"
    }
    let printName = (hometown, state) => {
        console.log(name.firstName + " " + name.lastName + " from " + hometown + ", " + state);
    }   
    let printMyName = printName.bind(name, "Delhi");
    printMyName("India");