import { Component } from '@angular/core';


interface Animal {
  especie: string,
  favoritos: Favorito[]
};

interface Favorito {
  id: number,
  nombre: string
};


@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent {

  nuevaEspecie: string = '';

 animal: Animal = {
  especie: 'Gato',
  favoritos: [
   { id: 1, nombre: 'Tini'},
   { id: 2, nombre: 'Mika'}
  ]
 }

 agregarFavorito(){
  const nuevoFavorito: Favorito = {
    id: this.animal.favoritos.length + 1,
    nombre:this.nuevaEspecie
  }

  this.animal.favoritos.push({...nuevoFavorito});
  this.nuevaEspecie = '';
 }

  eliminar(i:number){
    this.animal.favoritos.splice(i, 1);
  }

  guardar(){
    console.log('posteado')
  }

}
