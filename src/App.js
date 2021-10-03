import React, {useEffect, useState} from 'react'
import {Switch, Route} from 'react-router-dom';
import {Navbar, Content, ActiveBook} from './components'
import {useDispatch, useSelector} from 'react-redux'
import {getBooksThunk, updateBooksThunk, updateStartIndex, setActiveBook} from './redux/books'
import {setSearchValue, updateActiveCategory, updateOrderBy} from './redux/filter'


function App() {
  
  const {activeCategory, searchValue, yourAPIKey, orderBy, categories} = useSelector(({filterReducer}) => filterReducer)
  const {books, totalBooks, startIndex, activeBook} = useSelector(({bookReducer}) => bookReducer)
  const dispatch = useDispatch()
  const [fetching, setFetching] = useState(false)
  const [fetchingTwo, setFetchingTwo] = useState(false)
  

  useEffect(() => {
    setFetchingTwo(true)
    dispatch(getBooksThunk(yourAPIKey, 0, activeCategory, orderBy, searchValue)).then(()=>{
      setFetchingTwo(false)
    })
  }, [dispatch, yourAPIKey, searchValue, orderBy, activeCategory])


  useEffect(() => {
    if (fetching){   
        dispatch(updateBooksThunk(yourAPIKey, startIndex, activeCategory, orderBy, searchValue)).then(()=>{
          setFetching(false)
        })
    }  
  }, [dispatch, fetching, yourAPIKey, startIndex, activeCategory, orderBy, searchValue])

  
  return (
    
    <div className="App">
      <Navbar 
        dispatch={dispatch}
        categories={categories}
        activeCategory={activeCategory}
        orderBy={orderBy}
        searchValue = {searchValue}
        setSearchValue={setSearchValue}
        updateActiveCategory={updateActiveCategory}
        updateOrderBy={updateOrderBy}
      />
      <Switch>
        <Route path="/" exact render={() => 
          <Content 
            dispatch={dispatch} 
            totalBooks={totalBooks} 
            books={books}
            setFetching={setFetching}
            fetching={fetching}
            fetchingTwo={fetchingTwo}
            updateStartIndex={updateStartIndex}
          />}/>
        <Route path="/book/:userId?" render={() => <ActiveBook setActiveBook={setActiveBook} dispatch={dispatch} activeBook={activeBook}/>}/>
      </Switch>
    </div>
  );
}

export default App;
