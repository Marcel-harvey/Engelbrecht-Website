import { Component, effect, inject, input, OnInit, output, signal } from '@angular/core';
import { MessageInterface } from '../../../models/message.model';
import { NgClass } from '@angular/common';
import { MessageService } from '../../../services/modal/message.service';

@Component({
  selector: 'app-message-modal',
  imports: [NgClass],
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css'],
})
export class MessageModalComponent {
  // Dependandcies
  private readonly _modal = inject(MessageService);
  
  readonly message = this._modal.message

  onConfirm(): void {
    this._modal.close()
  }

  onBackdropClick(): void {
    this._modal.close()
  }
}
