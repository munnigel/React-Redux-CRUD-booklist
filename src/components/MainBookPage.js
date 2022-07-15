import '../App.css';
import {useSelector, useDispatch} from 'react-redux'
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"; 


const MainBookPage = () => {
    const bookList = useSelector((state) => state.books.value);
    return (
        <Container>
            <Link to="/add">
                <button> Add user</button>
            </Link>

            <div className="displayUsers">
                {bookList.map((book) => {
                return (
                    <Link to={`/edit/${book.isbn}`}>
                        <div>
                            <h1>{book.title}</h1>
                            <h2>{book.genre}</h2>
                        </div>
                    </Link>
                );
                })}
            </div>
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

export default MainBookPage