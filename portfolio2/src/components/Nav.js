import React from 'react';
import {NavLink} from 'react-router-dom';

function Nav() {
  return (
   <div>
       <ul>
           <li>
               <NavLink
               className='Nav-Link'
               activeClassName='active'
               isActive={()=>window.location.pathname === '/About'}

               to='/About'
               >About</NavLink>
           </li>
           <li>
               <NavLink
               className='Nav-Link'
               activeClassName='active'
               isActive={()=>window.location.pathname === '/Contact'}
               to='/Contact'
               >Contact</NavLink>
           </li>
           <li>
               <NavLink
               className='Nav-Link'
               activeClassName='active'
               isActive={()=>window.location.pathname === '/Portfolio'}
               to='/Portfolio'
               >Portfolio</NavLink>
           </li>
       </ul>


   </div>
  );
}

export default Nav;