import { Component, Input } from '@angular/core';
import { CertDate } from './cert-date';

@Component({
  selector: 'cert-block',
  imports: [],
  templateUrl: './cert-block.component.html',
  styleUrl: './cert-block.component.scss',
})
export class CertBlockComponent {
  @Input({ alias: "open" }) public open: boolean = true;
  @Input({ alias: "title", required: true }) public title: string;
  @Input({ alias: "issue-date", required: true }) public issueDate: CertDate;
  @Input({ alias: "expiry-date"}) public expiryDate: CertDate = {dateTimeString: "N/A"};
}
