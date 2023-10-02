
import ReactDOM from 'react-dom/client'
import './Resources/css/app.css'
import Routes from './routes.tsx'
import {User} from "firebase/auth";
// import { auth } from './firebase.tsx'
import { auth } from './config/firebase-config.ts';
import { onAuthStateChanged } from "firebase/auth";



const App = ({ user }: {user:User|null}) =>{
  return(
    <Routes user={user}/>
  )
}

// ReactDOM.createRoot(document.getElementById('root')!).render(
//   <React.StrictMode>
//     <Routes />
//   </React.StrictMode>,
// )


onAuthStateChanged(auth, (user) => {

    console.log(user);
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <App user={user}/>
    )


 
  
});