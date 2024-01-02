// rekomendacje.component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rekomendacje',
  templateUrl: './rekomendacje.component.html',
  styleUrls: ['./rekomendacje.component.css'],
})
export class RekomendacjeComponent {
  pdfSrc1: string = '../../assets/rekomendacje/1.pdf';
  pdfSrc2: string = '../../assets/rekomendacje/2.pdf';
  pdfSrc3: string = '../../assets/rekomendacje/3.pdf';
}
