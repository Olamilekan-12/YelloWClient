import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Logo from '../assets/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import PolicyIcon from '@mui/icons-material/Policy';
import PeopleIcon from '@mui/icons-material/People';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InputIcon from '@mui/icons-material/Input';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import SettingsIcon from '@mui/icons-material/Settings';
import { useGlobalContext } from '../Context/AppContext';
import { Login, LogoutSharp } from '@mui/icons-material';

const lists = [
  {
    link: 'Home',
    icon: <HomeIcon />,
    url: '/',
  },
  { link: 'Search', icon: <SearchIcon />, url: '/search' },
  { link: 'Item Park', icon: <BookmarkIcon />, url: '/' },
  { link: 'My Searches', icon: <PolicyIcon />, url: '/saved' },
  { link: 'My Dealers', icon: <PeopleIcon />, url: '/' },
  { link: 'Messages', icon: <ForumIcon />, url: '/' },
  { link: 'Notifications', icon: <NotificationsIcon />, url: '/' },
  { link: 'Rent', icon: <InputIcon />, url: '/equipments' },
  { link: 'Finance Calculation', icon: <RequestQuoteIcon />, url: '/' },
];
const lists2 = [
  {
    link: 'Settings',
    icon: <SettingsIcon />,
    url: '/settings',
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { user, logoutUser } = useGlobalContext();
  const navigate = useNavigate();
  const toggleDrawer = () => {
    setOpen(!open);
    console.log(open);
  };

  return (
    <nav className="h-[52px] flex fixed top-0 bg-[#5D2689] w-[100%] z-10">
      <div className="flex-1 flex items-center justify-between lg:max-w-[1140px] mx-auto text-white px-2 lg:px-0">
        <div className="flex justify-between items-center w-full lg:w-auto">
          <Link to="/">
            <img src={Logo} alt="Yellow Iron Brand Logo" />
          </Link>
          <div
            role="button"
            onClick={() => {
              toggleDrawer();
            }}
            className="lg:hidden h-[38px] w-[38px] p-2 border-2 border-white rounded-full flex justify-center items-center"
          >
            <Person2OutlinedIcon htmlColor="white" fontSize="large" />
          </div>
        </div>
        <div className="hidden lg:block">
          <h3 className="text-xl font-medium">Buy or Rent Equipment</h3>
        </div>
        {user ? (
          <div className="hidden lg:block  bg-[#FCB620] hover:animate-pulse rounded-lg px-4 py-2 text-black font-bold">
            <span role="button" onClick={logoutUser}>
              Logout
            </span>
          </div>
        ) : (
          <div className="hidden lg:block  bg-[#FCB620] hover:animate-pulse rounded-lg px-4 py-2 text-black font-bold">
            <Link to="/auth">Sign in / Sign Up</Link>
          </div>
        )}
      </div>
      <SwipeableDrawer
        anchor="left"
        open={open}
        onClose={() => toggleDrawer()}
        onOpen={() => toggleDrawer()}
      >
        <Box sx={{ width: 350 }} role="presentation">
          <div className=" bg-[#5D2689] py-10 px-4 shadow-md">
            <div className="flex justify-between items-center">
              <h3 className="text-white text-3xl font-medium">Welcome</h3>
              <img src={Logo} alt="Yellow Iron Logo" />
            </div>
            {user && (
              <p className="text-white text-[1rem] font-medium">{user?.name}</p>
            )}
          </div>
          <List>
            {lists.map((list, index) => (
              <ListItem
                key={index}
                disablePadding={true}
                onClick={() => {
                  navigate(list.url);
                  toggleDrawer();
                }}
              >
                <ListItemButton>
                  <ListItemIcon>{list.icon}</ListItemIcon>
                  <ListItemText primary={list.link} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {lists2.map((list, index) => (
              <ListItem
                key={index}
                disablePadding
                onClick={() => {
                  navigate(list.url);
                  toggleDrawer();
                }}
              >
                <ListItemButton>
                  <ListItemIcon>{list.icon}</ListItemIcon>
                  <ListItemText primary={list.link} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <div className="flex flex-col  bg-[#FCB620]">
            {user ? (
              <List>
                <ListItem
                  disablePadding
                  onClick={() => {
                    logoutUser();
                    toggleDrawer();
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <LogoutSharp />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </List>
            ) : (
              <List>
                <ListItem
                  disablePadding
                  onClick={() => {
                    navigate('/auth');
                    toggleDrawer();
                  }}
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <Login />
                    </ListItemIcon>
                    <ListItemText primary="Login" />
                  </ListItemButton>
                </ListItem>
              </List>
            )}
          </div>
        </Box>
      </SwipeableDrawer>
    </nav>
  );
};

export default Header;
