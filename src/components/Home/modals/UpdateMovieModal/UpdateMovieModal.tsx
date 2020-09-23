import React, { useCallback } from 'react';
import classnames from 'classnames';
import { useFormik } from 'formik';
import { Movie } from '../../../../models/movie';
import { Input } from '../../../shared/Input';
import { Modal } from '../../../shared/Modal';
import { SelectWithTitle } from '../../../shared/select';
import { useUpdateMovieModal } from './useUpdateMovieModal';
import styles from './UpdateMovieModal.module.scss';

type Props = {
  open: boolean;
  movie: Movie;
  onClose: () => void;
};

export const UpdateMovieModal: React.FC<Props> = (props) => {
  const { open, movie, onClose } = props;
  const { updateMovie, clearError, error } = useUpdateMovieModal();

  const handleClose = useCallback(() => {
    onClose();
    clearError();
  }, [onClose, clearError]);

  const formik = useFormik({
    initialValues: { ...movie },
    onSubmit: async (values) => {
      try {
        await updateMovie(values);
        handleClose();
      } catch (err) {}
    },
    onReset: () => {
      formik.setValues({ ...movie });
    },
  });

  return (
    <Modal open={open}>
      <div className={styles.content}>
        <button className={styles.crossButton} onClick={handleClose}></button>
        <h2 className={styles.contentHeader}>Edit Movie</h2>
        <form className={styles.form} onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
          <Input
            classes={{ root: styles.inputRoot }}
            title="Movie Id"
            nativeInputProps={{
              name: 'id',
              readOnly: true,
              value: formik.values.id,
            }}
          />
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
            classes={{
              root: styles.inputRoot,
              select: {
                root: styles.selectInput,
              },
            }}
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
