import React from 'react';

const SearchComponent = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-container">
      <form>
        <input
          type="text"
          className="search-input" 
          placeholder="Search Profiles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" className="btn">Search</button>
      </form>
    </div>
  );
};

export default SearchComponent;
