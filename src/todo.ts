import {Router, RouterConfiguration} from 'aurelia-router';

export class ToDo {
    public title: string;
    public newItemName: string;
    public toDoList: ToDoItem[];

    constructor(){
        this.title = "To Do List";
        this.toDoList = [];
    }

    public addThisItem(){
        this.addNewItem(this.newItemName);
    }

    public addNewItem(itemName: string){
        if(itemName === '' || itemName === undefined) return;
        console.log(itemName);
        this.toDoList.push(new ToDoItem(itemName));
    }    
}

export class ToDoItem{
    done: boolean;
    name: string;

    constructor(name: string){
        this.name = name;
        this.done = false;
    }
}