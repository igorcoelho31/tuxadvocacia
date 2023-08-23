import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  httpOptions = {
    headers: new HttpHeaders({'Content-type' : 'application/json'})
  };

  nameButton = "Enviar";
  dados = {
    titulo: "",
    url: ""
  };

  constructor(private http:HttpClient){

  }


  /* Método de cadastro */
  cadastro(form:any){
    /* console.log(form.value); */
   /*  alert(form.value.titulo + " " + form.value.url); */
    /* document.write("<strong>Título: </strong>" + form.value.titulo + "<br><hr>" + "<strong>URL: </strong>"+ form.value.url); */

    this.http.post("http://localhost:3000/posts" ,form.value, this.httpOptions).subscribe();


  }
}