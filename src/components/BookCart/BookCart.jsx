import React from 'react'
import './BookCart.css'
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {setActiveBook} from '../../redux/books'

function BookCart({volumeInfo, id}) {
    const dispatch = useDispatch()

    const onClickActiveBook=()=>{
        dispatch(setActiveBook(volumeInfo))
    }

    return (
        <div className="wrapperBoxBook">
            <Link onClick={onClickActiveBook} to={'book/'+ id}>
                <Button variant="text">
                    <div className="imageContainer">
                        <img className="imageContainer--img" src={volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail} alt={`img_${volumeInfo.id}`} />
                    </div>
                </Button>
            </Link>
            
            <div className="infoContainer">
            <div className="info__category">
            
            {volumeInfo.categories && volumeInfo.categories[0]}
            </div>
            <div className="info__title">{volumeInfo.title}</div>
            <div className="info__avtor">
                { volumeInfo.authors && volumeInfo.authors.map((item, i)=>{ return <div className="itemAvtor" key={`${item}__${i}`}>
                    {i === volumeInfo.authors.length-1?
                        <>{item}</>
                        :
                        <> {item}, </>
                    }
                </div>})}
            </div>
        </div>
     </div>
    )
}

export default BookCart
