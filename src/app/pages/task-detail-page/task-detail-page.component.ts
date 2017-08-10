import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Task } from '../../types/task';
import { ConfigService } from '../../service/config.service';
@Component({
  selector: 'app-task-detail-page',
  templateUrl: './task-detail-page.component.html',
  styleUrls: ['./task-detail-page.component.css']
})
export class TaskDetailPageComponent implements OnInit {
  task: Task = { createDt: new Date(), title: '', totalMoney: 0, shareMoney: 0, imageUrl: '', fee: 0, clickNum: 0, content: '' };
  taskId: string;
  constructor(public config: ConfigService, public safe: DomSanitizer) {
    this.taskId = this.config.route.snapshot.queryParams.taskId;
    this.getTaskById();
  }

  ngOnInit() {
  }
  async getTaskById() {
    let task = await this.config.Get('/share.task.go?_id=' + this.taskId);
    task.websiteUrl = this.safe.bypassSecurityTrustResourceUrl(<string>this.task.websiteUrl);
    this.task = task;

  }
}
