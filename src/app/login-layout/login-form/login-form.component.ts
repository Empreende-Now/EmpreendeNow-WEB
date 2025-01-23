import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import Notiflix from 'notiflix';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent {

  form: FormGroup

  constructor(private service: UsuarioService, private fb: FormBuilder, private router: Router){
    this.form = fb.group({
      email:['',[Validators.email, Validators.required]],
      senha:['',[Validators.minLength(8), Validators.required]]
    })
  }


  login(e: Event){
    e.preventDefault()
    if(this.form.invalid){
      Notiflix.Notify.failure("Preencha o formulário corretamente")
    }
    else{
      this.service.login(this.form.value).subscribe({
        next:(res)=>{
            if(res.body === null){
              Notiflix.Notify.failure("Login o senha inválidos")
            }else if(res.body != null){
              Notiflix.Notify.success("Login efetuado com sucesso!")
              setTimeout(()=>{this.router.navigate(['home'])}, 1500)
            }
        },
        error:(err: HttpResponse<any>)=>{
          Notiflix.Notify.failure("Email ou senha incorretos" + err.statusText)
          setTimeout(()=>{this.router.navigate(['home'])}, 1500)
        }
      })
    }
  }

}
