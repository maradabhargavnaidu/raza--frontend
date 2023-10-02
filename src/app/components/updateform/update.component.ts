import {Component} from "@angular/core"
import { ActivatedRoute, Router } from "@angular/router"
import { OnInit } from "@angular/core"
import { HttpClient } from "@angular/common/http"
import {FormBuilder} from "@angular/forms";
@Component({
    selector:'update-form',
    templateUrl:'./update.component.html'
})

export class UpdateComponent implements OnInit{
    public id=''
    oneTask=[];
    updateTaskData=this.formBuilder.group({
        id:this.id,
        title:'',
        description:''
    })
    constructor(private route:ActivatedRoute,private httpclient:HttpClient,private formBuilder:FormBuilder,private router:Router){
        
    }
    ngOnInit(): void {
        this.id=this.route.snapshot.paramMap.get('id');
        console.log(this.oneTask)
        this.getIdTask();
    }
    getIdTask(){
        this.httpclient.get(`http://localhost:3200/getone/${this.id}`).subscribe((res)=>this.oneTask.push(res))
    }
    update(data:any){
        this.httpclient.post(`http://localhost:3200/update/${this.id}`,data).subscribe((res)=>console.log(res));
        this.router.navigateByUrl('');
    }
}