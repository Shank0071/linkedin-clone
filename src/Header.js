import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import { useDispatch } from 'react-redux';
import { logout } from './features/userSlice';
import { getAuth, signOut } from 'firebase/auth';

export default function Header() {
  const dispatch = useDispatch()

  const logoutOfApp = () => {
    dispatch(logout())
    const auth = getAuth()
    signOut(auth)
  }

  return (
    <div className='header'>
        <div className="header__left">
            <LinkedInIcon className="linkedin" style={{color: "#0a66c2", fontSize: "40px"}}/>
            <div className="header__search">
                <SearchIcon style={{color: "grey"}}/>
                <input type="text" placeholder='Search'/>
            </div>
        </div>
        <div className="header__right">
            <HeaderOptions Icon={HomeIcon} title="Home"/>
            <HeaderOptions Icon={SupervisorAccountIcon} title="My Network"/>
            <HeaderOptions Icon={BusinessCenterIcon} title="Jobs"/>
            <HeaderOptions Icon={ChatIcon} title="Messaging"/>
            <HeaderOptions Icon={NotificationsNoneIcon} title="Notifications"/>
            <HeaderOptions avatar={true} title="Me" onClick={logoutOfApp}/>
        </div>
    </div>
  )
}
