import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component'
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { EventsComponent } from './components/events/events.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { PipesComponent } from "./components/pipes/pipes.component";
import { TwoWayBindingComponent } from "./components/two-way-binding/two-way-binding.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, FirstComponentComponent, ParentDataComponent, DirectivesComponent, IfRenderComponent, EventsComponent, EmitterComponent, ListRenderComponent, PipesComponent, TwoWayBindingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';
  userName = 'Cesar';
  data = {email: 'joca@gmail.com', role: 'programador front-end'}
}



