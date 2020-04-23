import React from 'react';
import '../stylesheets/App.css';
import { fetchCharacters } from '../services/FetchData';
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      data:[]
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

  render() {

    const {data} = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <CharacterList dataList={data}/>
        </header>
      </div>
    );
  }
}

export default App;
