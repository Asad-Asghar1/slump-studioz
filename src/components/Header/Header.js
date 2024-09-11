import React, { useState, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import HomeIcon from "@mui/icons-material/Home";
import GamesIcon from "@mui/icons-material/SportsEsports";
import RedemptionIcon from "@mui/icons-material/CardGiftcard";
import PrivacyPolicyIcon from "@mui/icons-material/Policy";
import Box from "@mui/material/Box";
import Footer from "../Footer/Footer";
import logo from "../../assets/Logo.png";
import SideIcons from "./SideIcons";

function Header() {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderButtons = () => (
    <>
      {["Home", "Games", "Redemption", "Privacy Policy"].map((text, index) => (
        <Button
          key={index}
          color="inherit"
          variant="primary"
          component={Link}
          to={`/${text.toLowerCase().replace(/\s/g, "")}`}
          sx={{
            position: "relative",
            color:
              location.pathname === `/${text.toLowerCase().replace(/\s/g, "")}`
                ? theme.palette.underline.main
                : "inherit",
            "&::after": {
              content: '""',
              position: "absolute",
              width:
                location.pathname ===
                `/${text.toLowerCase().replace(/\s/g, "")}`
                  ? "100%"
                  : "0%",
              height: "3px",
              bottom: "-5px",
              left: "0",
              backgroundColor: theme.palette.underline.main,
              transition: "width 0.3s ease",
            },
            "&:hover": {
              color: theme.palette.underline.main,
            },
            "&:hover::after": {
              width: "100%",
            },
            marginRight: 4,
            paddingLeft: theme.spacing(2),
            paddingRight: theme.spacing(2),
          }}
        >
          {text}
        </Button>
      ))}
    </>
  );

  return (
    <>
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          top: 0,
          left: 0,
          right: 0,
          transition: "transform 0.3s ease-in-out",
          backgroundColor: "white",
          color: "black",
        }}
      >
        <Toolbar
          sx={{
            padding: "0",
            justifyContent:
              isMobile || location.pathname === "/privacypolicy"
                ? "center"
                : "space-between",
          }}
        >
          <img
            src={logo}
            alt="Slump Studioz"
            style={{
              marginLeft: isMobile ? "" : "4rem",
              width: "100px",
              height: "auto",
            }}
          />
          {!isMobile && location.pathname !== "/privacypolicy" && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                mr: 3,
              }}
            >
              {renderButtons()}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      {!isMobile &&
        isScrolledDown &&
        location.pathname !== "/privacypolicy" &&
        <SideIcons/>}
      {isMobile && location.pathname !== "/privacypolicy" && <SideIcons/>}
    </>
  );
}

export default Header;
