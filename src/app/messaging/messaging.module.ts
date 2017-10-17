import { MessagingComponent } from './messaging.component';
import { MessageService } from './../../upgrade';
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
          MessageService
      ],
      declarations: [
          MessagingComponent
      ]
})
export class MessagingModule {}