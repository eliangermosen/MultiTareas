import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'traductor',
    loadChildren: () => import('./traductor/traductor.module').then( m => m.TraductorPageModule)
  },
  {
    path: 'multiplicador',
    loadChildren: () => import('./multiplicador/multiplicador.module').then( m => m.MultiplicadorPageModule)
    // children:[
    //   {
    //     path: '',
    //     loadChildren: () => import('./multiplicador/multiplicador.module').then( m => m.MultiplicadorPageModule)
    //   },
    //   {
    //     path: ':multiplicadoNum',
    //     loadChildren: () => import('./multiplicador/tabla/tabla.module').then( m => m.TablaPageModule)
    //   }
    // ]
  },
  {
    path: 'tabla/:numero',
    loadChildren: () => import('./multiplicador/tabla/tabla.module').then( m => m.TablaPageModule)
  },
  {
    path: 'video',
    loadChildren: () => import('./video/video.module').then( m => m.VideoPageModule)
  },
  {
    path: 'calculadora',
    loadChildren: () => import('./calculadora/calculadora.module').then( m => m.CalculadoraPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
