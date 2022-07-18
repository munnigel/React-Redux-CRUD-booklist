import '../App.css';
import {useSelector, useDispatch} from 'react-redux'
import { deleteBook, updateBook } from '../features/books';
import {useEffect, useState} from 'react';
import React from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';

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
            <a class="HOVER" onClick={() => {navigate('/');}}>
            <span></span>
            <text id='btn'>Back to main page</text>
        </a>
            <form onSubmit={handleSubmit}>
                <div className="Book">
                    <h1> Edit Book </h1>
                    <div class="input-box">
                        <textarea type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        <label>Title</label>
                    </div>  

                    

                    <div class="input-box">
                        <textarea type="text" value={genre} onChange={(e) => setGenre(e.target.value)} />
                        <label>Genre</label>
                    </div>

                    <div class="input-box">
                        <textarea type="text" value={summary} onChange={(e) => setBookSumm(e.target.value)} />
                        <label>Summary</label>
                    </div>

                        <button type="submit" class="add-btn">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                             Update book
                        </button>   

                        <button class="add-btn" onClick={() => {
                            dispatch(deleteBook(isbn));
                            navigate('/');
                                }
                        }>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Delete
                        </button>
                </div>
            </form>

           


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