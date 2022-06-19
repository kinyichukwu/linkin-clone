import React, {useState} from 'react'
import CreateIcon from '@mui/icons-material/Create';
import './Feed.css'
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import EventIcon from '@mui/icons-material/Event';
import ArticleIcon from '@mui/icons-material/Article';
import Post from './Post';
//we are going to connect to firebase now

function Feed() {
  const [posts, setPosts] = useState([]);

  const setPosts = (e) => {
    e.preventDefault()
  }
  return (
    <div className='feed'>
        <div className='feed_inputContainer'>
            <div className='feed_input'>
                <CreateIcon/>
                <form>
                    <input type="text"/>
                    <button onClick={setPosts} type='submit'>Send</button>
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
          {posts.map((post)=>{
            <Post/>
          })}
        </div>
        
        <Post name='Oselukwue Kinyichukwu' description='description' message='This is a message' photoUrl=''/>
    </div>
  )
}

export default Feed