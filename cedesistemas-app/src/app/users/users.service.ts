import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 

@Injectable()
export class UsersService{
    private baseUrl="http://cede-api.azurewebsites.net/api/Users";
    constructor(private http:HttpClient){

    }
    get(){  
        return this.http.get(this.baseUrl);
    }
    delete(id:string){
        let url= this.baseUrl + "/" + id;
        return this.http.delete(url);
    }
}
