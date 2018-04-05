import React, { Component } from 'react';
import './App.css';
import routes from './routes'
import GlobalHeader from './components/GlobalHeader/GlobalHeader';
import GlobalFooter from './components/GlobalFooter/GlobalFooter';

class App extends Component {
  render() {

    const location = window.location.href.split('')

    return (

      <div className='app'>
        { location[location.length -1] === '/' ? null : <GlobalHeader />}
        <div>
          {routes}
        </div>
        { location[location.length -1] === '/' ? null : <GlobalFooter />}
      </div>
    );
  }
}

export default App;
