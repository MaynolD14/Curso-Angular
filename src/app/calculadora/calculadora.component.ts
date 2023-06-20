import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  resultado = 0; 
  number1: number = 0; 
  number2: number = 0; 
  
  constructor() { }

  ngOnInit() {
  }

  PrimerNumero(number1: any){
    this.number1 =+ number1.target.value; 
  }

  SegundoNumero(number2: any){
    this.number2 =+ number2.target.value; 
  }

  Sumar(){
    this.resultado = this.number1 + this.number2
    console.log(this.resultado)
  }
}
