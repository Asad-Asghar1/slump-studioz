import React, { Fragment, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import tileMaster from "../../assets/masterGame.png";
import google from "../../assets/google.jpeg";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <Fragment>
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <img
              // src={imageOne}
              alt="Full Width"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={"xl"}>
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            marginTop: "3rem",
          }}
        >
          <Typography variant="h1" component="h1" gutterBottom>
            Slump Studioz
          </Typography>
        </Grid>
      </Container>
      <Container sx={{ maxWidth: "900px", width: "100%" }}>
        <Grid
          item
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Typography variant={isMobile ? "h6" : "h3"}>
            Slump Studioz is a dynamic team of mobile game developers
            specializing in Android, iOS, and blockchain-based games. We are
            passionate about creating immersive and innovative gaming
            experiences that push the boundaries of technology. Our expertise
            spans traditional mobile platforms as well as cutting-edge
            blockchain technology, ensuring that our games are not only
            entertaining but also pioneering in the gaming industry. At Slump
            Studioz, we are committed to delivering high-quality games that
            captivate and engage players worldwide.
          </Typography>
        </Grid>
      </Container>
      <Container maxWidth={"xl"}>
        <Grid container spacing={2} sx={{ marginTop: "4rem" }}>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: isMobile ? "center" : "right",
              padding: 2,
            }}
          >
            <Box>
              <Typography variant="h1">
                Triple Match: Tile Master Pro
              </Typography>
              <Typography
                variant={isMobile ? "h6" : "h3"}
                sx={{ marginTop: 5, marginBottom: 5 }}
              >
                Discover the Fun of "Tile Master Pro: Match 3 Tiles - Sorting
                Games" – Your New Favorite Tile Matching Game! The triple match
                3d games are matching games for seniors to match and master the
                mahjong.
              </Typography>
              <Typography
                variant={isMobile ? "h6" : "h3"}
                sx={{ marginTop: 5, marginBottom: 5 }}
              >
                Out now on Android!
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.slumpstudioz.vehicles.puzzle.relaxing.game"
                >
                  <img
                    src={google}
                    alt="Google Play Store"
                    width={isMobile ? "160" : "210"}
                    style={{ borderRadius: "8px" }}
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box
              component="img"
              src={tileMaster}
              alt="Game Image"
              sx={{
                width: "100%",
                height: isMobile ? "80%" : "70%",
                borderRadius: "50px",
              }}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth={"xl"}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Box
              component="img"
              src={tileMaster}
              alt="Game Image"
              sx={{
                width: "100%",
                height: isMobile ? "80%" : "70%",
                borderRadius: "50px",
              }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            lg={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: isMobile ? "center" : "right",
              padding: 2,
            }}
          >
            <Box>
              <Typography variant="h1">
                Triple Match: Tile Master Pro
              </Typography>
              <Typography
                variant={isMobile ? "h6" : "h3"}
                sx={{ marginTop: 5, marginBottom: 5 }}
              >
                Discover the Fun of "Tile Master Pro: Match 3 Tiles - Sorting
                Games" – Your New Favorite Tile Matching Game! The triple match
                3d games are matching games for seniors to match and master the
                mahjong.
              </Typography>
              <Typography
                variant={isMobile ? "h6" : "h3"}
                sx={{ marginTop: 5, marginBottom: 5 }}
              >
                Out now on Android!
              </Typography>
            </Box>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://play.google.com/store/apps/details?id=com.slumpstudioz.vehicles.puzzle.relaxing.game"
                >
                  <img
                    src={google}
                    alt="Google Play Store"
                    width={isMobile ? "160" : "210"}
                    style={{ borderRadius: "8px" }}
                  />
                </a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  );
}

export default Home;
