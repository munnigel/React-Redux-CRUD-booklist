import '../App.css';
import {useSelector, useDispatch} from 'react-redux'
import { deleteBook, updateBook } from '../features/books';
import {useEffect, useState} from 'react';
import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const EditBookPage = () => {


    const {isbn} = useParams();
    const dispatch = useDispatch();
    const bookList = useSelector((state) => state.books.value);
    const [genre, setGenre]= useState('');
    const [title, setTitle]= useState('');
    const [summary, setBookSumm]= useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const book = bookList.find((book) => book.isbn === isbn);
        setGenre(book.genre);
        setTitle(book.title);
        setBookSumm(book.summary);
    }, [bookList, isbn]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(updateBook({ summary: summary, title: title, genre: genre, isbn: isbn}));
        navigate('/');
    }


    return (
        <Container>
            <Link to="/">
                <div>Go back</div>
            </Link>
            <h1>Edit Book</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    New Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    New Genre:
                    <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
                </div>
                <div>
                    New Description:
                    <input type="text" value={summary} onChange={(e) => setBookSumm(e.target.value)} />
                </div>
                    <button type="submit">Update</button>
            </form>

            <button onClick={() => {
                dispatch(deleteBook(isbn));
                navigate('/');
            }
            }>Delete</button>


        </Container>

    )
}
const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`

export default EditBookPage;