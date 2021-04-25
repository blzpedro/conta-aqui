import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal-form',
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent implements OnInit {
  
  @Input() title: string = ""
  @Input() message: string = ""
  @Input() type: string = ""
  @Output() closeEvent: EventEmitter<boolean> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeModal(){
    this.closeEvent.emit()
  }

}
