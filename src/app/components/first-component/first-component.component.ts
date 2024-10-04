import { Component } from '@angular/core';
import { FormsModule} from '@angular/forms'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-first-component',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  userInput: string = ''
  mostrarDiv: boolean = false;
  name: String = 'joca'

  processInput(){
    this.mostrarDiv = !(this.mostrarDiv)
    console.log(this.mostrarDiv)
  }
}


