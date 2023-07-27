import React from "react";
import SettingsIcon from "@mui/icons-material/Settings";
import Feller from "../assets/images/feller.jpg";
import BottomNav from "../components/BottomNav";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import FeedbackIcon from "@mui/icons-material/Feedback";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import StarIcon from "@mui/icons-material/Star";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import LiveHelpIcon from "@mui/icons-material/LiveHelp";

const Profile = () => {
  return (
    <>
      <div className="profile-container">
        <div className="user-details">
          <div className="user-img">
            <img src={Feller} alt="" />
            <h3>Hello John</h3>
          </div>

          <div className="setting">
            <span>SETTINGS</span>
            <SettingsIcon className="gray" />
          </div>
        </div>
        <div className="user-options">
          <div className="option-one option-card">
            <div className="inner-card">
              <span>
                <BookOnlineIcon className="gray" />
              </span>
              <span>My Ads</span>
            </div>
            <div className="inner-card">
              <span>
                <FeedbackIcon className="gray" />
              </span>
              <span>Feedback</span>
            </div>
            <div className="inner-card">
              <span>
                <FitnessCenterIcon className="gray" />
              </span>
              <span>Performance</span>
            </div>
          </div>
          <div className="option-one option-card">
            <div className="inner-card">
              <span>
                <TrendingUpIcon className="gray" />
              </span>
              <span>Pro Sales</span>
            </div>
            <div className="inner-card">
              <span>
                <StarIcon className="gray" />
              </span>
              <span>Premium Services</span>
            </div>
            <div className="inner-card">
              <span>
                <AccountBalanceWalletIcon className="gray" />
              </span>
              <span>₦ 0</span>
            </div>
          </div>
          <div className="option-one option-card">
            <div className="inner-card">
              <span>
                <NotificationsActiveIcon className="gray" />
              </span>
              <span>Notifications</span>
            </div>
            <div className="inner-card">
              <span>
                <PeopleAltIcon className="gray" />
              </span>
              <span>Followers</span>
            </div>
          </div>
          <div className="option-one option-card">
            <div className="inner-card">
              <span>
                <LiveHelpIcon className="gray" />
              </span>
              <span>FAQ</span>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 lg:hidden w-full">
          <BottomNav className="gray" />
        </div>
      </div>
    </>
  );
};

export default Profile;
