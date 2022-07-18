import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import {useState} from 'react';
import { addBook } from '../features/books';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';


function AddBookPage() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [genre, setGenre]= useState('');
    const [title, setTitle]= useState('');
    const [isbn, setIsbn]= useState('');
    const [summary, setSummary]= useState('');

    const [error, setError]= useState(true);

    function isNumber(n) { return !isNaN(parseFloat(n)) && !isNaN(n - 0) }


    const handleSubmit = (event) => {
        event.preventDefault();
        if (title.length === 0 || isbn.length === 0 || genre.length === 0 || isNumber(isbn) === false || isbn.length !== 13) {
            setError(true);
        }
        if (title&&isbn&&genre) {
            setError(false);
            console.log(genre, title, isbn);
            dispatch(addBook({title, isbn, genre, summary}));
            navigate('/');
        }
    }

    useEffect(() => {
        if (title.length === 0 || isbn.length === 0 || genre.length === 0 || isNumber(isbn) === false || isbn.length !== 13) {
            setError(true);
        }
        else {
            setError(false);
        }
    }
    , [error, genre.length, isbn, title.length])



  return (
    <Container>
        <a class="HOVER" onClick={() => {navigate('/');}}>
            <span></span>
            <text id='btn'>Back to main page</text>
        </a>

        <form onSubmit={handleSubmit}>
            <div className="Book">
                <h1> Add Book </h1>
                <div class="input-box">
                    <textarea type="text" rows="2" onChange={(event) => {
                    setTitle(event.target.value)}}/>
                    <label>Enter Title</label>           
                    {error&&title.length<=0?
                    <Lbl >Title cannot be empty</Lbl>: ''}
                </div>

                <div class="input-box">
                    <textarea type="text" onChange={(event) => {
                    setGenre(event.target.value)}}/>
                    <label>Enter Genre</label>
                    {error&&genre.length<=0?
                    <Lbl >Genre cannot be empty</Lbl>: ''}
                </div>

                <div class="input-box">
                    <textarea type="text" onChange={(event) => {
                    setIsbn(event.target.value)}} />
                    <label>Enter ISBN</label>
                    {error&&(isbn.length<=0||isNumber(isbn)===false||isbn.length!==13)?
                    <Lbl >ISBN must be a NUMBER with 13 digits</Lbl>: ''}
                </div>

                <div class="input-box">
                    <textarea type="text" onChange={(event) => {
                    setSummary(event.target.value)}} />
                    <label>Enter Summary (Optional) </label>
                </div>
                    <button type="submit" disabled={error} class="add-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        Add book
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
const Lbl = styled.div`
    color: red;
    font-weight: bold;
    height: 15px;
    margin-bottom: 15px;

    @media(max-width: 768px) {
        font-size: 12px;
        margin-top: -3px;
    }
`


export default AddBookPage