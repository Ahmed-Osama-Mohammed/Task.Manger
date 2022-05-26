import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class TodoslistService {

  constructor(private http: HttpClient) {
   }
   getList(){
    return this.http.get("http://localhost:3000/list")
   }


   addTask(task: Task): Observable<any> {
    return this.http.post<Task>("http://localhost:3000/list", task)  
  }


   updateDoneOrNot(task: any): Observable<Task> {
    return this.http.put<Task>("http://localhost:3000/list/"+task.id, task)
   }


   deleteItem(id: number): Observable<unknown> {
    return this.http.delete("http://localhost:3000/list/"+id)
   }
   
}
