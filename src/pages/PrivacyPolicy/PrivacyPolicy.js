import React, { Fragment, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../../assets/Logo.png";
import { useTheme } from "@mui/material/styles";
// import { Link } from "react-router-dom";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const logoStyles = {
  marginTop: "2rem",
  maxWidth: "xl",
  position: "relative",
  //   padding: "2rem",
  borderRadius: "8px",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundImage: `url(${logo})`,
    backgroundSize: "contain", // Adjusted from 'cover' to 'contain'
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    opacity: 0.2, // Adjust opacity as needed
    zIndex: -1,
    borderRadius: "8px",
  },
};

const buttonStyles = {
  // textTransform: "none",
  // color: theme.palette.primary.main,
  marginTop: "3rem",
  // color: "black", // display: "flex",
  // alignItems: "center",
  // textDecoration: "none",
  width: "auto", // This ensures the button fits the content
  padding: "0.5rem 1rem", // Optional: Adjust padding as needed
  "&:hover": {
    backgroundColor: "#00C3AD",
    color: "#fff",
  },
};

function PrivacyPolicy() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page when the component mounts
  }, []);

  return (
    <Fragment>
      <Container sx={logoStyles}>
        <Container maxWidth={"xl"}>
          <Grid
            item
            xs={12}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
            }}
          >
            <Typography variant="h1" component="h1" gutterBottom>
              Privacy Policy
            </Typography>
          </Grid>
        </Container>
        <Container sx={{ maxWidth: "800px", width: "100%" }}>
          <Grid item xs={12}>
            <Typography variant="h2" component="h2" sx={{ mb: 3 }}>
              Slump Studioz
            </Typography>
            <Typography variant="h6" component="h6" sx={{ mb: 3 }}>
              Last Updated: 31-07-2024
            </Typography>
            <Typography variant={isMobile ? "h6" : "h3"}>
              Our first priority is to secure your privacy. We at Slump Studioz
              are strictly committed to protecting the privacy rights of our
              users. This Privacy Policy document defines the ways we collect,
              use, manage, or store user data, including personal information
              (if any). This data can be provided by the user in any way while
              playing our mobile games on either Google Play Store, Amazon, or
              iOS App Store. The scope of this policy is limited to information
              received or collected by Slump Studioz via any of our services you
              use.Use of the service shows that you agree to this policy. If you
              do not agree with the policy, please do not use the service.
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 3, mt: 3 }}>
              Collection of Information
            </Typography>
            <Typography variant="h6" component="h6">
              Information we collect automatically through the app:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "16px",
                    },
                  }}
                  primary="We log information about your use of the app, including the type of device you use, the features you use, access times, and your IP address."
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  primary="We collect information about the device you use to access the app, including information about the device manufacturer, device model, device's OS, time zone of the device, and language of the device."
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "16px",
                    },
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  primary="We collect online identifiers of the device you use to access the app, including IDFA, Google Ads ID, Google Device ID, Game Center ID, and Google Play Account ID."
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "16px",
                    },
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  primary="We collect information relating to your use of the app, including your game progress, scores, achievements, and interactions with other players."
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "16px",
                    },
                  }}
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  primary="We collect information about your consumption habits relating to your use of the app, including which purchases you make with both virtual and real currencies and the reception of virtual goods in-game."
                  sx={{
                    "& .MuiListItemText-primary": {
                      fontSize: "16px",
                    },
                  }}
                />
              </ListItem>
            </List>
            <Typography variant="h2" component="h2" sx={{ mb: 3, mt: 3 }}>
              Location
            </Typography>
            <Typography variant={isMobile ? "h6" : "h3"}>
              Depending on the provider, we may automatically receive general
              location information when you use our services. We may use and
              store this information to provide enhanced location-based services
              as well as to serve location-targeted advertising without your
              express opt-in, which includes communication to third-party
              service providers who have agreed with Slump Studioz to keep such
              information confidential and only use such information to the
              extent necessary to perform the services as required by Slump
              Studioz.
            </Typography>
            <Typography variant="h2" sx={{ mb: 3, mt: 3 }}>
              How Does Slump Studioz Use Information?
            </Typography>
            <Typography variant={isMobile ? "h6" : "h3"} sx={{ mb: 3 }}>
              Ad Serving by Third-Party Advertisers
            </Typography>
            <Typography variant={isMobile ? "h6" : "h3"}>
              Slump Studioz reserves the right to use and disclose the collected
              non-personal data for the purpose of advertising. Slump Studioz
              may employ third-party ad-serving technologies that use certain
              methods to collect information for the purpose of interest-based
              ads serving.
            </Typography>
            <Typography variant={isMobile ? "h6" : "h3"}>
              Please read the privacy policies of ad networks we are using in
              our games:
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  secondary={
                    <a
                      href="https://unity.com/legal/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: "16px",
                      }}
                    >
                      Unity Privacy Policy
                    </a>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  secondary={
                    <a
                      href="https://policies.google.com/privacy?hl=en&gl=US"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: "16px",
                      }}
                    >
                      Google Privacy Policy
                    </a>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  secondary={
                    <a
                      href="https://docs.chartboost.com/en/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: "16px",
                      }}
                    >
                      Chartboost Privacy Policy
                    </a>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  secondary={
                    <a
                      href="https://vungle.com/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: "16px",
                      }}
                    >
                      Vungle Privacy Policy
                    </a>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  secondary={
                    <a
                      href="https://www.pangleglobal.com/privacy/enduser-en"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: "16px",
                      }}
                    >
                      Pangle Privacy Policy
                    </a>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  secondary={
                    <a
                      href="https://www.mintegral.com/en/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: "16px",
                      }}
                    >
                      Mintegral Privacy Policy
                    </a>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  secondary={
                    <a
                      href="https://www.applovin.com/privacy/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: "16px",
                      }}
                    >
                      Applovin Privacy Policy
                    </a>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <ChevronRightIcon />
                </ListItemIcon>
                <ListItemText
                  secondary={
                    <a
                      href="https://free.facebook.com/privacy/policy/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: "none",
                        color: "inherit",
                        fontSize: "16px",
                      }}
                    >
                      Meta Privacy Policy
                    </a>
                  }
                />
              </ListItem>
            </List>
            <Typography variant="h2" component="h2" sx={{ mb: 3, mt: 3 }}>
              Disclosures of Information
            </Typography>
            <Typography variant={isMobile ? "h6" : "h3"}>
              We at Slump Studioz do not collect and store personally
              identifiable information in any way. Our third-party service
              providers, like ad networks, may collect and store the
              information. This document displays the privacy policy of all
              third-party services we are using in our games. You can contact
              them for any content change or information removal.
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 3, mt: 3 }}>
              Security
            </Typography>
            <Typography variant={isMobile ? "h6" : "h3"}>
              We use reasonable electronic, personnel, and physical measures to
              protect information from loss, theft, alteration, or misuse.
              However, please be advised that even the best security measures
              cannot fully eliminate all risks. We cannot guarantee that only
              authorized persons will view your information. We are not
              responsible for third-party circumvention of any privacy settings
              or security measures.
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 3, mt: 3 }}>
              Children
            </Typography>
            <Typography variant={isMobile ? "h6" : "h3"}>
              We do not knowingly collect or store personally identifiable
              information from anyone under the age of 13 unless or except as
              permitted by law. If we are made aware that we have received
              personally identifiable information from someone under 13, Slump
              Studioz will use reasonable efforts to remove that information
              from our records.
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 3, mt: 3 }}>
              Privacy Policy Changes
            </Typography>
            <Typography variant={isMobile ? "h6" : "h3"}>
              Slump Studioz may, in its sole discretion, change this Privacy
              Policy from time to time. Any and all changes to the Slump Studioz
              Privacy Policy will be reflected here, and the date new versions
              are posted will be stated at the top of this Privacy Policy.
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 3, mt: 3 }}>
              Note
            </Typography>
            <Typography variant={isMobile ? "h6" : "h3"}>
              Slump Studioz Games and products may not provide all of the
              privacy protections discussed in this document. Your continued use
              of them indicates that you understand that your data may be
              collected by Minor Bugs and third-party partners and that you
              consent to that collection. Slump Studioz cannot guarantee the
              integrity of versions of products that are installed from
              unofficial channels and do not support/provide customer support or
              privacy guarantees for those unofficial versions. If you are using
              a version of one of our products that was installed from an
              unofficial channel, we encourage you to remove it from your device
              as soon as possible and install an officially distributed version.
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 3, mt: 3 }}>
              Contact
            </Typography>
            <Typography variant={isMobile ? "h6" : "h3"}>
              At slumpstudioz@gmail.com for any query. We will be there for
              immediate support.Thanks.
            </Typography>
            <Button
              component={Link}
              variant="outlined"
              to="/home"
              sx={buttonStyles}
            >
              Go Back Home
            </Button>
          </Grid>
        </Container>
      </Container>
    </Fragment>
  );
}

export default PrivacyPolicy;
