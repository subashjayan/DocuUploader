import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FileInfo } from '../models/file.info';
import { Store } from '@ngrx/store';
import { AppState } from '../stateHandlers/file.upload.appstate';

@Component({
  selector: 'app-file-grid',
  templateUrl: './file-grid.component.html',
  styleUrls: ['./file-grid.component.css']
})
export class FileGridComponent implements OnInit {

  uploadedFiles : Observable<FileInfo[]>;

   constructor(private store: Store<AppState>) { 
    this.uploadedFiles = store.select('uploadFile');
  }


  ngOnInit() {
  }

}
