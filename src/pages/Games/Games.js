import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, ImageList, ImageListItem } from "@mui/material";
import google from "../../assets/google.jpeg";
import tileMaster from "../../assets/masterGame.png";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import {
  Autoplay,
  Pagination,
  EffectCoverflow,
  Navigation,
} from "swiper/modules";
import { db } from "../../config/FireBaseConfig";
import { collection, getDocs } from "firebase/firestore";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
// import { Pagination } from "swiper/modules";

function Games() {
  const theme = useTheme();
  const [imageData, setImageData] = useState([]);
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const getAllImages = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "tile-master-game"));
      const fetchedData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setImageData(fetchedData);
    } catch (error) {
      console.error("Error fetching Firestore data:", error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getAllImages();
  }, []);

  console.log("data", imageData);

  return (
    <Container maxWidth={"xl"}>
      <Grid container spacing={2} sx={{ marginTop: "3rem" }}>
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
            <Typography variant="h1">Triple Match: Tile Master Pro</Typography>
            <Typography
              variant={isMobile ? "h6" : "h3"}
              sx={{ marginTop: 2, marginBottom: 5 }}
            >
              Discover the Fun of "Tile Master Pro: Match 3 Tiles - Sorting
              Games" – Your New Favorite Tile Matching Game! The triple match 3d
              games are matching games for seniors to match and master the
              mahjong.
            </Typography>
            <Typography
              variant={isMobile ? "h6" : "h3"}
              sx={{ marginTop: 2, marginBottom: 5 }}
            >
              Out now on Android!
            </Typography>
          </Box>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://play.google.com/store/apps"
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
          {/* <Box
            component="img"
            src={tileMaster}
            alt="Game Image"
            sx={{
              width: "100%",
              height: isMobile ? "80%" : "70%",
              borderRadius: "50px",
            }}
          /> */}
          <Swiper
            spaceBetween={20}
            navigation={true}
            effect={"coverflow"}
            centeredSlides={true}
            loop={true}
            slidesPerView={isMobile ? 1 : 3}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 50, // Angle of rotation
              stretch: 0, // Space between the slides along the axis
              depth: 100, // Z-axis distance of the slides
              modifier: 1, // Multiplier for scaling and opacity effect
              slideShadows: true, // Adds shadows around slides
            }}
            modules={[Autoplay, Navigation, EffectCoverflow]}
          >
            {imageData?.map((item, index) => (
              <SwiperSlide key={index}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "10px",
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Games;
