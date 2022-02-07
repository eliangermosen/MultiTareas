import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.page.html',
  styleUrls: ['./tabla.page.scss'],
})
export class TablaPage implements OnInit {

  hastaNumeroList: number[] ;
  // hastaNumero: number ;
  numero: any;

  constructor(private activatedRoute: ActivatedRoute) {
    // this.hastaNumero = 13;
    this.hastaNumeroList = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  }

  ngOnInit() {
    this.numero = this.activatedRoute.snapshot.paramMap.get('numero');
    console.log('numero', this.numero);
    // this.activatedRoute.paramMap.subscribe(paranMap => {
    //   const reciveN = paramMap.get('multiplicadoNum')
    // })
  }

}
