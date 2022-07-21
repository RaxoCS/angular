export interface PostResult {
    data: Post[];
    meta: Meta;
}

export interface Meta {
    page: number;
}

export interface Post {
    id_post: number;
    title: string;
    autor: string;
    body: string;
    date: string;
    category: string;
}
