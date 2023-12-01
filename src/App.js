import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('',); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [title, setTitle] = useState(['']);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);


  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField)
    });

    setFilteredMonsters(newfilteredMonsters);

  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setTitle(searchFieldString);
  }

  return (
    <div className="App">
      <h1 className='app-title'>{title}</h1>
      <SearchBox
        className='monsters-search-box'
        onChangeHandler={onSearchChange}
        placehoder='Search a monster' />
        <br/>
        <SearchBox
        className='title-search-box'
        onChangeHandler={onTitleChange}
        placehoder='set a title' />
      <CardList monsters={filteredMonsters} />
    </div>
  )
}

export default App;
