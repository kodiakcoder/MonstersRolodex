import React, {useState,useEffect} from 'react';
import './App.css';
import axios from 'axios';
import CardList from './components/card-list/card-list'
import SearchBox from './components/search-box/search-box'



const App = () => {

  const [Monsters,setMonsters] = useState([]) 
  const [filter,setFilter] = useState("")

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => setMonsters(response.data))
  }, [])
  
  const filteredMonsters = Monsters.filter(monster =>
    monster.name.toLowerCase().includes(filter.toLowerCase()))
  

  const handleSearchChange= (event) => {
    setFilter(event.target.value)
  }

  return (
    <div className="app-background">
      <h1>Monsters Rolodex</h1>
      <SearchBox placeholder="Search Monsters" handleChange={handleSearchChange}/>
      <CardList monsters={filteredMonsters}/>
    </div>
  )
}
export default App;
