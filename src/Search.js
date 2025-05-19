import React from 'react';

const Search = ({ searchQuery, onSearchChange, searchResults, onSearchResultClick }) => {
    return (
        <div className="search-container">
            <input
                type="text"
                value={searchQuery}
                onChange={onSearchChange}
                placeholder="Search Superhero..."
                className="search-input"
            />
            {searchResults.length > 0 && (
                <div className="search-list">
                    {searchResults.map((result) => (
                        <div
                            key={result.id}
                            className="search-list-item"
                            onClick={() => onSearchResultClick(result.id)}
                        >
                            <img src={result.image.url} alt={result.name} />
                            <p>{result.name}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Search;
