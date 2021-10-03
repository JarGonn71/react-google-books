import React from 'react'
import {Redirect} from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import './ActiveBook.css'

function ActiveBook({activeBook, setActiveBook, dispatch}) {

    if(activeBook === null) return <Redirect to="/"/>

    const closeBook = () =>{
        dispatch(setActiveBook(null))
    }
    
    return (
        <div className="wrapperActiveBook">
            <div className="btnClose">
            <Button variant="contained" onClick={closeBook} startIcon={<ArrowBackIcon />}>
                    
            </Button>
            </div>
            <div className="imageBox">
                <img src={activeBook.imageLinks? activeBook.imageLinks.thumbnail: 'https://catherineasquithgallery.com/uploads/posts/2021-02/1612504473_17-p-knigi-na-serom-fone-25.jpg'} alt={`img_${activeBook.title}`}/>
            </div>
            <div className="infoBox">
                <div className="info__categoryBox">
                    {activeBook.categories && activeBook.categories.map((item, index)=>{ return <div key={`${item}_${index}`} className="categoryItem">
                        {index === activeBook.categories.length-1? <>{item}</> : <> {item}/ </>}
                    </div>})}
                </div>

                <div className="info__title">{activeBook.title &&activeBook.title}</div>

                <div className="info__avtorsBox">
                    {activeBook.authors && activeBook.authors.map((item, index)=>{ return <div key={`${item}_${index}`} className="avtorItem">{item}</div>})}
                </div>

                <div className="info__description">{activeBook.description && activeBook.description}</div>

            </div>
        </div>
    )
}

export default ActiveBook
