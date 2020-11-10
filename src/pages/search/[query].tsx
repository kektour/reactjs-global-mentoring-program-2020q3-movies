import { SearchByQuery } from '../../components/pages/SearchByQuery';
import { fetchMovies } from '../../services/movies';
import { wrappedStore } from '../../store';
import { mapMoviesFilterSelector } from '../../store/movies';
import { RootState } from '../../store/types';

// @ts-ignore
SearchByQuery.getInitialProps = wrappedStore.getServerSideProps(async ({ store, query }) => {
  const q = query['query'] as string;
  const state = store.getState() as RootState;
  const filter = mapMoviesFilterSelector(state);

  const res = await fetchMovies({
    ...filter,
    searchBy: 'title',
    search: q,
  });

  return {
    movies: res.data,
    count: res.totalAmount,
  };
});

export default SearchByQuery;
