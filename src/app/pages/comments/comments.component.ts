import { Component, OnInit } from '@angular/core';
import { Comments, CommentsResult } from 'src/app/interfaces/comments';
import { UsersService } from 'src/app/services/users.service';


@Component({ selector: 'app-posts', templateUrl: './comments.component.html', styleUrls: ['./comments.component.css'] }) export class CommentsComponent implements OnInit {
    comments: Comments[] = [];
    valores = window.location.search;
    urlParams = new URLSearchParams(this.valores);
    id = this.urlParams.get('id');

    constructor(private service: UsersService) {
        this.givemeComments(Number(this.id));
        console.log(this.comments);
    }

    ngOnInit():void {}

    givemeComments(id: number):void {
        this.service.getComments(id).subscribe((result: CommentsResult) => { console.log(result.data); this.comments = result.data; })
    }

}