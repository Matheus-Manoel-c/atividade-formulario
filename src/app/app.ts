import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, Formulario],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('atividade-formulario');
}
