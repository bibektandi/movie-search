import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() === '') return;
    onSearch(query);
    setQuery('');
  };

  return (
    <form onSubmit={handleSearch} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: '10px', width: '250px', fontSize: '16px' }}
      />
      <button type="submit" style={{ padding: '10px', marginLeft: '10px' }}>Search</button>
    </form>
  );
};

export default SearchBar;
