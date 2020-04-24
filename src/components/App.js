import React from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import { fetchCharacters } from '../services/FetchData';
import CharacterList from './CharacterList';
import Filter from './Filter';
import { Switch,Route } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputValue=this.handleInputValue.bind(this)
    this.renderCharacterDetail=this.renderCharacterDetail.bind(this)
    this.applyFilter=this.applyFilter.bind(this);

    this.state={
      data:[],
      inputValue:'',
      isExisting:true
    }
  }

  componentDidUpdate() {
    localStorage.setItem('infoValue', JSON.stringify(this.state.inputValue))
  }

  componentDidMount() {
    fetchCharacters()
      .then(data => {
        this.setState({
          data:data.results
        })
      })
    const infoValue = JSON.parse(localStorage.getItem('infoValue'))
      if (infoValue !== null) {
        this.setState({
          inputValue: infoValue
        })
      }
  }

  handleInputValue(value) {
    this.setState({
      inputValue: value
    });
  };


  renderCharacterDetail(props) {
    const urlId = props.match.params.id;
    const characters = this.state.data;

    for(let character of characters) {
      if(character.id === parseInt(urlId)) {

        return <CharacterDetail selectedCharacter={character}/>
      }
    }
  }

  applyFilter() {
    const object = this.state.data;
    const inputValue = this.state.inputValue;
      return object
      .filter(charObj => inputValue === '' || charObj.name.toLowerCase().includes(inputValue))   
  }

  render() {

    const {inputValue} = this.state;

    return (
      <div className="App">
        <Header/>
        <main>
          <Switch>
            <Route exact path="/">
              <Filter inputValue={inputValue} handleInputValue={this.handleInputValue}/>
              <CharacterList dataList={this.applyFilter()} inputValue={inputValue}/>
            </Route>
            <Route path="/character/:id" render={this.renderCharacterDetail}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
