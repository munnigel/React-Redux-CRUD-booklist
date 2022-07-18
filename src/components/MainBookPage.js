import '../App.css';
import {useSelector} from 'react-redux'
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
import { useState } from "react";


const MainBookPage = () => {
    const bookList = useSelector((state) => state.books.value);
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');



    return (
        <Container>
            <a class="HOVER" onClick={() => {navigate('/add');}}>
                <span></span>
                <text id='btn'>Add book</text>
            </a>

            <input type="text" placeholder="Search book by title" class="searchvalue" onChange={event => {
                setSearchTerm(event.target.value);
            }}/>
            

            <div className="displayBooks">
                        {bookList.filter((val) => {
                            if (searchTerm==="") {
                                return val;
                            }
                            return val.title.toLowerCase().includes(searchTerm.toLowerCase());
                        }).map((book) => {
                        return (
                            <Link style={{textDecoration: 'none'}} to={`/edit/${book.isbn}`}>
                                <div class="card">
                                    <div class="layer"></div>
                                    <div class="content">

                                <p> 
                                   <b>Title:  </b> {book.title}
                                </p>
                                    <div class="isbn"> <b>ISBN:  </b>{book.isbn}</div>
                                    <div class="genre">
                                        <h2> <b>Genre:  </b>{book.genre}</h2>
                                    </div>

                                    <div class="summary">
                                        <span class="sumhid"> <b>Summary:  </b>{book.summary}</span>
                                    </div>

                                    </div>

                              
                                </div>
                                    
                            </Link>
                        );
                        })}
                </div>
        </Container>
    )
}



const Container = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
// text-align: center;
// height: 100vh;
width:100%;
height:100%;
font-family:sans-serif;
`







export default MainBookPage;