import React from 'react'
import {NavLink,useLocation} from 'react-router-dom'
import classes from './Navigation.module.css'



const Navigation=()=> {
  const location =useLocation()
  console.log(location)
  return (
    <header >
      <nav className={classes.nav}>
        <h4>
          Great Quotes
        </h4>
        <ul className={classes.links}>
          <li>
              <NavLink to={'/'} className={location.pathname === '/quotes' ? classes.active : undefined}>
               All Quotes 
              </NavLink>
          </li>
          <li>
              <NavLink to={'/new-quote'} className={location.pathname === '/new-quote' ? classes.active : undefined}>
               New Quote
              </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
 export default Navigation