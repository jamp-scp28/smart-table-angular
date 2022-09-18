import { Injectable } from "@angular/core";
import { adminInterfaces } from "../interfaces/admin.interfaces";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class usersDataService{
    private usersURL = 'https://cavipetrolapi.onrender.com/api/v1/users';
    constructor(private http: HttpClient){
    }

    getUsers(){
       return this.http.get(this.usersURL)
    }

    addUser(newUser: adminInterfaces.User){
        const response = this.http.post(this.usersURL + '/add',{newUser}).subscribe(data=>{
            console.log('POST RESPONSE:', response);
        })
        return response;
    }

    updateUser(id: number, newData: adminInterfaces.User){
        const response = this.http.put(this.usersURL + '/update/' + id,{newData})
        return response;
    }
   
    deleteUser(id: number){
        const response = this.http.delete(this.usersURL + '/' + id)
        return response;
    }

}