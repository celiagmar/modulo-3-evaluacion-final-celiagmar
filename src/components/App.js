import React from 'react';
import '../stylesheets/App.css';
import Header from './Header';
import { fetchCharacters } from '../services/FetchData';
import CharacterList from './CharacterList';
import Filter from './Filter';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleInputValue=this.handleInputValue.bind(this)

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

  render() {

    const {data, inputValue} = this.state;

    return (
      <div className="App">
        <Header/>
          <Filter inputValue={inputValue} handleInputValue={this.handleInputValue}/>
          <CharacterList dataList={data} inputValue={inputValue}/>
      </div>
    );
  }
}

export default App;
