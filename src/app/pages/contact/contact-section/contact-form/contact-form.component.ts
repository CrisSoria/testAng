import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  emailRegEx: string =
    "^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$";
  createFormGroup() {
    return new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.maxLength(30),
        Validators.pattern(this.emailRegEx),
      ]),
      message: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(1000),
      ]),
    });
  }
  contactForm: FormGroup;
  sendEmailStatus: string = '';

  constructor(private emailService: EmailService) {
    this.contactForm = this.createFormGroup();
  }

  ngOnInit(): void {}

  onResetForm() {
    this.contactForm.reset();
  }

  errorHandler(type: string): string {
    let errorMessage = 'Input inválido';
    if (type === 'email') {
      if (this.email?.hasError('required')) errorMessage = 'Ingresa un email';
      if (this.email?.hasError('pattern')) errorMessage = 'Email inválido';
    }
    if (type === 'message') {
      if (this.message?.hasError('required'))
        errorMessage = 'Ingresa un mensaje';
      if (this.message?.hasError('minlength'))
        errorMessage = 'Ingresa al menos 10 caracteres';
    }
    if (this.contactForm.get(type)?.hasError('maxlength'))
      errorMessage = 'Superaste el límite de caracteres';

    return errorMessage;
  }

  onSubmit(e: Event): void {
    /*  const data = {
      name: this.contactForm.value.name,
      emailAddress: this.contactForm.value.email,
      message: this.contactForm.value.message,
    };
    console.log(data); */
    if (this.contactForm.valid) {
      // this.emailService.sendEmail(e);
      this.onResetForm();
      this.sendEmailStatus = '¡Gracias por contactarme!';
    } else {
      // console.log('not valid');
      this.contactForm.markAllAsTouched();
      this.sendEmailStatus = 'existen Inputs inválidos';
    }
  }

  get name() {
    return this.contactForm.get('name');
  }
  get email() {
    return this.contactForm.get('email');
  }
  get message() {
    return this.contactForm.get('message');
  }
}
