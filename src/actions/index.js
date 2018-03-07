export default function selectBook(book) {
  // selectBook is a action creator, it needs to return an action,
  // an object with a type property
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}