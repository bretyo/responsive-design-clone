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
          <div className={`nav-content-container ${!this.state.navShow ? 'hidden' : 'drop-box'}  `}>
            {<ul id='nav-content' className={`nav-content `}>
              <a id='li-1'><li>SERVICES</li></a>
              <a id='li-2'><li>PORTFOLIO</li></a>
              <a id='li-3'><li>ABOUT</li></a>
              <a id='li-4'><li>TEAM</li></a>
              <a id='li-5'><li>CONTACT</li></a>
            </ul>}

          </div>
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
