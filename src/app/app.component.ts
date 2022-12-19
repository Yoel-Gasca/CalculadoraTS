//Se importa el componente
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// Se exporta para realizar cálculos simples utilizando números proporcionados por el usuario.
export class AppComponent {
  title = 'Calculadora';
  numero1:number=0;
  numero2:number=0;
  resultado:number=0;

  suma():void{

    this.resultado=this.numero1+this.numero2;
  }
  resta():void{

    this.resultado=this.numero1-this.numero2;
  }
  multiplicacion():void{

    this.resultado=this.numero1*this.numero2;
  }
  divicion():void{

    this.resultado=this.numero1/this.numero2;
  }
}
