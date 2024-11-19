import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [NgFor, FormsModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  
  animals: Animal[] = []
  
  
  animalDetails = ''
  constructor(private listService: ListService) {
    this.getAnimals()
    this.carregarLista()
  }
  
  carregarLista(){
    const listaSalva = localStorage.getItem('myList')
    if (listaSalva) {
      this.animals = JSON.parse(listaSalva)
      console.log(this.animals)
    }
  }
  
  removeAnimal(animal: Animal){
    this.animals = this.animals.filter((a) => animal.name !== a.name)
    this.listService.remove(animal.id).subscribe();
  }
  
  animal_name: string = ''
  age: number = 0
  type: string = ''
  id: number = 0

  typeList: string[] = ['Dog', 'Cat', 'Horse', 'Turtle']
  new: Animal[] = []
  
  recebe(nome: string, type: string, age: number){ 
    let novo = {id: 0, age: 0, type: '', name: ''}
    novo.name = nome.replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase())
    novo.id = this.animals.length ? this.animals[this.animals.length - 1].id + 1 : 1
    novo.age = age
    novo.type = type
    this.animals = this.listService.add(this.animals, novo)
    this.listService.addLocalStorage(novo)
    this.listService.salvarLista
  }


  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }

  getAnimals(): void{
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

  
}
