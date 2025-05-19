import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


import Tabs from './Tabs';
import Search from './Search';

const App = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [superheroData, setSuperheroData] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');


  const fetchSuperheroData = async (name) => {
    const url = `https://www.superheroapi.com/api.php/727054372039115/search/${name}`;
    try {
      const response = await axios.get(url);
      if (response.data.response === 'success') {
        setSearchResults(response.data.results);
      } else {
        setSearchResults([]);
      }
    } catch (error) {
      console.error('Error fetching superhero data:', error);
    }
  };

  const fetchSuperheroDetails = async (id) => {
    const url = `https://www.superheroapi.com/api.php/727054372039115/${id}`;
    try {
      const response = await axios.get(url);
      setSuperheroData(response.data);
    } catch (error) {
      console.error('Error fetching superhero details:', error);
    }
  };


  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchQuery(value);
    if (value.length > 1) {
      fetchSuperheroData(value);
    } else {
      setSearchResults([]);
    }
  };


  const handleSearchResultClick = (id) => {
    fetchSuperheroDetails(id);
    setSearchResults([]);
    setSearchQuery('');
  };


  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <Search
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          searchResults={searchResults}
          onSearchResultClick={handleSearchResultClick}
        />
      </header>

      <Tabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
        superheroData={superheroData}
      />
    </div>
  );
};

export default App;
