import React from 'react'
import Navigation from './Navigation'

interface AuxProps  { 
  children: React.ReactNode
}

const Layout:React.FC<AuxProps>=(props)=> {
  return (
    <div>
      <Navigation/>
      {props.children}
    </div>
  )
}

export default Layout


// export default function Layout(props) {
//   return (
//     <div>
//       <Navigation/>
//       {props.children}
//     </div>
//   )
// }
