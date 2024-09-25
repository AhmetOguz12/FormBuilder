import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent {
  @Input() label: string = 'File Upload'; // Default label
  @Input() multiple: boolean = false; // Allows multiple file uploads
  @Input() accept: string = '*'; // File type restrictions
  @Input() maxFileSize: number = 1000000; // Maximum file size in bytes

  uploadedFiles: any[] = [];

  onUpload(event: any) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  clear() {
    this.uploadedFiles = [];
  }
}
