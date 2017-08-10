import { SafeUrl } from '@angular/platform-browser';
export interface Task {
    _id?: string;
    title: string;
    imageUrl: string;
    createDt: Date;
    shareMoney: number;
    fee: number;
    totalMoney: number;
    clickNum: number;
    content: string;
    websiteUrl?: string | SafeUrl;
}

export interface Banner {
    _id?: string;
    createDt: Date;
    bannerImg: string;
}
export interface TaskTag {
    _id?: string;
    name: string;
}
