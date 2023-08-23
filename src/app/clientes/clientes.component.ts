import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Clientes } from '../model/clientes.model';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit{
  
  nomeButton = "60 Anos";
  controle = false;

  msg: string = "Nossos Clientes";
  img: string = "https://cdn.pixabay.com/photo/2017/09/07/01/16/justitia-2723660_1280.jpg";
  
  
  pessoaCaixa:Clientes[] = [
   
  ];

  
  
  clicou(){
  
    this.controle ? this.nomeButton = "60 anos" : this.nomeButton = "Todos";
    return this.controle = !this.controle;

  }

  constructor(private http:HttpClient){}
 
  ngOnInit():void{
    this.http.get<Clientes[]>('http://localhost:3000/posts').subscribe(box => this.pessoaCaixa=box)
  }

  
}
