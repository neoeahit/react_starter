import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'
import { IndexLink } from 'react-router'
import Home from './Home'

export default React.createClass({
  render() {
    return (
    <div>
        {this.props.children}
        <nav className="navbar navbar-inverse navbar-fixed-bottom" role="navigation">
	  <ul className="nav navbar-nav">    
	      <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
              <li><NavLink to="/about">Dashboard</NavLink></li>
              <li><NavLink to="/incidents">Create Incident</NavLink></li>
	  </ul>
	</nav>
     </div>
    )
  }
})
