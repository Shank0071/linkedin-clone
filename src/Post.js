import { Avatar } from '@mui/material'
import './Post.css'
import InputOptions from './InputOptions'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';


function Post({name, description, message, photoUrl}) {
  return (
    <div className='post'>
        <div className="post__header">
            <Avatar src={photoUrl}>{name && name[0]}</Avatar>
            <div className="post__info">
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
        </div>
        <div className="post__body">
            <p>{message}</p>
        </div>
        <div className="post__buttons">
            <InputOptions title="Like" Icon={ThumbUpAltIcon}/>
            <InputOptions title="Comment" Icon={CommentIcon}/>
            <InputOptions title="Share" Icon={ShareIcon}/>
            <InputOptions title="Send" Icon={SendIcon}/>

        </div>

    </div>
  )
}

export default Post