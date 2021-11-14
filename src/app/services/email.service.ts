import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmailService {
  constructor() {}

  sendEmail(e: Event) {
    emailjs
      .sendForm(
        environment.MAIL_SERVICE_ID,
        environment.MAIL_TEMPLATE_ID,
        e.target as HTMLFormElement,
        environment.MAIL_USER_ID
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }
}
