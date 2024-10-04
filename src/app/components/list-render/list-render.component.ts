import { Component } from '@angular/core';
import { NgFor, TitleCasePipe } from '@angular/common';
import { Animal } from '../../Animal';
import { ListService } from '../../services/list.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-list-render',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.css'
})
export class ListRenderComponent {
  animal_name: string = ''
  age: number = 0
  type: string = ''

  typeList: string[] = ['Dog', 'Cat', 'Horse']

  animals: Animal[] = [
    {name: 'Turca', type: 'Dog', age: 5},
    {name: 'Tom', type: 'Cat', age: 6},
    {name: 'Frida', type: 'Dog', age: 3},
    {name: 'Bob', type: 'Horse', age: 1}
  ]
  
  
  animalDetails = ''
  constructor(private listService: ListService) {}
  
  removeAnimal(animal: Animal){
    console.log('Removendo animal...')
    this.animals = this.listService.remove(this.animals, animal)
  }
  
  novo: Animal = {name: this.animal_name, type: this.type, age: this.age}
  recebe(nome: string, type: string, age: number){
    this.novo.name = nome.replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase())
    this.novo.age = age
    this.novo.type = type
    this.animals = this.listService.add(this.animals, this.novo)
    console.log(this.novo)
  }
  showAge(animal: Animal): void {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos!`
  }
}
