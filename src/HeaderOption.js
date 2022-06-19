import { Avatar } from '@mui/material'
import './HeaderOption.css'

function HeaderOption({avata ,Icon, title}) {
  return (
    <div className='HeaderOption'>
        {Icon && <Icon className='HeaderOption__Icon'/>}
        {avata && <Avatar className='HeaderOption__Icon' src={avata}/>}
        <h5 className='HeaderOption_title'>{title}</h5>
    </div>
  )
}

export default HeaderOption