import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import Notiflix from 'notiflix';
import cpf from 'cpf'
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './cadastro-form.component.html',
  styleUrl: './cadastro-form.component.css'
})
export class CadastroFormComponent {

  form:FormGroup;

  constructor(private fb: FormBuilder, private service: UsuarioService, private router: Router) {
    this.form = fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      senha: ['', [Validators.minLength(8)]],
      CPF: ['', [Validators.minLength(11), Validators.maxLength(11)]],
    })
  }

  cadastrar() {
    if(this.form.invalid){
      Notiflix.Notify.failure("Preencha todos os dados");
    }
    else{    

      this.form.value.categoria = parseInt(this.form.value.categoria)
      this.form.value.CPF = cpf.format(this.form.value.CPF);

      this.service.cadastrarUsuario(this.form.value).subscribe({
      next:(value: HttpResponse<any>)=>{
        Notiflix.Notify.success("Usuário cadastrado!")
        setTimeout(()=>this.router.navigate(["/login"]),1000)
      },
      error:(err)=>{
        Notiflix.Notify.failure("Erro: ", err)
      },
    }
    )

    }
  }
}
