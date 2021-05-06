import { Component } from 'react';
import HamburgerIcon from './components/HamburgerIcon';
import './App.css';
import MenuButton from './components/MenuButton';

class App extends Component {
  constructor(){
    super();

    this.state={
      menuBtnActive: true,
      navShow: false
    }
  }

  toggleNav =()=> {
    this.setState({ navShow: !this.state.navShow })
  }

  render(){
    return (
      <div className="App">
      <div className='nav-container'>
        <nav>
          <div className={`nav-head ${this.state.navShow ? 'nav-active' : '' }`}>
            <a href='../public/index.html'><img src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt='Start Bootsrap' /></a>
            {this.state.menuBtnActive ? <MenuButton toggleNav={this.toggleNav}/> : ''}
          </div>
          {<ul id='nav-content' className={`nav-content ${!this.state.navShow && 'hidden'}`}>
          <a><li>SERVICES</li></a>
            <a><li>PORTFOLIO</li></a>
            <a><li>ABOUT</li></a>
            <a><li>TEAM</li></a>
            <a><li>CONTACT</li></a>
          </ul>}
        </nav>
      </div>
        <header>
          <p>Welcome To Our Studio!</p>
          <h1>IT'S NICE TO MEET YOU</h1>
          <button>TELL ME MORE</button>
        </header>
      </div>
    );
  }
}

export default App;
