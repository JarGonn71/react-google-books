import React, {useMemo, useState} from 'react'

import './Navbar.css'

import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

function Navbar({dispatch, categories, activeCategory, orderBy, searchValue, setSearchValue, updateActiveCategory, updateOrderBy}) {
    const [valueSerch, setValueSerch] = useState(searchValue)
    const categoryItems = useMemo(() => categories.map((item, index) => {return <MenuItem key={index} value={item}>{item}</MenuItem>}), [categories])

    const onClikBtn = () =>{
        dispatch(setSearchValue(valueSerch))
    }

    const handleChange = (e) =>{
        setValueSerch(e.target.value)
    }

    const handleKeyDown = (e) => {
        if(e.key === 'Enter'){
            dispatch(setSearchValue(e.target.value))
            e.target.blur()
        }
    }

    const categoryChange = (e)=>{
        dispatch(updateActiveCategory(e.target.value))
    }

    const orderChange = (e) => {
        dispatch(updateOrderBy(e.target.value))
    }

    return (
        <div className="wrapperNavbar">
            <h1>Search for books</h1>
            <div className="wrapperSearch">
                <TextField value={valueSerch} onKeyDown={handleKeyDown} onChange={handleChange} className="searchInput" label="Search" variant="outlined" />
                <Button onClick={onClikBtn} variant="contained">Contained</Button>
            </div>
            <div className="wrapperCategoryAndSort">
                <div className="category">
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Category</InputLabel>
                        <Select   
                            value={activeCategory}
                            onChange={categoryChange}
                            displayEmpty
                            label="category"
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                        {categoryItems}
                        </Select>
                    </FormControl>
                </div>
                <div className="sort">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Sorting by</InputLabel>
                        <Select   
                            value={orderBy}
                            onChange={orderChange}
                            displayEmpty
                            label="orderBy"
                            inputProps={{ 'aria-label': 'Without label' }}
                            >
                            <MenuItem value='relevance'>relevance</MenuItem>
                            <MenuItem value='newest'>newest</MenuItem>
                        </Select>
                    </FormControl>
                </div>

            </div>
        </div>
    )
}

export default Navbar
