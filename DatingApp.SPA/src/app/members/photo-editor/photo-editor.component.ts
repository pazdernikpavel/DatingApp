import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Photo } from '../../_models/Photo';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-photo-editor',
  templateUrl: './photo-editor.component.html',
  styleUrls: ['./photo-editor.component.css']
})
export class PhotoEditorComponent implements OnInit {
  @Input() photos: Photo[];
  uploader: FileUploader = new FileUploader({});
  hasBaseDropZone = false;

  constructor() { }

  ngOnInit() {
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZone = e;
  }

}
