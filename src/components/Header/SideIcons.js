import React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import GamesIcon from "@mui/icons-material/SportsEsports";
import RedemptionIcon from "@mui/icons-material/CardGiftcard";
import PrivacyPolicyIcon from "@mui/icons-material/Policy";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const SideIcons = () => {
  const theme = useTheme();
  const location = useLocation();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const iconSize = isMobile ? 16 : 22;
  const activeIconSize = isMobile ? 30 : 36;

  const getIconProps = (path) => ({
    sx: {
      fontSize: location.pathname === path ? activeIconSize : iconSize,
      color:
        location.pathname === path ? theme.palette.underline.main : "inherit",
      transition: "font-size 0.3s ease",
    },
  });

  return (
    <Box
      sx={{
        position: "fixed",
        top: "50%",
        right: "0",
        transform: "translateY(-50%)",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "white",
        boxShadow: theme.shadows[4],
        padding: "10px",
        borderRadius: "10px 0 0 10px",
      }}
    >
      <IconButton component={Link} to="/home" color="inherit">
        <HomeIcon {...getIconProps("/home")} />
      </IconButton>
      <IconButton component={Link} to="/games" color="inherit">
        <GamesIcon {...getIconProps("/games")} />
      </IconButton>
      <IconButton component={Link} to="/redemption" color="inherit">
        <RedemptionIcon {...getIconProps("/redemption")} />
      </IconButton>
      <IconButton component={Link} to="/privacypolicy" color="inherit">
        <PrivacyPolicyIcon {...getIconProps("/privacypolicy")} />
      </IconButton>
    </Box>
  );
};

export default SideIcons;
