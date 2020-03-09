import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from './../shared/shared.module';
import { UsereditprofileComponent } from './usereditprofile/usereditprofile.component';
import { NgModule } from '@angular/core';
import { UserhavebooksComponent } from './userhavebooks/userhavebooks.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UserwantbooksComponent } from './userwantbooks/userwantbooks.component';
import { UserComponent } from './user.component';
import { ChatComponent } from './chat/chat.component';
import { ComplaintsComponent } from './complaints/complaints.component';
import { SearchchatComponent } from './searchchat/searchchat.component';
import { FormsModule } from '@angular/forms';
import { RequestsPageComponent } from './requests-page/requests-page.component';

@NgModule({
declarations:[
    UsereditprofileComponent,
    UserhavebooksComponent,
    UserprofileComponent,
    UserwantbooksComponent,
    UserComponent,
    ChatComponent,
    ComplaintsComponent,
    SearchchatComponent,
    RequestsPageComponent

],
imports:[
    SharedModule,
    UserRoutingModule,
    FormsModule
],
exports:[
    UsereditprofileComponent,
    UserhavebooksComponent,
    UserprofileComponent,
    UserwantbooksComponent,
    UserComponent,
    ChatComponent,
    ComplaintsComponent,
    SearchchatComponent
]
})
export class UserModule{}