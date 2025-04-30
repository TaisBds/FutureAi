import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  selectedFile: File | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  onSubmit(): void {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('file', this.selectedFile);

    this.http.post('http://localhost:5000/upload', formData).subscribe({
      next: (res: any) => {
        // Salva os dados do gráfico no localStorage
        localStorage.setItem('graficoData', JSON.stringify(res));
        this.router.navigate(['/result']);
      },
      error: (err) => {
        console.error('Erro no upload', err);
      }
    });
  }
}
