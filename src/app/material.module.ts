import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatToolbarModule } from "@angular/material/toolbar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  exports: [
    MatToolbarModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class MaterialModule {}
