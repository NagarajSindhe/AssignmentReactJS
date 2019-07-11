import App from "../App";

export const initialState = {
  books: App.getAllRecords
};
export const reducer = (state = initialState, action) => {
  const newState = { ...state };
  if (action.type === "ADD_BOOKS") {
    newState.books = App.getAllRecords();
  }
  return newState;
};

export default reducer;
