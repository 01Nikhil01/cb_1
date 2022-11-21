import {
  Grid,
  Box,
  Typography,
  InputLabel,
  Input,
  Button,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";

function MainComp() {
  return (
    <>
      <Typography variant="body2" ml={2}>
        Complete 3 simple steps to have a resume to apply jobs!
      </Typography>
      <Box
        sx={{
          ml: 1.5,
          mt: 4,
          py: 5,
          px: 5,
          width: "60rem",
          boxShadow: "1px 1px 5px 2px rgba(149, 149, 150, 0.252)",
          borderRadius: "5px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography sx={{ fontWeight: "700" }}>
              1. Personal Information
            </Typography>
          </Grid>
          <Grid container>
            <Grid item md={6} my={1}>
              <InputLabel
                htmlFor="FName"
                sx={{ fontSize: ".9rem", color: "black", ml: 3.5, pt: 0 }}
              >
                <span
                  style={{
                    color: "#c50000",
                    fontSize: "1.2rem",
                    verticalAlign: "text-top",
                  }}
                >
                  *
                </span>
                First Name
              </InputLabel>
              <Input
                id="FName"
                defaultValue="Ben"
                sx={{ width: "460px", fontSize: "1.2rem", ml: 1.5, pl: 1.5 }}
              />
            </Grid>
            <Grid item md={6} my={1}>
              <InputLabel
                htmlFor="FName"
                sx={{ fontSize: ".9rem", color: "black", ml: 5.5, pt: 0 }}
              >
                <span
                  style={{
                    color: "#c50000",
                    fontSize: "1.2rem",
                    verticalAlign: "text-top",
                  }}
                >
                  *
                </span>
                Last Name
              </InputLabel>
              <Input
                id="FName"
                defaultValue="W"
                sx={{ width: "460px", fontSize: "1.2rem", ml: 4, pl: 1.5 }}
              />
            </Grid>
            <Grid item md={6} my={1}>
              <InputLabel
                htmlFor="FName"
                sx={{
                  mt: 4,
                  fontSize: ".9rem",
                  color: "black",
                  ml: 3.5,
                  pt: 0,
                }}
              >
                <span
                  style={{
                    color: "#c50000",
                    fontSize: "1.2rem",
                    verticalAlign: "text-top",
                  }}
                >
                  *
                </span>
                Country
              </InputLabel>
              <Input
                id="FName"
                endAdornment=<KeyboardArrowDownIcon
                  sx={{ color: "#036db8", fontSize: "2rem" }}
                />
                defaultValue="United States"
                sx={{ width: "460px", fontSize: "1.2rem", ml: 2, pl: 1.5 }}
              />
            </Grid>
            <Grid item md={6} my={1}>
              <InputLabel
                htmlFor="FName"
                sx={{
                  mt: 4,
                  fontSize: ".9rem",
                  color: "black",
                  ml: 5.5,
                  pt: 0,
                }}
              >
                <span
                  style={{
                    color: "#c50000",
                    fontSize: "1.2rem",
                    verticalAlign: "text-top",
                  }}
                >
                  *
                </span>
                ZIP
              </InputLabel>
              <Input
                id="FName"
                defaultValue="60425"
                sx={{ width: "460px", fontSize: "1.2rem", ml: 4, pl: 1.5 }}
              />
            </Grid>
            <Grid item md={6} my={1}>
              <InputLabel
                htmlFor="FName"
                sx={{
                  mt: 4,
                  fontSize: ".9rem",
                  color: "black",
                  ml: 3.5,
                  pt: 0,
                }}
              >
                <span
                  style={{
                    color: "#c50000",
                    fontSize: "1.2rem",
                    verticalAlign: "text-top",
                  }}
                >
                  *
                </span>
                City
              </InputLabel>
              <Input
                id="FName"
                defaultValue="Glenwood"
                sx={{ width: "460px", fontSize: "1.2rem", ml: 2, pl: 1.5 }}
              />
            </Grid>
            <Grid item md={6} my={1}>
              <InputLabel
                htmlFor="FName"
                sx={{
                  mt: 4,
                  fontSize: ".9rem",
                  color: "black",
                  ml: 5.5,
                  pt: 0,
                }}
              >
                <span
                  style={{
                    color: "#c50000",
                    fontSize: "1.2rem",
                    verticalAlign: "text-top",
                  }}
                >
                  *
                </span>
                State
              </InputLabel>
              <Input
                id="FName"
                endAdornment=<KeyboardArrowDownIcon
                  sx={{ color: "#036db8", fontSize: "2rem" }}
                />
                defaultValue="Illinois"
                sx={{ width: "460px", fontSize: "1.2rem", ml: 4, pl: 1.5 }}
              />
            </Grid>
            <Grid item md={6} my={1}>
              <InputLabel
                htmlFor="FName"
                sx={{
                  mt: 4,
                  fontSize: ".9rem",
                  color: "black",
                  ml: 3.5,
                  pt: 0,
                }}
              >
                <span
                  style={{
                    color: "#c50000",
                    fontSize: "1.2rem",
                    verticalAlign: "text-top",
                  }}
                >
                  *
                </span>
                Email Address
              </InputLabel>
              <Input
                id="FName"
                defaultValue="ben@cincocompanies.com"
                sx={{ width: "460px", fontSize: "1.2rem", ml: 2, pl: 1.5 }}
              />
            </Grid>
            <Grid item md={6} my={1}>
              <Input
                id="FName"
                defaultValue="Phone"
                sx={{
                  mt: 7,
                  width: "460px",
                  fontSize: "1.2rem",
                  ml: 4,
                  pl: 1.5,
                }}
              />
            </Grid>
            <Grid item md={12}>
              <Box
                my={1}
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="outlined"
                  disableFocusRipple
                  sx={{
                    color: "#160392",
                    fontSize: "1.2rem",
                    fontWeight: "700",
                    mt: 5,
                    textTransform: "none",
                    borderRadius: "6px",
                    border: "3px solid #410392",
                    py: 1,
                    px: 2,
                    "&:hover": {
                      border: "3px solid #410392",
                      py: 1,
                      px: 2,
                    },
                  }}
                >
                  Next
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          ml: 1.5,
          mt: 4,
          py: 5,
          px: 5,
          width: "60rem",
          boxShadow: "1px 1px 5px 2px rgba(149, 149, 150, 0.252)",
          borderRadius: "5px",
        }}
      >
        <Grid container spacing={2}>
          <Grid item md={12}>
            <Typography sx={{ fontWeight: "700" }}>2. Work History</Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default MainComp;
