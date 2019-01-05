import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { FileInfo } from '../models/file.info';
import { Store } from '@ngrx/store';
import { AppState } from '../stateHandlers/file.upload.appstate';
import { UploadFileAction } from '../stateHandlers/file.upload.actions';


@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {
  uploadFileName : string;
  uploadForm: FormGroup;
  uploadFiles : Observable<FileInfo[]>
  constructor( private formBuilder:FormBuilder, private store : Store<AppState> )
   {  
     this.uploadForm =  this.formBuilder.group({
      'fileName': [this.uploadFileName, [Validators.required]]
     });
     
     //this.uploadFiles = store.select('uploadFile');
   }

  ngOnInit() {

  }

  uploadFile(){
    
    console.log(this.uploadForm.value);
    this.store.dispatch(new UploadFileAction({fileName: this.uploadForm.value.fileName  ,path:this.uploadForm.value.fileName}) )    
  }
}
 