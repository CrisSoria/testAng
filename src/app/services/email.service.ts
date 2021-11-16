import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class EmailService {
  private status$ = new Subject<string>();
  constructor() {}

  sendEmail(e: Event) {
    this.status$.next('processing');
    emailjs
      .sendForm(
        environment.MAIL_SERVICE_ID,
        environment.MAIL_TEMPLATE_ID,
        e.target as HTMLFormElement,
        environment.MAIL_USER_ID
      )
      .then(
        (result: EmailJSResponseStatus) => {
          console.log('DESDE SERVICE', result.text);
          this.status$.next('success');
        },
        (error) => {
          console.log('DESDE SERVICE', error.text);
          this.status$.next('fail');
        }
      );
  }

  getStatus() {
    return this.status$.asObservable();
  }
}
