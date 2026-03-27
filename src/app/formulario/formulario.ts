import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  enviado = false;

  confirmarSenha = '';

  aluno = {
    nome: '',
    email: '',
    idade: null,
    senha: '',
    genero: '',
    cidade: '',
    termos: false
  };

  cadastrar(form: any) {

    if (form.valid && this.confirmarSenha === this.aluno.senha) {

      this.enviado = true;

      console.log("Dados cadastrados:", this.aluno);

    }

  }
}
