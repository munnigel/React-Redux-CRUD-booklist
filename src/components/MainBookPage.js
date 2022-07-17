import '../App.css';
import {useSelector} from 'react-redux'
import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";


const MainBookPage = () => {
    const bookList = useSelector((state) => state.books.value);
    const navigate = useNavigate();


    //FOR HOVERING ANIMATION OF "ADD BOOK BUTTON"
    const ANIMATEDCLASSNAME = "animated";
    const ELEMENTS = document.querySelectorAll(".HOVER");
    const ELEMENTS_SPAN = [];

    ELEMENTS.forEach((element, index) => {
    let addAnimation = false;
    // Elements that contain the "FLASH" class, add a listener to remove
    // animation-class when the animation ends
        if (element.classList[1] == "FLASH") {
            element.addEventListener("animationend", e => {
            element.classList.remove(ANIMATEDCLASSNAME);
            });
            addAnimation = true;
        }

    // If The span element for this element does not exist in the array, add it.
        if (!ELEMENTS_SPAN[index])
            ELEMENTS_SPAN[index] = element.querySelector("span");

        element.addEventListener("mouseover", e => {
            ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
            ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";

            // Add an animation-class to animate via CSS.
            if (addAnimation) element.classList.add(ANIMATEDCLASSNAME);
        });

        element.addEventListener("mouseout", e => {
            ELEMENTS_SPAN[index].style.left = e.pageX - element.offsetLeft + "px";
            ELEMENTS_SPAN[index].style.top = e.pageY - element.offsetTop + "px";
        });
    });


    return (
        <Container>
            <a class="HOVER">
                <span></span>
                <text id='btn'
                    onClick={() => {
                        navigate('/add');
                    }}>Add book</text>
            </a>
            

            <div className="displayBooks">
                        {bookList.map((book) => {
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

const Button = styled.button`
position: relative;
background: rebeccapurple;
width: 100px;
height: 100px;
border-radius: 30%;
color: white;
font-family: Verdana;
font-weight: bold;
font-size: 20px;
cursor: pointer;
padding: 0;
display: flex;
justify-content: center;
align-items: center;
margin-left: auto;
margin-right: auto;

transform: translate(-3px, 3px);
&:hover {
    animation: shake-circle-02 .1s infinite alternate;
}
@keyframes shake-circle-02 {
    0% { transform: translate(-1px, 1px); }
    33% { transform: translate(-1px, 2px); }
    66% { transform: translate(-2px, 2px); }
    100% { transform: translate(-2px, 1px); }
}

`



export default MainBookPage