import React, { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import {useState} from 'react';
import { addBook } from '../features/books';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';


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
        if (title.length === 0 || isbn.length === 0 || genre.length === 0 || isNumber(isbn) === false) {
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
        if (title.length === 0 || isbn.length === 0 || genre.length === 0 || isNumber(isbn) === false) {
            setError(true);
        }
        else {
            setError(false);
        }
    }
    , [error, genre.length, isbn, title.length])



  return (
    <Container>
        <Link to="/">
            <div>Go back</div>
        </Link>
        <h1>Add Book</h1>
        <form onSubmit={handleSubmit}>
            <div className="addUser">
                <p>
                    <label>Enter Title</label>
                </p>
                <p>
                    <input type="text" placeholder="Enter Title"  onChange={(event) => {
                    setTitle(event.target.value)}}/>
                </p>
                {error&&title.length<=0?
                <Label >Title cannot be empty</Label>: ''}

                <p>
                    <label>Enter Genre</label>
                </p>
                <p>
                    <input type="text" placeholder="Enter Genre"  onChange={(event) => {
                    setGenre(event.target.value)}}/>
                </p>
                {error&&genre.length<=0?
                <Label >Genre cannot be empty</Label>: ''}

                <p>
                    <label>Enter ISBN</label>
                </p>
                <p>
                    <input type="text" placeholder="Enter ISBN"  onChange={(event) => {
                    setIsbn(event.target.value)}} />
                </p>
                {error&&(isbn.length<=0||isNumber(isbn)===false)?
                <Label >ISBN cannot be empty and must be a NUMBER</Label>: ''}

                <p>
                    <label>Enter Summary</label>
                </p>
                <p>
                    <input type="text" placeholder="Enter Summary (Optional)"  onChange={(event) => {
                    setSummary(event.target.value)}} />
                </p>
                <button type="submit" disabled={error}>Add user</button>
  
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
const Label = styled.label`
    color: red;
    font-weight: bold;
`





export default AddBookPage