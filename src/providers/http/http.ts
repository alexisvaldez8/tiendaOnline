import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {

 
  constructor(public http: HttpClient) {
    console.log('Hello HttpProvider Provider');
  }

  novedades(){
    var url = 'http://localhost:8080/TiendaOnline/lista_productos_nuevos.php';
    console.log(url);
    
   return new Promise((resolve, reject) => {
    this.http.get(url)
       .subscribe(data => {
         resolve(data);
        }, (err) =>{
          reject(err);
        });
   });


 }

 inicio(){
  var url = 'http://localhost:8080/TiendaOnline/inicio.php';
  console.log(url);

  return new Promise((resolve, reject) => {
    this.http.get(url)
       .subscribe(data => {
         resolve(data);
        }, (err) =>{
          reject(err);
        });
   });


 }


}
