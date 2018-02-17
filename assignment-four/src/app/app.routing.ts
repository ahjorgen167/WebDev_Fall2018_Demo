import {Routes, RouterModule} from '@angular/router';


import {RegisterComponent} from './views/user/register/register.component';
import {ProfileComponent} from './views/user/profile/profile.component';
import {WebsiteListComponent} from './views/website/website-list/website-list.component';
import {LoginComponent} from './views/user/login/login.component';
import {WidgetChooserComponent} from './views/widget/widgetchooser/widgetchooser.component';
import {WidgetGifComponent} from './views/widget-gif/widget-gif/widget-gif.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile/:userId', component: ProfileComponent},
  {path: 'profile/:userId/website', component: WebsiteListComponent},
  {path: 'widget', component: WidgetChooserComponent},
  {path: 'gifswidget', component: WidgetGifComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
