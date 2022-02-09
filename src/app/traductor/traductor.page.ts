import { ToastController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-traductor',
  templateUrl: './traductor.page.html',
  styleUrls: ['./traductor.page.scss'],
})
export class TraductorPage implements OnInit {

  numero: number;
  resultado: string;

  private unidades: NumData[] = [
    {
      num: 1,
      letter: 'Uno'
    },
    {
      num: 2,
      letter: 'Dos'
    },
    {
      num: 3,
      letter: 'Tres'
    },
    {
      num: 4,
      letter: 'Cuatro'
    },
    {
      num: 5,
      letter: 'Cinco'
    },
    {
      num: 6,
      letter: 'Seis'
    },
    {
      num: 7,
      letter: 'Siete'
    },
    {
      num: 8,
      letter: 'Ocho'
    },
    {
      num: 9,
      letter: 'Nueve'
    }
  ];

  private decenaUnidades: NumData[] = [
    {
      num: 10,
      letter: 'Diez'
    },
    {
      num: 11,
      letter: 'Once'
    },
    {
      num: 12,
      letter: 'Doce'
    },
    {
      num: 13,
      letter: 'Trece'
    },
    {
      num: 14,
      letter: 'Catorce'
    },
    {
      num: 15,
      letter: 'Quince'
    },
    {
      num: 16,
      letter: 'Dieciseis'
    },
    {
      num: 17,
      letter: 'Diecisiete'
    },
    {
      num: 18,
      letter: 'Dieciocho'
    },
    {
      num: 19,
      letter: 'Diecinueve'
    },
    {
      num: 20,
      letter: 'Veinte'
    },
    {
      num: 2,
      letter: 'Veinti y '
    }
  ];

  private decenas: NumData[] = [
    {
      num: 3,
      letter: 'Treinta'
    },
    {
      num: 4,
      letter: 'Cuarenta'
    },
    {
      num: 5,
      letter: 'Cincuenta'
    },
    {
      num: 6,
      letter: 'Sesenta'
    },
    {
      num: 7,
      letter: 'Setenta'
    },
    {
      num: 8,
      letter: 'Ochenta'
    },
    {
      num: 9,
      letter: 'Noventa'
    }
  ];

  private centenas: NumData[] = [
    {
      num: 1,
      letter: 'Ciento'
    },
    {
      num: 2,
      letter: 'Doscientos'
    },
    {
      num: 3,
      letter: 'Trescientos'
    },
    {
      num: 4,
      letter: 'Cuatrocientos'
    },
    {
      num: 5,
      letter: 'Quinientos'
    },
    {
      num: 6,
      letter: 'Seicientos'
    },
    {
      num: 7,
      letter: 'Setecientos'
    },
    {
      num: 8,
      letter: 'Ochocientos'
    },
    {
      num: 9,
      letter: 'Novecientos'
    }
  ];

  constructor(private toastCtrl: ToastController) { }

  ngOnInit() {
  }

  convertir(num){
    if(this.numero===null || this.numero===undefined){
      this.presentToast();
    }
    else if(this.numero < 0 || this.numero > 1000){
      this.resultado = undefined;
      this.infoToast();
    }
    else if(num===1000){
      this.resultado = 'Mil';
    }
    else{
      this.seekLetters(num.toString().split('').reverse());
    }
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Debe Ingresar Un Número Para Convertir.',
      duration: 2000,
      color: 'danger',
      icon: 'warning',
    });
    toast.present();
  }
  async infoToast() {
    const toast = await this.toastCtrl.create({
      message: 'Debe Ingresar Un Número Entre 0 y 1000.',
      duration: 2000,
      color: 'warning',
      icon: 'information-circle',
    });
    toast.present();
  }

  seekLetters(num) {
    this.resultado = '';
    console.log(num);
    // if (num[3]) {
    //   this.resultado = 'mil';
    // }
    if (num[2] && num[2] !== 0) {
      this.resultado += this.numeroLetra(this.centenas, parseInt(num[2])) + ' ';
    }
    if (num[1] && num[1] !== 0) {
      const n = parseInt(num[1] + num[0]);
      if (n < 30) {
        if(n> 20)
        {
          this.resultado += this.numeroLetra(this.decenaUnidades, 2);
        }
        else{
          this.resultado += this.numeroLetra(this.decenaUnidades, n) + ' ';
        }
      }
      else {
        this.resultado += this.numeroLetra(this.decenas, parseInt(num[1])) + ' ';
        if (num[0] !== 0){
          this.resultado += 'y ';
        }
      }
    }
    if (num[0] !== 0 && num[1] !== 1){
      this.resultado += this.numeroLetra(this.unidades, parseInt(num));
    };
  }

  numeroLetra(list, num){
    return list.find(i => {return i.num === num;}).letter;
  }

}

export interface NumData {
  num: number;
  letter: string;
}
