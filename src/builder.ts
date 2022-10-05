// developer implementation
interface ImplDeveloper{
    name:string;
    role?:string;
    seniority?:string;
    yearsOfExperience?:number;
}

//developer
class Developer implements ImplDeveloper{
    name: string;
    role?:string;
    seniority?:string;
    yearsOfExperience?:number;
    constructor(name:string){
        this.name=name;
    }
    
}

//developer builder
class DeveloperBuilder {
    developer: Developer;
    constructor(name:string){
        this.developer= new Developer(name);
    }

    setRole(role:string){
        this.developer.role=role;
        return this;
    }

    setSeniority(seniority:string){
        this.developer.seniority=seniority;
        return this;
    }

    setYearsOfExperience(yearsOfExperience:number){
        this.developer.yearsOfExperience=yearsOfExperience;
        return this;
    }

    build(){
        return this.developer;
    }
}

// using builder methods
const builder = new DeveloperBuilder('Dev1')
    .setRole('backend')
    .setSeniority("junior")
    .setYearsOfExperience(3)
    .build();

console.log(builder);

export {}