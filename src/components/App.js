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

    this.state={
      data:[],
      inputValue:''
    }
  }

  componentDidMount() {
    fetchCharacters()
      .then(data => {
        this.setState({
          data:data.results
        })
      })
  }

  handleInputValue(value) {
    this.setState({
      inputValue: value
    });
  };

  renderCharacterDetail(props) {
    console.log(props)
    const urlId = props.match.params.id;
    const characters = this.state.data;

    for(let character of characters) {
      if(character.id === parseInt(urlId)) {

        return <CharacterDetail selectedCharacter={character}/>
      }
    }
  }

  render() {

    const {data, inputValue} = this.state;

    return (
      <div className="App">
        <Header/>
        <main>
          <Switch>
            <Route exact path="/">
              <Filter inputValue={inputValue} handleInputValue={this.handleInputValue}/>
              <CharacterList dataList={data} inputValue={inputValue}/>
            </Route>
            <Route path="/character/:id" render={this.renderCharacterDetail}/>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
