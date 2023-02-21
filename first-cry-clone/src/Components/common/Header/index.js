import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Request from "../../../utils/Request";
import Config from "../../../utils/config";
import iconAnnouncement from "../../../assets/images/icon-announcement.png";
import IconLogout from "../../../assets/images/IconLogout";
import { Box, Icon, Text, ButtonSolid } from "../../styledConstants";
import { Announcement, ButtonLogout, UserInfo, Wrapper } from "./style";
import { isEmpty, userLogout } from "../../../utils/common";

export default function Header() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);
  console.log(user);
  const logout = () => {
    userLogout();
    navigate("/");
  };

  const adminProfile = (() => {
    navigate("/adminprofile");
  })

  return (
    <Wrapper className="flex flex-center justify-end header">
      {/*<Announcement className="flex flex-center">
        <Icon src={iconAnnouncement} width="23px" alt="" />
        <Text size="rg" fw="md">
          Announcement
        </Text>
        <Box width="24px" height="24px" bgColor="#F01102" className="flex flex-center justify-center count">
          3
        </Box>
      </Announcement> */}
      <UserInfo className="flex flex-center pointer" onClick={adminProfile}>
        <Text className="short-name flex flex-center justify-center" size="rg" fw="md" color="color7">
         { (user && user.profileImage) ? <img  src={user.profileImage} alt="" className="profile-pic"/> :
          user && Object.keys(user).length
            ? user.firstName
              ? (user.firstName[0] + user.lastName[0]).toUpperCase()
              : ""
            : ""
          }
        </Text>
        <Text className="ml8 mr12" size="rg" fw="md">
          {user && user.firstName}
        </Text>
      </UserInfo>
      <ButtonSolid primary rg className="flex flex-center justify-center btn-logout" onClick={logout}>
        <IconLogout className="mr8" />
        Log out
      </ButtonSolid>
    </Wrapper>
  );
}
