import React from 'react'
import ReactDOM from 'react-dom/client'
import './Resources/css/app.css'
import Routes from './routes.tsx'
import { auth } from './firebase.tsx'
import { onAuthStateChanged } from "firebase/auth";



const App = (props:any) =>{
  return(
    <Routes {...props}/>
  )
}

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Routes />
//   </React.StrictMode>,
// )


onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <App user={user}/>
    )

    //const uid = user.uid;
 
  } else {
    // User is signed out
    // ...
  }
});