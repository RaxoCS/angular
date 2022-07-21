export interface CommentsResult {
    data: Comments[];
    meta: Meta;
}

export interface Meta {
    page: number;
}

export interface Comments {
    id_comment: number;
    id_post: number;
    autor: string;
    body: string;
    img: string;
}

