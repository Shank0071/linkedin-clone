import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './HeaderOptions.css'
import { Avatar } from '@mui/material';
 

function HeaderOptions({title, Icon, avatar, onClick}) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOptions'>
        {Icon && <Icon className="headerOptions__icon" />}
        {avatar && <Avatar className="headerOptions__icon" src={user?.email[0]}>{user && user.email[0]}</Avatar>}
        <h3>{title}</h3>
    </div>
  )
}

export default HeaderOptions