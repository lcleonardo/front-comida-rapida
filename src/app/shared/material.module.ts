import { NgModule } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatTabsModule } from "@angular/material/tabs";

@NgModule({
  declarations: [],
  imports: [
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  exports: [
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
})
export class MaterialModule {}
