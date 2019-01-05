import * as Actions from './file.upload.actions';
import {FileInfo} from '../models/file.info';

const initialState: FileInfo = {
    fileName: 'Initial Tutorial',
    path: 'http://google.com'
}

export function uploadReducer(state: FileInfo[] = [initialState] , action: Actions.UploadFileAction) {

    switch(action.type) {
        case Actions.FILE_UPLOAD:
            return [...state, action.payload];
        default:
            return state;
    }

}