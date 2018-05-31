import React, {Component} from 'react';

class TINTNavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark my-navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#" onClick={(event) => {
              console.log(event);
            }}>Control Room</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Queue</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Results</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Wiki</a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default TINTNavBar;