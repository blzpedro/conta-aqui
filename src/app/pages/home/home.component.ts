import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from 'src/app/model/response';
import { UtilsService } from './../../services/utils.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
    console.log(this.response)
  }

  redirect(route: any){
    this.router.navigate([route])
  }

  name: string = ""
  email: string = ""
  tel: any = ""
  response: Response = new Response
  async sendBody(){
    let hasInfo = this.name != "" && this.email != "" && this.tel != ""
    let data = {}
    if(hasInfo){
      data = {
        "Nome": this.name,
        "E-mail": this.email,
        "Telefone": this.tel
      }
      this.response = await this.utilsService.sendForm(data)
      console.log(this.response)
    } else {
      this.response.toggleModal = true,
      this.response.title = 'Ops...',
      this.response.message = 'Preencha todos os campos.',
      this.response.type = 'WARNING'
    }
  }

  closeModal(){
    this.response.toggleModal = !this.response.toggleModal;
    setInterval(() => {
      location.reload();
    }, 2000)
  }

}