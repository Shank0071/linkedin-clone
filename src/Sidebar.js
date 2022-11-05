import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'

export default function Sidebar() {
    const user = useSelector(selectUser)
    console.log(user)

    const recentItem = (topic) => (
        <div className='sidebar__recentItem'>
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div>
    )
  return (
    <div className='sidebar'>
        <div className="sidebar__top">
            <img src="https://media.istockphoto.com/photos/sunflare-on-road-picture-id94502345" 
            alt="djd" />
            <Avatar className='sidebar__avatar' src={user.photoUrl} >{user.email[0]}</Avatar>
            <h2>{ user.displayName }</h2>
            <h4>{ user.email }</h4>
        </div>
        <div className='sidebar__stats'>
            <div className="sidebar__stat">
                <p>Who viewed you</p>
                <p className="sidebar__statNumber">2,543</p>
            </div>
            <div className="sidebar__stat">
                <p>Views on post</p>
                <p className="sidebar__statNumber">2,448</p>
            </div>
        </div>
        <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem("reactjs")}
                {recentItem("programming")}
                {recentItem("softwareengineering")}
                {recentItem("django")}
                {recentItem("python")}
        </div>
    </div>
  )
}
