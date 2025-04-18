import Link from 'next/link';
import classes from './MainNavigation.module.css';
import Link from 'next/link';

function MainNavigation(){
return(

    <header className={classes.header}>
        <div className={classes.logo}>
          React Meetups
        </div>
     <nav>
        <ul>
            <li>
                <Link to="/">All Meetups</Link>
            </li>
            <li>
                <Link to="/new-meetup">Add New Meetup</Link>
            </li>
        </ul>
     </nav>

    </header>
)
}

export default MainNavigation;