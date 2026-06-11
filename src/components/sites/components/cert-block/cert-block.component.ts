import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'cert-block',
  imports: [
    DatePipe
  ],
  templateUrl: './cert-block.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './cert-block.component.scss',
})
export class CertBlockComponent implements OnInit {
  @Input({ alias: 'open' }) public open: boolean = true;
  @Input({ alias: 'title', required: true }) public title: string;
  @Input({ alias: 'issue-date', required: true }) public issueDate: number;
  @Input({ alias: 'expiry-date' }) public expiryDate: number;

  protected issueEpoch: Date;
  protected issueMonth: string;
  protected issueYear: number;

  protected expiryEpoch: Date;
  protected expiryMonth: string;
  protected expiryYear: number;

  ngOnInit() {
    this.issueEpoch = new Date(this.issueDate * 1000);
    this.issueMonth = String(this.issueEpoch.getMonth()).padStart(2, '0');
    this.issueYear = this.issueEpoch.getFullYear();

    if (this.expiryDate) {
      this.expiryEpoch = new Date(this.expiryDate * 1000);
      this.expiryMonth = String(this.issueEpoch.getMonth()).padStart(2, '0');
      this.expiryYear = this.issueEpoch.getFullYear();
    }
  }
}
