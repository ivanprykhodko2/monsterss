import { Component } from 'react';

import SearchBox from './Components/search-box/SearchBox';
import CardList from './Components/card-list/CardList';
import './App.css';

//  hello world
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [], 
      search_input_data: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(res_json => this.setState(() => {
      return {monsters: res_json};
    }
    ))
  }

  onSerachChange = (event) => {
    const search_input_data = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { search_input_data };
    })
  }

  render() {
    const {monsters, search_input_data} = this.state;
    const { onSerachChange } = this;

    const filter_monster = monsters.filter((monster_value) => {
      const monster_name_lover_case = monster_value.name.toLocaleLowerCase();
      return monster_name_lover_case.includes(search_input_data);
    })

    return (
      <div className="App">
      <SearchBox onChangeHandler={onSerachChange} placeholder='Hi there' className='searchInputMonsters'/>
      <CardList monsters={filter_monster}/>
      </div>
    );
  }
}

export default App;
