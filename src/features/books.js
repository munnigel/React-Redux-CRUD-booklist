import { createSlice } from "@reduxjs/toolkit";
import data from "../books.json";

export const bookSlice = createSlice({
    name: "books",
    initialState: { value: data },
    reducers: {
        addBook: (state, action) => {
            state.value.push(action.payload);
            console.log(action.payload);
        },
        deleteBook: (state, action) => {
            state.value = state.value.filter(book => book.isbn !== action.payload);
        },
        updateBook: (state, action) => {
            state.value = state.value.map((book) => {
                if (book.isbn === action.payload.isbn) {
                    book.title = action.payload.title;
                    book.genre = action.payload.genre;
                    book.summary = action.payload.summary;
                }
                return book;
            }
            );
        }
        },

    },

);

export const { addBook, deleteBook, updateBook } = bookSlice.actions;
export default bookSlice.reducer;