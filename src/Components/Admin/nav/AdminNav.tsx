import {Link,withRouter} from 'react-router-dom';
import { ListItem } from '@mui/material';
import { logOutHandler } from '../../Utils/tools';

const AdminNav = (props:any) =>{

    const links = [
        {
            title:'Matches',
            linkTo:'/admin-matches'
        },
        {
            title:'Players',
            linkTo:'/admin-players'
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

    console.log(props);

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

export default withRouter(AdminNav) 