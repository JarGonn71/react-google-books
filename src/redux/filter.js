const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE'
const ACTIVE_CATEGORY = 'ACTIVE_CATEGORY'
const UPDATE_ORDER_BY = 'UPDATE_ORDER_BY'

const initialState ={
   activeCategory: 'all',
   orderBy: 'relevance',
   searchValue: '',
   yourAPIKey: 'AIzaSyBf2AUC_Y99rBTyXSJ5yCQ9-8mEgC1JF3g',
   categories: ['all', 'art', 'biography', 'computers', 'history', 'medical', 'poetry'],
}

const filterReducer = (state=initialState, action)=>{

    switch(action.type){
        case SET_SEARCH_VALUE:
            return{
                ...state,
                searchValue: action.payload
            }
        case ACTIVE_CATEGORY:
            return{
                ...state,
                activeCategory: action.payload
            }
        case UPDATE_ORDER_BY:
            return{
                ...state,
                orderBy: action.payload
            }         
        default: 
            return state 
    }
}


export const setSearchValue = (payload) =>{
    return{type: SET_SEARCH_VALUE, payload}
}

export const updateActiveCategory = (payload) =>{
    return{type: ACTIVE_CATEGORY, payload}
}

export const updateOrderBy = (payload) =>{
    return{type: UPDATE_ORDER_BY, payload}
}


export default filterReducer