//component implementation
interface ImplComponent{
    notify(message:string):void;
    receive(message:string):void;
}

class Mediator{
    components: Set<ImplComponent>;

    constructor(){
        this.components=new Set();
    }

    add(component:ImplComponent):void{
        // adding components
        this.components.add(component);
    }

    notify(message:string, originator:ImplComponent):void{
        this.components.forEach((component)=>{
            if(component!==originator){
                component.receive(message);
            }
        })
    }
}

class Component implements ImplComponent{

    mediator: Mediator;
    name:string;

    constructor(mediator:Mediator, name:string){
        this.mediator = mediator;
        this.name=name;
    }



    notify(message: string): void {
        console.log(this.name+" >>out>> "+message);
        this.mediator.notify(message, this);
    }
    receive(message: string): void {
        console.log(this.name+" <<in<< "+message);
    }
    
}

const myMediator = new Mediator();
const myComponent1 = new Component(myMediator, "Component1");
const myComponent2 = new Component(myMediator, "Component2");
const myComponent3 = new Component(myMediator, "Component3");

myMediator.add(myComponent1);
myMediator.add(myComponent2);
myMediator.add(myComponent3);
console.log("--------------------------------------------------------------------");
console.log(myMediator);
console.log("--------------------------------------------------------------------");
myComponent1.notify("comp1 notification");
console.log("--------------------------------------------------------------------");
myComponent2.notify("comp2 notification");
console.log("--------------------------------------------------------------------");
myComponent3.notify("comp3 notification");






export {};