import React, { useEffect, useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import './Feed.css'
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
import { db } from './Firebase.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';



function Feed() {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map((doc) => (
        {
          id: doc.id,
          data: doc.data(),
        }
      )))
    ))
  }, [])

  const sendPost = (e) => {
    e.preventDefault()

    db.collection('posts').add({
      name: 'Oselukwue Kinyichukwu',
      description: 'this is a test',
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }
  return (
    <div className='feed'>
        <div className='feed_inputContainer'>
            <div className='feed_input'>
                <CreateIcon/>
                <form>
                    <input value={input} onChange={(e) => setInput(e.target.value)} type="text"/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>
            </div>

            <div className='feed_inputOptions'>
                 {/* import options */}
                 <InputOption Icon={ImageIcon} title='Photo' color='#7085F9'/>
                 <InputOption Icon={VideocamIcon} title='Video' color='#E7A33E'/>
                 <InputOption Icon={EventIcon} title='Event' color='#C0CBCD'/>
                 <InputOption Icon={ArticleIcon} title='Write Article' color='#7FC15E'/>
            </div>

          {/* post */}

        </div>

        {posts.map(({id, data: {description, name, message, photoUrl}}) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
        <Post name='Oselukwue Kinyichukwu' description='description' message='This is a message' photoUrl=''/>
    </div>
  )
}

export default Feed