import {bookAPI} from '../API/api'


const GET_BOOKS = 'GET_BOOKS'
const UPDATE_BOOKS = 'UPDATE_BOOKS'
const SET_START_INDEX = 'SET_START_INDEX'
const ZIRO_START_INDEX = 'ZIRO_START_INDEX'
const SET_ACTIVE_BOOK = 'SET_ACTIVE_BOOK'

const initialState ={
    books:[],
    activeBook: null,
    totalBooks: 0,
    startIndex: 0,
}

const bookReducer = (state=initialState, action)=>{

    switch(action.type){
        case GET_BOOKS:
            return{
                ...state,
                books: action.payload.items,
                totalBooks: action.payload.totalItems

            }
        case UPDATE_BOOKS:
            return{
                ...state,
                books: [...state.books, ...action.payload]
            }
        case SET_ACTIVE_BOOK:
            return{
                ...state,
                activeBook: action.payload
            }    
        case SET_START_INDEX:
            return{
                ...state,
                startIndex: state.startIndex + 30 < state.totalBooks ? state.startIndex + 30  : state.startIndex
            }
        case ZIRO_START_INDEX:
            return{
                ...state,
                startIndex: 0 
            }
        default: 
            return state 
    }
}


export const updateStartIndex = () => {return { type: SET_START_INDEX }}

export const ziroStartIndex = () => {return { type: ZIRO_START_INDEX }}

export const setActiveBook = (payload) =>{
    return{type: SET_ACTIVE_BOOK, payload}
}

export const setBooks = (items, totalItems) =>{
    return{type: GET_BOOKS, payload:{items, totalItems}}
}

export const updateBooks = (payload) =>{
    return{type: UPDATE_BOOKS, payload}
}

export const getBooksThunk = (yourAPIKey, startIndex, subject, orderBy, search) => (dispatch) => {
    return bookAPI.getBooks(yourAPIKey, startIndex, subject, orderBy, search).then(r=>{
        if(r.status === 200){
            console.log(r)
            dispatch(ziroStartIndex()) 
            if (r.data.items){
                dispatch(setBooks(r.data.items, r.data.totalItems)) 
            }else{
                dispatch(setBooks([], 0))
            }
            
            dispatch(setActiveBook(null))
            
        }
    }).catch((err) => {
        dispatch(setBooks([], 0)) 
        console.log(err)
    })
}

export const updateBooksThunk = (yourAPIKey, startIndex, subject, orderBy, search) => (dispatch) => {
    return bookAPI.getBooks(yourAPIKey, startIndex, subject, orderBy, search).then(r=>{
        if(r.status === 200){
            dispatch(updateBooks(r.data.items)) 
        }
    }).catch((err) => {
        console.log(err)
    })
}

export default bookReducer