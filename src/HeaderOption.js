import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
import './HeaderOption.css'

function HeaderOption({avata ,Icon, title, onClick}) {
  const user = useSelector(selectUser)
  return (
    <div onClick={onClick} className='HeaderOption'>
        {Icon && <Icon className='HeaderOption__Icon'/>}
        {avata && <Avatar className='HeaderOption__Icon' src={user?.photoUrl}>{user?.email[0]}</Avatar>}
        <h5 className='HeaderOption_title'>{title}</h5>
    </div>
  )
}

export default HeaderOption