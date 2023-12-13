import { NgModule } from '@angular/core';
import { TestComponent } from './test.component';

@NgModule({
  declarations: [TestComponent],
  exports: [TestComponent], // Export the TestComponent
})
export class TestModule {}
