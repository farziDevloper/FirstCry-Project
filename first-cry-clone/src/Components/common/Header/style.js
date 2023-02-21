import styled from "styled-components";

export const Wrapper = styled.header`
  /* padding: 16px 50px; */
  padding: 10px 24px;
  gap: 40px;
  .btn-logout {
    svg {
      width: 16px;
    }
  }
`;

export const Announcement = styled.div`
  gap: 8px;
  .count {
    font: 700 20px/24px "Lato";
    color: #fcfcfc;
  }
`;

export const UserInfo = styled.div`
  .short-name {
    width: 41px;
    height: 41px;
    border-radius: 50%;
    background-color: #4f4f4f;
  }
  color: #fff;
  &:after {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7px 7px 0 7px;
    border-color: #333 transparent transparent transparent;
    border-radius: 5px;
  }
  .profile-pic {
    border-radius: 50%;
    height: 41px;
    width: 41px;
  }
`;

export const ButtonLogout = styled.button`
  font: 600 15px/37px "Poppins";
  color: #fff;
  padding: 0 18px;
  border-radius: 5px;
  height: 37px;
  background-color: #005aa3;
  border: none;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
`;
