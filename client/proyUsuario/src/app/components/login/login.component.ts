import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner'; 
import { Router } from '@angular/router';



import { UsuarioService } from 'src/app/services/usuario.service';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form:FormGroup;
  msg: string = '';
  loading = false;


  constructor(private router: Router, private fb: FormBuilder, private _snackbar: MatSnackBar, 
    private userService: UsuarioService, private tokenStorage: TokenStorageService) { 
      this.form = this.fb.group({
        usuario: ['', Validators.required],
        password: ['', Validators.required]
      });

    }

    ngOnInit(): void {
      this.loading = false;
      this.tokenStorage.signOut();
    }
    ingresar(){
      const  username= this.form.value.usuario;
      const password= this.form.value.password;

    
      if(username=="UTN"&&password=="123"){
        this.simulacionLoading();  
        }
        else{
          this.msg="Usuario y/o contraseña invalidad";
          this.showMsg(this.msg);
          this.form.reset;
          
        }
    }
  
   /* ingresar() {
      const dataInput = {
        username: this.form.value.usuario,
        password: this.form.value.password
      }
  
      //Llama al método de login
      this.userService.singin(dataInput)
        .subscribe({
           next: (data) => {
            console.log(data);
            //se guarda la información en el local storage
            this.tokenStorage.saveToken(data.token);
            this.tokenStorage.saveUser(data);
  
            //Se valida si es un acceso u otro
            if (data.user.rol === 'user') {
              this.router.navigateByUrl('/usuario/');
            }
            if (data.user.rol === 'admin') {
              this.router.navigateByUrl('/dashboard');
            }
            this.loading = false;
            this.showMsg('Bienvenido al sistema!');
           },
           error: (e: any) => {
            if(e.status ===  401){//Acceso no autorizado
              if(e.error.success=== false){}
                this.showMsg(e.error.msg);
             }
             this.loading = false;
           }
        });
    }
  */

    
    showMsg(msg:string){
      this._snackbar.open(msg, 'Cerrar',{
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      })
    };
  


   //Metodo solo simula el proceso de login en un tiempo más extenso
   simulacionLoading(){
    //Muestra el mensaje de cargando
    this.loading = true;
    setTimeout(() => {
      this.ingresar();
      this.router.navigateByUrl('/admin');
    }, 1000);
  }

}
