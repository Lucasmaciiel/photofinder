import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { immediateClickDirective } from "./immediate-click.directive";

@NgModule({
    declarations: [immediateClickDirective],
    exports: [immediateClickDirective],
    imports: [CommonModule]
})
export class ImeediateClickModule {

}