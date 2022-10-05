
//ImplComponent
interface ImplComponent{

    referenceToParent?:Company;

    //a method each leaf and composite container should implement
    indent(indent:string):void;

    //called before a leaf is attached to a composite
    detach():void;
    
}


//leaves (developers)
class Developer implements ImplComponent{
    name:string;
    referenceToParent?: Company | undefined;

    constructor(name:string){
        this.name=name;
    }



    indent(indent: string): void {
        console.log(`${indent} x ${this.name}`);
    }
    detach(): void {
        // detaching this leaf from its parent composite
        if(this.referenceToParent){
            this.referenceToParent.delete(this);
        };
    }

}




//composite that can contain leaves and composites (company)
class Company implements ImplComponent{
    referenceToParent?: Company | undefined;
    name:string;
    components:ImplComponent[];

    constructor(name:string){
        this.name=name;
        this.components = [];
    }


    indent(indent: string): void {
        // detach leaf / composite from any current parent reference and
        // then set the parent reference to this composite
        console.log(`${indent} x ${this.name}`);
        this.components.forEach((component) => {
            component.indent(indent+"..");
        })
    }

    attach(component: ImplComponent):void{
        component.detach();
        component.referenceToParent = this;
        this.components.push(component);
    }

    delete(component: ImplComponent):void{
        // removes leaf/composite from this composite this.components
        const index = this.components.indexOf(component);
        if(index>-1){
            this.components.splice(index,1);
        }
    }    

    detach(): void {
        // detaching this composite from its parent composite
        if(this.referenceToParent){
            this.referenceToParent.delete(this);
            this.referenceToParent = undefined;
        }
    }

}

const myCompany = new Company("Company 1");
const myDev1 = new Developer("Dev1");
const myDev2 = new Developer("Dev2");
// console.log(myCompany);
myCompany.attach(myDev1);
// console.log(myCompany);
myCompany.attach(myDev2);
// console.log(myCompany);


const myCompanyA = new Company("Company 2");
myCompany.attach(myCompanyA);
// console.log(myCompany);

const myDev3 = new Developer("Dev3");
myCompanyA.attach(myDev3);

console.log(myCompany);
console.log(myCompanyA);
const myCompanyB = new Company("Company 3");
const myDev4 = new Developer("Dev4");
myCompanyB.attach(myDev4);
myCompany.attach(myCompanyB);
myCompany.indent('');


console.log();
myCompanyB.attach(myCompanyA);
// myCompany.seniority("");





export {};