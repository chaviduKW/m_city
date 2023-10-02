import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {AuthGuard} from "./Hoc/Auth.tsx";
import {User} from "firebase/auth";


import Header from './Components/Header_footer/Header';
import Footer from './Components/Header_footer/Footer';
import Home from './Components/Home';
import SignIn from './Components/Signin'
import TheTeam from './Components/theTeam';
import TheMatches from './Components/theMatches';
import NotFound from './Components/NotFound';

import Dashboard from './Components/Admin/Dashboard';
import AdminPlayers from './Components/Admin/Players';
import AddEditPlayers from './Components/Admin/Players/addEditPlayers';
import AdminMatches from './Components/Admin/matches';
import AddEditMatch from './Components/Admin/matches/addEditMatch';


const AppRoutes = ({ user }: {user:User|null}) => {
  return (
    <BrowserRouter>

      <Header user={user} />
      <Routes>
        <Route path="/admin_matches/edit_match/:matchid"   element={<AuthGuard user={user}><AddEditMatch/></AuthGuard>}/>
        <Route path="/admin_matches/add_match"  element={<AuthGuard user={user}><AddEditMatch/></AuthGuard>} />
        <Route path="/admin_matches"  element={<AuthGuard user={user}><AdminMatches/></AuthGuard>} />
        <Route path="/admin_players/edit_player/:playerid"  element={<AuthGuard user={user}><AddEditPlayers/></AuthGuard>} />
        <Route path="/admin_players/add_player"  element={<AuthGuard user={user}><AddEditPlayers/></AuthGuard>} />
        <Route path="/admin_players"  element={<AuthGuard user={user}><AdminPlayers/></AuthGuard>} />

        <Route path={'/dashboard'} element={<AuthGuard user={user}><Dashboard/></AuthGuard>}/>
        {/* <Route path="/dashboard"  Component={AuthGuard(Dashboard)} /> */}
        <Route path="/the_matches"  Component={TheMatches} />
        <Route path="/the_team"  Component={TheTeam} />
        <Route path="/sign_in"  element={<SignIn  user={user} />} />
        <Route path="/"  Component={Home} />
        <Route Component={NotFound} />
      </Routes>
      <ToastContainer />
      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
