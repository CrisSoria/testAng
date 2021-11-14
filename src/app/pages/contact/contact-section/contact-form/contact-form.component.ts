import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  nameInput: string;
  emailInput: string;
  messageInput: string;

  constructor(private emailService: EmailService) {}

  ngOnInit(): void {}

  onSubmit(e: Event): void {
    console.log(
      'se envia: ',
      this.nameInput,
      this.emailInput,
      this.messageInput
    );
    // this.emailService.sendEmail(e);
    this.nameInput = '';
    this.emailInput = '';
    this.messageInput = '';
  }
}
