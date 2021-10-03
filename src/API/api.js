import * as axios from 'axios'

const instance = axios.create({
    withCreaentials: true,
})

export const bookAPI = {
    getBooks(yourAPIKey, startIndex=0, subject='all', orderBy='relevance', search = ''){
        return instance.get(`https://www.googleapis.com/books/v1/volumes?q=${search !== '' ? `${search}& `:''}${subject}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=30&key=${yourAPIKey}`)
    }
    //PAGE => startIndex + 30
}