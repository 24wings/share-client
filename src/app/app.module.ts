import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import 'rxjs/add/operator/toPromise';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { ConfigService } from './service/config.service';
import { AppComponent } from './app.component';
import { SharePageComponent } from './pages/share-page/share-page.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { TaskDetailPageComponent } from './pages/task-detail-page/task-detail-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SharePageComponent,
    IndexPageComponent,
    TaskDetailPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path: 'share', component: SharePageComponent,
      children: [
        { path: 'index', component: IndexPageComponent },
        { path: 'taskDetail', component: TaskDetailPageComponent }
      ]
    }]),
    HttpModule,
    CommonModule
  ],
  providers: [ConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
