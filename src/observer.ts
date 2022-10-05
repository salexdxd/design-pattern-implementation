import { updateMetaProperty } from "typescript";

//subject interface (declares -> subscribe(), unsubscribe(), notify())
interface ImplObservable {
    // subscribe method
    subscribe(observer:ImplObservable):void;
    // unsubscribe method
    unsubscribe(observer:ImplObservable):void;
    // notify method
    notify(...args: unknown[]):void;
}

//concrete subject (implements -> subscribe(), unsubscribe(), notify())
class Subject implements ImplObservable{

    observers:Set<ImplObserver>;
    constructor(){
        this.observers = new Set();
    }


    subscribe(observer: ImplObserver): void {
        this.observers.add(observer);
    }
    unsubscribe(observer: ImplObserver): void {
        this.observers.delete(observer);
    }
    notify(...args: unknown[]): void {
        this.observers.forEach((observer)=>{
            observer.notify(...args);
            // console.log("notified");
        });
    }
    
}

//observer interface (declares -> notify())
interface ImplObserver{
    // receive notification
    notify(...args:unknown[]):void;
}

let COUNTER =0;
//concrete observer (implements -> notify())
class Observer implements ImplObserver {
    id:number;

    constructor(observable:ImplObservable){
        this.id= ++COUNTER;
    }

    notify(...args: unknown[]): void {
        console.log(`observer with id ${this.id} received: ${JSON.stringify(args)}`);
    }
}

const mySubject = new Subject();
const myObserver1 = new Observer(mySubject);
const myObserver2 = new Observer(mySubject);

mySubject.observers.add(myObserver1);
mySubject.observers.add(myObserver2);

mySubject.notify('first notification', [1,2,3])
// myObserver1.notify('asd');
mySubject.unsubscribe(myObserver2);

mySubject.notify("after unsubscribing obs2", [1,4,5])



// console.log(mySubject);
// console.log(myObserver1);
// console.log(myObserver2);









export {};