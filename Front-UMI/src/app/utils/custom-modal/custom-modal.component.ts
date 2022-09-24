import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

export interface modalButton {
  text: string;
  class: string;
  value: string;
}

@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html',
  styleUrls: ['./custom-modal.component.scss']
})
export class CustomModalComponent implements OnInit {

  @Input() showModal: boolean = false;
  @Input() title: string = '';
  @Input() message: string = '';
  @Input() buttons: modalButton[] = [];
  @Output() modalClosed = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  toggleModal() {

  }

  exitModal(value: string) {
    this.modalClosed.emit(value);
    this.showModal = !this.showModal;
  }
}
