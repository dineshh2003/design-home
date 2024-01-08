import React from 'react';
import '../component/Search.css';

const Search = () => {
  return (
    <div className='container--search'>
        <button className='new-arrival'>New Arrival</button>
        <input type="text" placeholder="search" className="search--bar" />
    </div>
  )
}

export default Search
