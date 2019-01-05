import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { FileGridComponent } from './file-grid/file-grid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { uploadReducer } from './stateHandlers/file.upload.reducer';

@NgModule({
  declarations: [
    AppComponent,
    FileUploaderComponent,
    FileGridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot({
      uploadFile: uploadReducer
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
