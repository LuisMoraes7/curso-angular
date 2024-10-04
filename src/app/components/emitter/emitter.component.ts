import { Component } from '@angular/core';
import { ChangeNumberComponent } from '../change-number/change-number.component';

@Component({
  selector: 'app-emitter',
  standalone: true,
  imports: [ChangeNumberComponent],
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.css'
})
export class EmitterComponent {
  myNumber: number = 0
  botaoFoiClicado(botao: string){
    if (botao == 'botao1'){
      this.myNumber += 1
    } else{
      this.myNumber -= 1
    }
  }
}
