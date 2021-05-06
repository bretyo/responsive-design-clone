import { Component } from 'react';
import HamburgerIcon from './HamburgerIcon';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state={
      menuBtnActive: true,
      navShow: false
    }
  }

  render(){
    return (
      <div className="App">
        <nav>
          <div className={`nav-head ${this.state.navShow ? 'nav-active' : '' }`}>
            <a><img src='https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg' alt='Start Bootsrap' /></a>
            {this.state.menuBtnActive && <button onClick={()=>this.setState({navShow: !this.state.navShow})}>MENU {<HamburgerIcon/>}</button>}
          </div>
          {this.state.navShow && <ul className='nav-content'>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>ABOUT</li>
            <li>TEAM</li>
            <li>CONTACT</li>
          </ul>}
        </nav>
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
