import { Injectable } from '@angular/core';
import { FormService } from './form.service';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
      private formService: FormService
  ) { }

  async sendForm(body: any){            
    try {
      await this.formService.sendMail(body).pipe(take(1)).toPromise() 
      return {
        toggleModal: true,
        title: 'Pronto!',
        message: 'Seu contato foi enviado e em breve entraremos em contato.',
        type: 'SUCCESS'
      }
    } catch (e) {      
      return {
        toggleModal: true,
        title: 'Ops...',
        message: 'Infelizmente, não foi possível enviar seu contato.',
        type: 'ERROR'
      }
    }    
  }
}
