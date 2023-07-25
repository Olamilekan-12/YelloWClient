import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import MessageIcon from '@mui/icons-material/Message';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function BottomNav() {
  const [value, setValue] = useState('home');
  const navigate = useNavigate();

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction
        value="home"
        label="Home"
        icon={<HomeIcon />}
        onClick={() => navigate('/')}
      />
      <BottomNavigationAction
        value="saved"
        label="Saved"
        icon={<FavoriteIcon />}
        onClick={() => navigate('/saved')}
      />
      <BottomNavigationAction
        value="sell"
        label="Sell"
        onClick={() => navigate('/add-product')}
        icon={<AddBoxOutlinedIcon />}
      />
      <BottomNavigationAction
        value="message"
        label="Message"
        icon={<MessageIcon />}
      />
      <BottomNavigationAction
        value="profile"
        label="Profile"
        onClick={() => navigate('/profile')}
        icon={<AccountCircleOutlinedIcon />}
      />
    </BottomNavigation>
  );
}
