import './Feed.css'
import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { useEffect, useState } from 'react';
import { db } from './firebase';
import { addDoc, collection, serverTimestamp, orderBy, query} from 'firebase/firestore';
import { onSnapshot } from "firebase/firestore";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';


export default function Feed() {
  const [input, setInput] = useState("")
  const [posts, setPosts] = useState([])
  const user = useSelector(selectUser)
  console.log(user)

  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"))
    onSnapshot(q, (snapshot) => {
    setPosts(
      snapshot.docs.map((doc) => ({
        id: doc.id,
        data: doc.data()
      }))
    )
});
  }, [])

  const sendPost = (e) => {
    e.preventDefault()
    try {
      addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: serverTimestamp()
      });
    } catch (err) {
      console.error("Error adding document: ", err);
    }
    setInput("")
  }

  return (
    <div className='feed'>
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
                    <button onClick={sendPost} type="submit">Send</button>
                </form>
            </div>
            <div className="inputOptions">
              <InputOptions title="Photo" Icon={InsertPhotoIcon} color="#70B5F9" />
              <InputOptions title="Video" Icon={OndemandVideoIcon} color="orange" />
              <InputOptions title="Event" Icon={EventAvailableIcon} color="gray" />
              <InputOptions title="Write article" Icon={ArticleIcon} color="darkgreen" />
            </div>
        </div>
          {posts.map(({id, data: {name, description, message, photoUrl}}) => (
            <Post 
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
              />
          ))}

  
    </div>
  )
}
