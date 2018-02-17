import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';

// user components
import { LoginComponent } from './views/user/login/login.component';
import { RegisterComponent } from './views/user/register/register.component';
import { ProfileComponent } from './views/user/profile/profile.component';

// website components
import { WebsiteListComponent } from './views/website/website-list/website-list.component';
import { WebisteEditComponent } from './views/website/webiste-edit/webiste-edit.component';
import { WebisteNewComponent } from './views/website/webiste-new/webiste-new.component';



// client side services
import {UserService} from './services/user.service.client';
import {WebsiteService} from './services/website.service.client';
import { WidgetChooserComponent } from './views/widget/widgetchooser/widgetchooser.component';
import { WidgetGifComponent } from './views/widget-gif/widget-gif/widget-gif.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {GifService} from './services/gif.service.client';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    WebsiteListComponent,
    WebisteEditComponent,
    WebisteNewComponent,
    WidgetChooserComponent,
    WidgetGifComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [UserService, WebsiteService, GifService],
  bootstrap: [AppComponent]
})
export class AppModule { }
