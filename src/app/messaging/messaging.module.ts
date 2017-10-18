import { MessagingComponent } from './messaging.component';
import { MessageServiceProvider } from './../../upgrade';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
          {path: 'messages', pathMatch: 'full', component: MessagingComponent}
        ])
      ],
      providers: [
          MessageServiceProvider
      ],
      declarations: [
          MessagingComponent
      ]
})
export class MessagingModule {}