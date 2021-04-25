import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/model/response';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  constructor(
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
  }


  name: string = ""
  email: string = ""
  tel: any = ""
  companyName: any = ""
  billing: any = ""
  response: Response = new Response
  async sendBody(){
    let hasInfo = this.name != "" && this.email != "" && this.tel != "" 
    let data = {}
    if(hasInfo){
      data = {
        "Nome": this.name,
        "E-mail": this.email,
        "Telefone": this.tel,
        "Nome da empresa": this.companyName,
        "Faturamento Mensal": this.billing
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
