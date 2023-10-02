import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
@Component({
    selector:'app-todo',
    templateUrl:'./todos.component.html',
    styleUrls:['./todos.component.css']
})
export class TodoComponent implements OnInit{
    title='todowork'
    ngOnInit(): void {
        
    }
}