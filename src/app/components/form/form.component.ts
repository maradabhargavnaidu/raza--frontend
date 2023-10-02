import { HttpClient } from "@angular/common/http";
import {Component} from "@angular/core";
import {FormBuilder} from "@angular/forms";
import { map} from "rxjs";
import { Router } from "@angular/router";
@Component({
    selector:'app-form',
    templateUrl:'./form.component.html'
})
export class formComponent{
    url="http://localhost:3200/addtask"
    data= [];
    TaskData=this.formBuilder.group({
        title:'',
        description:''
    })
    constructor(private formBuilder:FormBuilder,private httpClient:HttpClient,private router:Router){
        // this.data=this.getTask();
        this.getTask();
        console.log(this.data);
    }

    addTask(data:any){
        this.httpClient.post(this.url,data).subscribe((res)=>console.info(res));
        window.location.reload();
    }
    getTask(){
        this.httpClient.get("http://localhost:3200/alltasks").pipe(map((res)=>{
            // console.log(res);
            for(const key in res){
                // this.data.push({...res[key]});
                this.data.push(res[key]);
            }
        })).subscribe();
    }
    deleteTask(id:any){
        this.httpClient.post("http://localhost:3200/deletetask",{id}).subscribe((res)=>console.log(res))
        window.location.reload();
    }
    updateTask(id:any){
        this.router.navigateByUrl('/update/'+id);
    }
}