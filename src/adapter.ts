interface ImplBackend {
    useSpringBoot():void;
}

interface ImplFrontend {
    useReactTs():void;
}

class Backend implements ImplBackend {
    useSpringBoot(): void {
        console.log("from backend class");
    }
    
}

class Frontend implements ImplFrontend {
    useReactTs(): void {
        console.log("from frontend class");
    }
    
}

class BackendToFrontend implements ImplFrontend{
    backendDev: ImplBackend;

    constructor(backendDev:ImplBackend){
        this.backendDev=backendDev;
    }

    useReactTs(): void {
        console.log("from backend to frontend class");
        this.backendDev.useSpringBoot();
    }
    
    
}


let newBackendDev = new Backend();
let newBackToFront = new BackendToFrontend(newBackendDev);
newBackToFront.useReactTs();


export {};