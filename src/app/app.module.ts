import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OnasComponent } from './onas/onas.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { KontrahenciComponent } from './kontrahenci/kontrahenci.component';
import { MapComponent } from './map/map.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RekomendacjeComponent } from './rekomendacje/rekomendacje.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [
    AppComponent,
    OnasComponent,
    KontaktComponent,
    KontrahenciComponent,
    MapComponent,
    RekomendacjeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PdfViewerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
