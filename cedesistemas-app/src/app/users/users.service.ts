import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from './user.model';
 

@Injectable()
export class UsersService{
    private baseUrl="https://cede-api.azurewebsites.net/api/Users";
    constructor(private http:HttpClient){

    }
    getAll(){  
        return this.http.get(this.baseUrl);
    }
    get(id:string){  
        let url= this.baseUrl + "/" + id;
        return this.http.get(url);
    }
     
    delete(id:string){
        let url= this.baseUrl + "/" + id;
        return this.http.delete(url);
    }

    addUpdate(body: UserModel){
        if (body.Id) {
            //Update
            let url= this.baseUrl + "/" + body.Id;
            return this.http.put(url, body);
        }else{
            //Add
            return this.http.post(this.baseUrl, body);
        }
    }
}
