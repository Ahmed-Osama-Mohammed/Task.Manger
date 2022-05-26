import { TodoslistService } from './../services/todoslist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
date=new Date()
months:string[] = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
month:string = this.months[this.date.getMonth()];
day:number = this.date.getDate()
year:number = this.date.getFullYear()
dayName:string = this.getDayName("en-EN");

toDosList:any=[];
newTask:string="";
taskDone:boolean = false;
key:boolean = true;
editItem:string="";
selectedItem:number=0;
deletedItem:any={};
constructor(public TodoslistService:TodoslistService){
}

getDayName(locale:string)
{
    return this.date.toLocaleDateString(locale, { weekday: 'long' });        
}



doneOrNot(index:number){
 
  this.toDosList[index].done = !this.toDosList[index].done

  this.TodoslistService.updateDoneOrNot(this.toDosList[index]).subscribe(task => this.toDosList[index]=task);

}

openAddTask() {
  let x: any = document.querySelector('.add-bg');
  document.getElementsByTagName("body")[0].style.overflowY="hidden";
  x.style.display = "block";
}

close(){
    let x:any=document.querySelector(".add-bg");
    document.getElementsByTagName("body")[0].style.overflowY="scroll";
    x.style.display="none"
    let y:any=document.querySelector(".edit-bg");
    document.getElementsByTagName("body")[0].style.overflowY="scroll";
    y.style.display="none"
    let z:any=document.querySelector(".delete-bg");
    document.getElementsByTagName("body")[0].style.overflowY="scroll";
    z.style.display="none"
  }

checkReq(){
if(this.newTask.length==0){
  this.key=true
}
else{
  this.key=false
}
}

onSubmit(){
  
  let addedTask:any={  
    description:this.newTask,
    done:this.taskDone,
    id:this.toDosList[this.toDosList.length-1].id+1
  }

  this.TodoslistService.addTask(addedTask).subscribe(task => this.toDosList.push(task));

  this.close();
}


openEdit(index:number){
  let x: any = document.querySelector('.edit-bg');
  document.getElementsByTagName("body")[0].style.overflowY="hidden";
  x.style.display = "block";
  this.editItem=this.toDosList[index].description
  this.selectedItem=index
}


onSubmitEdit(){
  this.toDosList[this.selectedItem].description=this.editItem
  this.TodoslistService.updateDoneOrNot(this.toDosList[this.selectedItem]).subscribe(task => this.toDosList[this.selectedItem]=task);

  this.close()

  
}

openDelete(item:Task){
  let x: any = document.querySelector('.delete-bg');
  document.getElementsByTagName("body")[0].style.overflowY="hidden";
  x.style.display = "block";
  this.deletedItem=item

}
deleteItem(){
  for(let i=0;i<this.toDosList.length;i++){
    if(this.toDosList[i].id===this.deletedItem.id){
      this.toDosList.splice(i,1)

    }
  }
  this.TodoslistService.deleteItem(this.deletedItem.id).subscribe()
  this.close()
}


ngOnInit(){
  
  this.TodoslistService.getList().subscribe(response => {
    this.toDosList = response
    console.log(this.toDosList);
  })
}
}
