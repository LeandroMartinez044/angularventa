import { Component, OnInit, Input } from '@angular/core';
import { ClienteService } from '../services/cliente.service';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { stringify } from 'querystring';
import { IfStmt } from '@angular/compiler';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private clienteService: ClienteService) { }
  
  @Input()
  public nombre: String = "";

  @Input()
  public apellido: String = "";

  public nombreValid: boolean = false;
  public apellidoValid: boolean = false;
  
  
  ngOnInit() {

    console.log(this.nombreValid);
  }

  registrarCliente(f: NgForm){
      
      

      const myObserver = {
        next: x => {},
        error: err => {console.log("error")},
        complete: () => console.log("se cargo")

      };

      
      if(f.valid){

        this.clienteService.saveCliente(f.value).subscribe(myObserver);
      
      }else{
        
        this.nombreValid = false;
        this.apellidoValid = false;
        
        if(this.nombre == "" || this.nombre.length < 6){

          this.nombreValid  = true;
        }
        if(this.apellido == "" || this.apellido.length < 6){
          
          this.apellidoValid = true;
        }
        
        
        console.log("no estan los campos completos");
        
      
      }

  }


}
