//pure function
// function add(a, b) {
//     return a + b;
//     }
//     console.log(add(1, 2));
//     console.log(add(6, 8));
    

    //bind example with pure function
    let name = {
        firstName: "John",
        lastName: "Doe"
    }
    let printName = function (hometown, state) {
        console.log(this.firstName + " " + this.lastName + " from " + hometown + ", " + state);
    }
    let printMyName = printName.bind(name, "Delhi");
    printMyName("India");