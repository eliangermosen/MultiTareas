import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-multiplicador',
  templateUrl: './multiplicador.page.html',
  styleUrls: ['./multiplicador.page.scss'],
})
export class MultiplicadorPage implements OnInit {

  multiplicado: number;

  constructor(private router: Router,
              private toastCtrl: ToastController ) { }

  ngOnInit() {
  }

  clicando(){
    if(this.multiplicado===null || this.multiplicado===undefined){
      // console.error('if');
      this.presentToast();
    }
    else{
      console.log(this.multiplicado, 'else');
      // this.router.navigate(['multiplicador',this.multiplicado]);
      this.router.navigate(['/tabla',this.multiplicado]);
    }
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: 'Debe Ingresar Un Número.',
      duration: 2000,
      color: 'danger',
      icon: 'warning',
      // icon: 'information-circle',
    });
    toast.present();
  }

}
