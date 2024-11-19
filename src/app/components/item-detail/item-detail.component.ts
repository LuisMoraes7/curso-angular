import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../../services/list.service';
import { NgFor, NgIf } from '@angular/common';
@Component({
  selector: 'app-item-detail',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css'
})
export class ItemDetailComponent {
  animal?: Animal | false
  useranimal?: Animal[]
  id?: number
  constructor(private listService: ListService, private route: ActivatedRoute){
    this.getAnimal()
    console.log(this.id)
  }
  getAnimal(){
    this.id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(this.id).subscribe({
      next: (response) => {
        if (response === false){
          this.useranimal = this.listService.getUserAnimals()
          console.log(this.useranimal)
        } else{
          this.animal = response
        }
      }
    })
  }
}
