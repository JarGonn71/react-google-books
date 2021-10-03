import React from 'react'
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';
import LoadingButton from '@mui/lab/LoadingButton';
import Preloader from '.././Preloader/Preloader'
import BookCart from '.././BookCart/BookCart'

import './Content.css'

function Content({dispatch, totalBooks, books, setFetching, updateStartIndex, fetching, fetchingTwo}) {

    const items = books.map((book, index)=>{return <BookCart key={`${book.id}_${index}`} {...book}/> })

    const setStartIndex = () => {
        dispatch(updateStartIndex())
        setFetching(true)
    }
    
    return (
        <div className='wrapperContent'>
            
            {fetchingTwo && <Preloader />}

            <h2 className="totalBooks">Found {totalBooks} results</h2>
            <div className='wrapperItems'>
                {items}
            </div>
           <div className="wraperBtn">
               
               {fetching && items.length > 1 ? <LoadingButton
                            loading
                            loadingPosition="start"
                            startIcon={<SaveIcon />}
                            size="large"
                            variant="contained"
                          >
                            Load more
                          </LoadingButton>
                    : fetchingTwo || items.length === 0 ? null
                    : <Button onClick={setStartIndex} variant="contained"  size="large" >  Load more</Button>
               }
            
           </div>
        </div>
    )
}

export default Content
