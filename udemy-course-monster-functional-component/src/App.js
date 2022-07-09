import { useState, useEffect } from 'react';

import SearchBox from './Components/search-box/SearchBox';
import CardList from './Components/card-list/CardList';
import './App.css';

const App = () => {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonster] = useState([]);
  const [filterMonster, setFilterMonster] = useState(monsters);
  const [title, setTitle] = useState('Monster')

  console.log('return')

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then((res_json) => setMonster(res_json))
      console.log('fetch')
  }, [])

  useEffect(() => {
    console.log('newFilterMonsters')
    const newFilterMonsters = monsters.filter((monster_value) => {
      const monster_name_lc = monster_value.name.toLocaleLowerCase();
      return monster_name_lc.includes(searchField);
    })

    setFilterMonster(newFilterMonsters);

  }, [monsters, searchField])

  const onSerachChange = (event) =>{
    console.log('onSerachChange')
    const search_input_data = event.target.value.toLocaleLowerCase();

    setSearchField(search_input_data)
  }

  const onTitleChange = (event) =>{
    console.log('onSerachChange')
    const newTitle = event.target.value;

    setTitle(newTitle)
  }

  return(
    <div className='App'>
      <h1 className='app-title'>{title}</h1>

      <SearchBox onChangeHandler={onSerachChange} placeholder='suish' className='searchInputMonsters'/>
      <SearchBox onChangeHandler={onTitleChange} placeholder='set title' className='searchInputMonsters'/>
      <CardList monsters={filterMonster}/>
    </div>
  )
}

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       monsters: [], 
//       search_input_data: ''
//     }
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(res_json => this.setState(() => {
//       return {monsters: res_json};
//     }
//     ))
//   }

//   onSerachChange = (event) => {
//     const search_input_data = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { search_input_data };
//     })
//   }

//   render() {
//     const {monsters, search_input_data} = this.state;
//     const { onSerachChange } = this;

//     const filter_monster = monsters.filter((monster_value) => {
//       const monster_name_lover_case = monster_value.name.toLocaleLowerCase();
//       return monster_name_lover_case.includes(search_input_data);
//     })

//     return (
//       <div className="App">
//       <SearchBox onChangeHandler={onSerachChange} placeholder='Find monsters' className='searchInputMonsters'/>
//       <CardList monsters={filter_monster}/>
//       </div>
//     );
//   }
// }

export default App;
