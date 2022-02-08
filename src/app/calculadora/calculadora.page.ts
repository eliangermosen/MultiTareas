import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  pantalla: string;
  valor = '0';
  anteriorValor = '0';
  ultimoOperador = '+';
  teclas=[0,1,2,3,4,5,6,7,8,9,'+','-','X','/','AC','=','.'];

  constructor() {
    this.pantalla='0';
   }

  ngOnInit() {
  }

  del(){
    this.pantalla='0';
  }

  presionarTecla(tecla){
    console.log(tecla);
    if(typeof tecla == 'number'){
      console.log('es un numero');
      if(this.pantalla==='0'){
        this.pantalla=''+tecla;
      }
      else{
        this.pantalla+=tecla;
      }
    }
    else if(tecla === '.'){
      this.pantalla+=tecla;
    }
    else if(tecla === '='){
      if(this.ultimoOperador==='+'){
        console.log('suma');
        this.pantalla= ''+ (parseInt(this.pantalla) + parseInt(this.anteriorValor));
      }
      if(this.ultimoOperador==='-'){
        console.log('resta');
        this.pantalla= ''+ (parseInt(this.anteriorValor) - parseInt(this.pantalla));
      }
      if(this.ultimoOperador==='X'){
        console.log('multiplica');
        this.pantalla= ''+ (parseInt(this.pantalla) * parseInt(this.anteriorValor));
      }
      if(this.ultimoOperador==='/'){
        console.log('divide');
        this.pantalla= ''+ (parseInt(this.anteriorValor) / parseInt(this.pantalla));
      }
    }
    else{
      this.anteriorValor = this.pantalla;
      this.pantalla='0';
      this.ultimoOperador = tecla;
    }

  }

}
