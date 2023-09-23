import {Link} from 'react-router-dom';

import mcitylogo from '../../Resources/images/logos/manchester_city_logo.png';

type CityLogoProps = {
    link: boolean;
    linkTo: string;
    width: string;
    height: string;
  }; 

export const CityLogo = ({link,linkTo,width,height}:CityLogoProps)=>{
    const template =<div
        className='img_cover'
        style={{
            width: width,
            height:height,
            background:`url(${mcitylogo}) no-repeat`
        }}
    ></div>

    if(link){
        return(
            <Link className='link_logo' to={linkTo}>
                {template}
            </Link>
        )
    }else{
        return template
    }
}