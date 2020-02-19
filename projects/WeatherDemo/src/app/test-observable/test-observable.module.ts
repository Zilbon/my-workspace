import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestObserverReceiverComponent } from './test-observer-receiver/test-observer-receiver.component';
import { TestObserverEmitterComponent } from './test-observer-emitter/test-observer-emitter.component';

import { TestObservableRoutingModule } from './test-observable-routing.module';


@NgModule({
  declarations: [
    TestObserverEmitterComponent,
    TestObserverReceiverComponent
  ],
  imports: [
    CommonModule,
    TestObservableRoutingModule
  ],
  exports:[
    TestObserverEmitterComponent,
    TestObserverReceiverComponent
  ]
})
export class TestObservableModule { }
