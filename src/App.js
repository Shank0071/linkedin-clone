import { useSelector, useDispatch } from "react-redux"
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sidebar from './Sidebar';
import Login from './Login';
import { logout, selectUser, login } from "./features/userSlice"
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Widgets from "./Widgets";


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user logged in
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL
        }))
      } else {
        // user logged out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ): (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets />
      </div>
      )}
   
    </div>
  );
}

export default App;
