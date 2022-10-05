enum Position {
    Backend = "Backend",
    Frontend = "Frontend",
    Fullstack = "Fullstack"
}

enum Seniority {
    Junior = "Junior",
    Medior = "Medior",
    Senior = "Senior"
}
// product
interface ImplDeveloper {
    getPosition(): Position;
    getSeniority(): Seniority;
    name: string;
}


// concrete product
class BackendDeveloper implements ImplDeveloper {
    getPosition(): Position {
        return Position.Backend;
    }
    getSeniority(): Seniority {
        return Seniority.Junior
    }
    name: string = "Backend Developer 1";
    
}

// concrete product
class FrontendDeveloper implements ImplDeveloper {
    getPosition(): Position {
        return Position.Frontend;
    }
    getSeniority(): Seniority {
        return Seniority.Junior
    }
    name: string = "Frontend Developer 2";
    
}

// concrete product
class FullstackDeveloper implements ImplDeveloper {
    getPosition(): Position {
        return Position.Fullstack;
    }
    getSeniority(): Seniority {
        return Seniority.Junior
    }
    name: string = "Fullstack Developer 3";

    
}

//creator
abstract class FactoryCreator {
    public abstract getOrganizationName():string;
    public abstract addDevelopers(developersList: ImplDeveloper[]):void;
    public abstract findDeveloper(name:string):ImplDeveloper | undefined;
}

//concrete creator
class OrganizationFactory extends FactoryCreator {
    private developers: ImplDeveloper[] = [];

    constructor(private organizationName:string){
        super();
        this.organizationName=organizationName;
    }

    public getOrganizationName(): string {
        return this.organizationName;
    }

    addDevelopers(developersList: ImplDeveloper[]){
        this.developers = this.developers.concat(developersList)
    }

    findDeveloper(name:string): ImplDeveloper | undefined{
        return this.developers.find(dev => dev.name===name)
    }
}

const myFactory = new OrganizationFactory("Prodyna");

myFactory.addDevelopers([new BackendDeveloper(), new FrontendDeveloper(), new FullstackDeveloper()])

console.log(myFactory);
console.log(myFactory.findDeveloper("Fullstack Developer 3"));
console.log(myFactory.findDeveloper("Backend Developer 1")?.name);




export {};