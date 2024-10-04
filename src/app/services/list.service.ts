import { Injectable } from '@angular/core';
import { Animal } from '../Animal';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  remove(animals: Animal[], animal: Animal){
    return animals.filter((a) => animal.name !== a.name)
  }

  add(animals: Animal[], animal: Animal){
    let newlist = animals
    newlist.push(animal)
    return newlist
  }
}
