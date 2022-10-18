import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import  { Text  } from "./Style";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 5,
    marginTop: theme.spacing(1.5),
    minWidth: 150,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.pink[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 13px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px px10",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 8,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.6),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        All Categories
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
   
      </StyledMenu>
    </div>
  );
}

export const Boyfashion = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      
      >
        BOY FASHION
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text   onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
   
      </StyledMenu>
    </div>
  );
};

export const Girlfashion = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        GIRL FASHION
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
      
      </StyledMenu>
    </div>
  );
};

export const FootWear = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        FOOTWEAR
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
   
      </StyledMenu>
    </div>
  );
};

export const Toys = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        TOYS
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
   
      </StyledMenu>
    </div>
  );
};

export const Diapering = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        DIAPERING
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
   
      </StyledMenu>
    </div>
  );
};

export const Gear = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        GEAR
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
   
      </StyledMenu>
    </div>
  );
};

export const Feeding = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        FEEDING
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
   
      </StyledMenu>
    </div>
  );
};

export const Nursery = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        Nursery
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
   
      </StyledMenu>
    </div>
  );
};

export const Moms = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        MOMS
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
   
      </StyledMenu>
    </div>
  );
};

export const Health = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        HEALTH
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
   
      </StyledMenu>
    </div>
  );
};

export const Boutiques = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        BOUTIQUES
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
   
      </StyledMenu>
    </div>
  );
};

export const Bathing = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        BATH
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
   
      </StyledMenu>
    </div>
  );
};

export const Club = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        CLUB
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
      </StyledMenu>
    </div>
  );
};

export const Carter = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        CARTER'S
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
      </StyledMenu>
    </div>
  );
};

export const More = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        style={{
            fontSize: "12px",
            fontWeight: 600,
            marginTop: "10px",
            padding: "2px",
            backgroundColor: "transparent",
            color: "black",
            marginLeft: "2px",
          }}
      >
        More
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <Text onClick={handleClose} disableRipple>
          BOY FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          GIRL FASHION
        </Text>
        <Text onClick={handleClose} disableRipple>
          FOOTWEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          TOYS
        </Text>
        <Text onClick={handleClose} disableRipple>
          DIAPERING
        </Text>
        <Text onClick={handleClose} disableRipple>
          GEAR
        </Text>
        <Text onClick={handleClose} disableRipple>
          FEEDING
        </Text>
        <Text onClick={handleClose} disableRipple>
          BATH
        </Text>
        <Text onClick={handleClose} disableRipple>
          NURSERY
        </Text>
        <Text onClick={handleClose} disableRipple>
          MOMS
        </Text>
        <Text onClick={handleClose} disableRipple>
          HEALTH & SAFETY
        </Text>
        <Text onClick={handleClose} disableRipple>
          BOUTIQUES
        </Text>
        <Text onClick={handleClose} disableRipple>
          WOMEN'S BEAUTY & CARE
        </Text>
        <Text onClick={handleClose} disableRipple>
          BIRTHDAYS & GIFTS
        </Text>
        <Text onClick={handleClose} disableRipple>
          BPPKS & CD'S
        </Text>
        <Text onClick={handleClose} disableRipple>
          SCHOOL SUPPLIES
        </Text>
        <Text onClick={handleClose} disableRipple>
          OFFER
        </Text>
        <Text onClick={handleClose} disableRipple>
          STORE & PRESCHOOLS
        </Text>
      </StyledMenu>
    </div>
  );
};