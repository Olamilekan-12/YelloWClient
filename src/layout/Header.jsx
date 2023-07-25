import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import Logo from '../assets/logo.svg';
import { Link } from 'react-router-dom';
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

const lists = [
  {
    link: 'Home',
    icon: <HomeIcon />,
  },
  { link: 'Search', icon: <SearchIcon /> },
  { link: 'Item Park', icon: <BookmarkIcon /> },
  { link: 'My Searches', icon: <PolicyIcon /> },
  { link: 'My Dealers', icon: <PeopleIcon /> },
  { link: 'Messages', icon: <ForumIcon /> },
  { link: 'Notifications', icon: <NotificationsIcon /> },
  { link: 'Rent', icon: <InputIcon /> },
  { link: 'Finance Calculation', icon: <RequestQuoteIcon /> },
];
const lists2 = [
  {
    link: 'Settings',
    icon: <SettingsIcon />,
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);
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
          <h3>Buy or Rent Equipment</h3>
        </div>
        <div className="hidden lg:block  bg-[#FCB620] rounded-lg px-4 py-2 text-black font-bold">
          <Link to="/auth">Sign in / Sign Up</Link>
        </div>
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
            <p className="text-white">yellowiron@gmail.com</p>
          </div>
          <List>
            {lists.map((list, index) => (
              <ListItem key={index} disablePadding>
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
              <ListItem key={index} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{list.icon}</ListItemIcon>
                  <ListItemText primary={list.link} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <div className="flex flex-col justify-center items-center bg-[#FCB620] w-[182px] mx-auto rounded-md">
            <Link to="/auth" onClick={toggleDrawer}>
              <p className="text-xl  font-bold">Sign In/Sign Up</p>
            </Link>
          </div>
        </Box>
      </SwipeableDrawer>
    </nav>
  );
};

export default Header;
