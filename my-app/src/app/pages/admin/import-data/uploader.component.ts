import { Component, OnInit, Inject } from '@angular/core';
import { UploaderService } from 'src/app/services/admin/uploader.service';

@Component({
    selector: 'app-upload-data',
    templateUrl: './uploader.component.html',
    styleUrls: ['./uploader.component.css'],
    providers: [ UploaderService ]
})
export class UploaderComponent implements OnInit {
    message: string;

    constructor(private uploaderService: UploaderService) {}
    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }
  
    onPicked(input: HTMLInputElement) {
      const file = input.files[0];
      if (file) {
        this.uploaderService.upload(file).subscribe(
          msg => {
            input.value = null;
            this.message = msg;
          }
        );
      }
    }
  }