import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './components/app/app.component';
import {HttpClientModule} from "@angular/common/http";
import {UserComponent} from "./components/user/user.component";
import {RouterModule, Routes} from "@angular/router";
import { PostComponent } from './components/post/post.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';

const routes: Routes = [
  {path: 'users', component: UserComponent},
  {path: 'posts', component: PostComponent},
  {path: 'posts/:id', component: PostDetailsComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    PostComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
