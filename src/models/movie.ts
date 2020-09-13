export interface Movie {
  id: number;
  title: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  poster_path: string;
  overview: string;
  budget: number;
  revenue: number;
  genres: Array<string>;
  runtime: number;
}

export interface NewMovie extends Omit<Movie, 'id'> {}

export interface GetMoviesResponse {
  totalAmount: number;
  data: Array<Movie>;
  offset: number;
  limit: number;
}

export interface GetMoviesQuery {
  sortBy?: string;
  sortOrder?: 'desc' | 'asc';
  search?: string;
  searchBy?: 'title' | 'genres';
  filter?: string | Array<string>;
  offset?: number;
  limit?: number;
}
