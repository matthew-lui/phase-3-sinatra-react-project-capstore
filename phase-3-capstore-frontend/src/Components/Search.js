import React from 'react';

function Search({setSearchText, searchText}) {
    return (
        <div id="search">
            <label>Search Inventory:</label>
            <input
                className="search-input"
                type="text"
                name="search"
                placeholder="search inventory"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
            />
            
        </div>
    );
}

export default Search;