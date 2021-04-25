import { Component, OnInit } from '@angular/core';
import { Response } from 'src/app/model/response';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(
    private utilsService: UtilsService
  ) { }

  ngOnInit(): void {
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
