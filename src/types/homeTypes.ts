
export interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
  completed?: boolean
}

export interface HomeSliceState {
  dataType: 'todos' | 'posts';
  posts: Post[];
  loading: boolean;
  error: string;
}