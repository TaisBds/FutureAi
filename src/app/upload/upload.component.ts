import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: true,
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css'],
})
export class UploadComponent {
  constructor(private router: Router) {}

  onSubmit() {
    // aqui futuramente você processa o arquivo
    this.router.navigate(['/result']);
  }
}
