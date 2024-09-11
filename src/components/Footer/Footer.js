import React from "react";
import { Grid, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/system";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "20px",
        backgroundColor: "#fff",
        textAlign: "center",
        marginTop: "8rem",
        marginBottom: "30px",
      }}
    >
      <Grid container spacing={3} justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            FOLLOW US
          </Typography>
        </Grid>
        <Grid item>
          <SocialButton>
            <FacebookIcon />
          </SocialButton>
          <SocialButton>
            <InstagramIcon />
          </SocialButton>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Typography variant="h6" color="textSecondary">
                Contact : slumpstudioz@gmail.com
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="caption" color="textSecondary">
            Copyright © SlumpStudioz Ltd 2024
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

const SocialButton = styled(IconButton)(({ theme }) => ({
  border: "2px solid #00C3AD",
  borderRadius: "10px",
  color: "#00C3AD",
  margin: "0 20px",
  transition: "all 0.3s ease",
  "& svg": {
    fontSize: "40px",
  },
  "&:hover": {
    backgroundColor: "#00C3AD",
    color: "#fff",
  },
  [theme.breakpoints.down("sm")]: {
    margin: "0 5px",
  },
}));

export default Footer;
