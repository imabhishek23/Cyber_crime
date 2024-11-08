import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contactForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.contactForm.valid) {
      await this.presentLoading();
      try {
        await this.simulateApiCall();
        await this.presentSuccessToast();
        this.contactForm.reset();
      } catch (error) {
        await this.presentErrorToast('An error occurred while sending the message.');
      } finally {
        await this.dismissLoading();
      }
    } else {
      this.highlightFormErrors();
      await this.presentErrorToast('Please fill out all required fields correctly.');
    }
  }

  private async presentLoading() {
    const loading = await this.loadingController.create({
      message: 'Sending message...',
      spinner: 'crescent',
      cssClass: 'cyber-loading'
    });
    await loading.present();
  }

  private async dismissLoading() {
    await this.loadingController.dismiss();
  }

  private simulateApiCall(): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log('Message sent:', this.contactForm.value);
        resolve();
      }, 2000);
    });
  }

  private async presentSuccessToast() {
    const toast = await this.toastController.create({
      message: 'Message sent successfully',
      duration: 2000,
      color: 'success',
      cssClass: 'cyber-toast'
    });
    await toast.present();
  }

  private async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000,
      color: 'danger',
      cssClass: 'cyber-toast'
    });
    await toast.present();
  }

  private highlightFormErrors() {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      if (control && control.invalid) {
        control.markAsTouched();
      }
    });
  }
}
