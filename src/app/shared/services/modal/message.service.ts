import { Injectable, signal } from '@angular/core';
import { MessageInterface } from '../../models/message.model';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private _message = signal<MessageInterface | null>(null);

  message = this._message.asReadonly();

  open(data: MessageInterface): void {
    this._message.set(data);
  }

  close(): void {
    this._message.set(null);
  }
}
