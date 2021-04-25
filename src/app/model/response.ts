export class Response {
    toggleModal: boolean;
    message: string;
    title: string;
    type: string;

    constructor(){
        this.toggleModal = false; 
        this.message = ''; 
        this.title = '';
        this.type = '';
    }
} 


