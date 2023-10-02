import {Link} from 'react-router-dom';
import { ListItem } from '@mui/material';
import { logOutHandler } from '../../Utils/tools';

const AdminNav = () =>{

    const links = [
        {
            title:'Matches',
            linkTo:'/admin_matches'
        },
        {
            title:'Players',
            linkTo:'/admin_players'
        },
    ]

    const renderItems = () =>{
        return (links.map(link=>(
            <Link to={link.linkTo} key={link.title}>
                <ListItem button className="admin_nav_link">
                    {link.title}
                </ListItem>
            </Link>
        )))
    }

    return(
        <div>
            {renderItems()}
            <ListItem button className='admin_nav_link'
                onClick={logOutHandler}
            >
                Log out
            </ListItem>
        </div>
    )
}

export default AdminNav 