import { Component } from '@angular/core';

@Component({
  selector: 'app-headder',
  templateUrl: './headder.component.html',
  styleUrls: ['./headder.component.css']
})
export class HeadderComponent {
  selectedFileName: string | undefined;

  onFileSelected(event: any) {
    const file = event.target.files[0];
    this.selectedFileName = file ? file.name : '';
    this.uploadFile(file);
  }
  uploadFile(file: any) {
    throw new Error('Method not implemented.');
  }
}
