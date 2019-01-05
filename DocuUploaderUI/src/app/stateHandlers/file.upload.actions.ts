import { Action } from '@ngrx/store';
import { FileInfo } from '../models/file.info';

export const FILE_UPLOAD  = '[File] Upload';

export class UploadFileAction implements Action {
    readonly type = FILE_UPLOAD;

    constructor (public payload : FileInfo){}
}