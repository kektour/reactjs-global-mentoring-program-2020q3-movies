import { Film } from '../../components/pages/Film';
import { fetchMovies } from '../../services/movies';
import { wrappedStore } from '../../store';
import { mapMoviesFilterSelector } from '../../store/movies';
import { RootState } from '../../store/types';

// @ts-ignore
Film.getInitialProps = wrappedStore.getServerSideProps(async ({ store, query }) => {
  const s = query['search'] as string;
  const state = store.getState() as RootState;
  const filter = mapMoviesFilterSelector(state);

  const res = await fetchMovies({
    ...filter,
    searchBy: 'title',
    search: s,
  });

  return {
    movies: res.data,
    count: res.totalAmount,
  };
});

export default Film;
