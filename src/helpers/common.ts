const isBetween = (x: number, min: number, max: number) => x >= min && x <= max;

export const getColorByRating = (rating: number) => {
  const piece = 10 / 5;
  if (isBetween(rating, 0, piece)) {
    return 'red';
  }
  if (isBetween(rating, piece, piece * 2)) {
    return 'orange';
  }
  if (isBetween(rating, piece, piece * 3)) {
    return 'yellow';
  }
  if (isBetween(rating, piece, piece * 4)) {
    return 'green';
  }
  return 'deepskyblue';
};
