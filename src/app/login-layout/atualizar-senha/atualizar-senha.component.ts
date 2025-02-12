import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import Notiflix from 'notiflix';
import cpf from 'cpf';

@Component({
  selector: 'app-atualizar-senha',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './atualizar-senha.component.html',
  styleUrl: './atualizar-senha.component.css'
})
export class AtualizarSenhaComponent {

  form: FormGroup;

  constructor(private service: UsuarioService, private fb: FormBuilder, private router: Router){
    this.form = fb.group({
      cpf:['',Validators.required],
      novaSenha:['',Validators.required]
    })
  }

  atualizarSenha(e: Event){
    e.preventDefault()
    if(this.form.invalid){
      Notiflix.Notify.failure("Preencha o formulário corretamente")
    }
    else{

      this.form.value.cpf = cpf.format(this.form.value.cpf)
      this.service.atualizarSenha(this.form.value).subscribe({
        next:(res: Response)=>{
          if(res.body != null){
            Notiflix.Notify.success("Senha atalizada com sucesso | CPF: " + this.form.value.cpf)
          }
        },
        error:(err)=>{
          Notiflix.Notify.failure("Erro ao atualizar senha: " + err)
        }
      })
    }
  }
}
