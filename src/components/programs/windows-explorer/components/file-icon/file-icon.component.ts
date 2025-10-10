import { Component, Input } from '@angular/core';
import { WindowsExplorerService } from '../../windows-explorer.service';

@Component({
  selector: 'file-icon',
  imports: [],
  templateUrl: './file-icon.component.html',
  styleUrl: './file-icon.component.scss'
})
export class FileIconComponent {
  @Input({ alias: 'focus-name', required: true }) public focusName: string;
  @Input({ alias: 'path', required: true }) public path: string;
  @Input({ alias: 'icon-src'}) public src: string; // TODO set this value based on file-type, not user input
  @Input({ alias: 'file-name'}) public fileName: string;
  @Input({ alias: 'file-type'}) public fileType: string
}
