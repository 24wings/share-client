import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../../service/config.service';
import { Task, Banner, TaskTag } from '../../types/task';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent implements OnInit {
  tasks: Task[] = [];
  banners: Banner[] = [];
  taskTags: TaskTag[] = [];
  showingBanner = 0;
  openid: string;
  user;


  constructor(public config: ConfigService) {
    this.openid = config.route.snapshot.queryParams.openid
    if (this.openid) {
      this.getUser(this.openid);
    }

    this.getTaskListAndBannerList()
  }

  ngOnInit() {
  }

  getUser(openid: string) {
    let user = this.config.Get('/share.user.go?openid=' + this.openid);
    if (user) {
      this.config.user = user;
      this.user = user;

    } else {
      alert('用户不存在');
    }

  }

  async getTaskListAndBannerList() {
    let result: { tasks: Task[], banners: Banner[], taskTags: TaskTag[] } = await this.config.Get('/share.index.go')
    this.banners = result.banners;
    this.taskTags = result.taskTags;
    this.tasks = result.tasks;
    this.carousel();
  }


  carousel() {
    setInterval(() => {

      if (this.showingBanner < this.banners.length - 1) {
        this.showingBanner++;
      } else {
        this.showingBanner = 0;
      }

    }, 3000);

  }





}
