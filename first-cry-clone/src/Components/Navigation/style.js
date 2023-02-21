import styled from "styled-components";
import { Text } from "../../styledConstants";
export const Wrapper = styled.div`
  .logo {
    margin-bottom: 42px;
    margin-left: 43px;
    display: inline-block;
    vertical-align: top;
  }
`;

export const Nav = styled.nav`
  .navlist {
    > li {
      > .nav-link {
        padding-left: 43px;
        padding-right: 12px;
      }
      &.active {
        background-color: #f0f3f4;
        svg .cls-2 {
          fill: #015ba4;
        }
      }
    }
  }
  .sub-navlist {
    > li > .nav-link {
      padding-left: 77px;
      padding-right: 12px;
      &.active {
        > div {
          color: #005aa3;
        }
      }
    }
  }
  .nav-link {
    gap: 10px;
    height: 37px;
    padding-right: 12px;
    cursor: pointer;
  }
`;

export const NavIcon = styled.div`
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
