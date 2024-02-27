import { Link, Outlet } from 'react-router-dom'
import './navigation.styles.scss'
import { Fragment } from 'react'
import { ReactComponent as Logo } from '../../assets/clothes-round-svgrepo-com.svg'


const Navigation = ({}:NavigationProps) =>{
    
    return(
        <Fragment>
            <div className='navigation'>
                <Link to='/' className = 'nav-logo-container'>
                    <Logo className = 'nav-logo'/>
                </Link>
                <div className = 'nav-links'>
                    <Link className = 'nav-link' to = '/shop'>SHOP</Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation