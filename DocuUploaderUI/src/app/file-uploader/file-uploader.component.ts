import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  uploadFileName : string;
  uploadForm: FormGroup;
  constructor( private formBuilder:FormBuilder)
   {  
     this.uploadForm =  this.formBuilder.group({
      'fileName': [this.uploadFileName, [Validators.required]]
     });
   }

  ngOnInit() {

  }

  uploadFile(){
    console.log(this.uploadForm.value);
  }
}
