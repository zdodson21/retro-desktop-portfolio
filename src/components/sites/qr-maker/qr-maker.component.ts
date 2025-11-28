import { Component, inject } from '@angular/core';
import { InternetExplorerService } from '../../programs/internet-explorer/internet-explorer.service';
import { AIeComponent } from '../components/a-ie/a-ie.component';

@Component({
  selector: 'qr-maker',
  imports: [AIeComponent],
  templateUrl: './qr-maker.component.html',
  styleUrl: './qr-maker.component.scss',
})
export class QrMakerSite {
  protected IEService: InternetExplorerService = inject(InternetExplorerService);
}
