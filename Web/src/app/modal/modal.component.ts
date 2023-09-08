import { Component, Input, Output, EventEmitter } from '@angular/core'; // Import EventEmitter

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() isOpen: boolean = false;
  @Output() closeModalEvent = new EventEmitter<void>(); // Define an output event

  closeModal() {
    this.closeModalEvent.emit(); // Emit the event to close the modal
  }
}
