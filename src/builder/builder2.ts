// developer implementation
interface ImplEmployee{
    name:string;
    age?:number;
    email?:string;
}

//developer
class Employee implements ImplEmployee{
    name: string;
    age?:number;
    email?:string;
    constructor(name:string){
        this.name=name;
    }
}

//developer builder
class EmployeeBuilder {
    employee: Employee;
    constructor(name:string){
        this.employee= new Employee(name);
    }

    setEmail(email:string){
        this.employee.email=email;
        return this;
    }

    setAge(age:number){
        this.employee.age=age;
        return this;
    }

    build(){
        return this.employee;
    }
}

// using builder methods
const builder = new EmployeeBuilder('Employee 1')
    .setEmail('email@gmail.com')
    .setAge(25)
    .build();

console.log(builder);

export {}