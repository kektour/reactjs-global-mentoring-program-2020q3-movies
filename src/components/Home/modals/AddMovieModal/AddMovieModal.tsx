import React, { useCallback } from 'react';
import classnames from 'classnames';
import { useFormik } from 'formik';
import { NewMovie } from '../../../../models/movie';
import { Input } from '../../../shared/Input';
import { Modal } from '../../../shared/Modal';
import { SelectWithTitle } from '../../../shared/select';
import { useAddMovieModal } from './useAddMovieModal';
import styles from './AddMovieModal.module.scss';

type Props = {
  open: boolean;
  onClose: () => void;
};

const defaultMovie: NewMovie = {
  title: '',
  tagline: 'tagline', // not used
  vote_average: 0, // not used
  vote_count: 0, // not used
  release_date: new Date().toISOString().split('T')[0],
  poster_path:
    'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg',
  overview: '',
  budget: 0, // not used
  revenue: 0, // not used
  genres: [],
  runtime: 0,
};

export const AddMovieModal: React.FC<Props> = (props) => {
  const { open, onClose } = props;
  const { createMovie, clearError, error } = useAddMovieModal();

  const handleClose = useCallback(() => {
    onClose();
    clearError();
  }, [onClose, clearError]);

  const formik = useFormik({
    initialValues: { ...defaultMovie },
    onSubmit: async (values) => {
      try {
        await createMovie(values);
        handleClose();
      } catch (err) {}
    },
    onReset: () => {
      formik.setValues({ ...defaultMovie });
    },
  });

  return (
    <Modal open={open}>
      <div className={styles.content}>
        <button className={styles.crossButton} onClick={handleClose}></button>
        <h2 className={styles.contentHeader}>Add Movie</h2>
        <form className={styles.form} onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <Input
            classes={{ root: styles.inputRoot }}
            title="Title"
            nativeInputProps={{
              name: 'title',
              value: formik.values.title,
              placeholder: 'Title here',
              onChange: formik.handleChange,
            }}
          />
          {error?.title && <p style={{ color: 'red' }}>{error.title}</p>}
          <Input
            classes={{ root: styles.inputRoot }}
            title="Release Date"
            nativeInputProps={{
              name: 'release_date',
              value: formik.values.release_date,
              type: 'date',
              placeholder: 'Release Date here',
              onChange: formik.handleChange,
            }}
          />
          <Input
            classes={{ root: styles.inputRoot }}
            title="Movie Preview"
            nativeInputProps={{
              name: 'poster_path',
              value: formik.values.poster_path,
              placeholder: 'Movie Preview here',
              onChange: formik.handleChange,
            }}
          />
          <SelectWithTitle
            classes={{ root: styles.inputRoot, select: { root: styles.selectInput } }}
            title="Gende"
            nativeSelectProps={{
              name: 'genres',
              value: formik.values.genres,
              multiple: true,
              onChange: (e) =>
                formik.setFieldValue(
                  'genres',
                  Array.from(e.target.selectedOptions).map((o) => o.value)
                ),
            }}
            options={[
              { value: 'foo', label: 'Foo' },
              { value: 'bar', label: 'Bar' },
              { value: 'baz', label: 'Baz' },
            ]}
          />
          {error?.genres && <p style={{ color: 'red' }}>{error.genres}</p>}
          <Input
            classes={{ root: styles.inputRoot }}
            title="Overview"
            nativeInputProps={{
              name: 'overview',
              value: formik.values.overview,
              placeholder: 'Overview here',
              onChange: formik.handleChange,
            }}
          />
          {error?.overview && <p style={{ color: 'red' }}>{error.overview}</p>}
          <Input
            classes={{ root: classnames(styles.inputRoot, styles.lastInputRoot) }}
            title="Runtime"
            nativeInputProps={{
              name: 'runtime',
              value: formik.values.runtime,
              placeholder: 'Runtime here',
              onChange: formik.handleChange,
            }}
          />
          <div className={styles.buttonsContainer}>
            <button type="reset" className={styles.buttonReset}>
              Reset
            </button>
            <button type="submit" className={styles.buttonSave}>
              Save
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};
