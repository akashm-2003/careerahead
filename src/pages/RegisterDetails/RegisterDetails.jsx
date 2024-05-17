import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { doc, getDoc, setDoc } from "firebase/firestore";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { auth, db } from "../../auth/firebase";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="http://localhost:3000/">
        MastersWay
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function CreateSponsorship() {
  const domainsArray = [
    "Artificial Intelligence",
    "Data Science",
    "Computer Vision",
    "Networks and Systems",
    "Computational Sciences",
    "Health and Life Sciences",
    "Materials Science",
    "Energy and Environment",
    "Mathematics and Physical Sciences",
    "Software and Systems Engineering",
    "Miscellaneous",
    // Add additional categories as needed
  ];
  const locationArray = [
    "Bombay",
    "Delhi",
    "GandhiNagar",
    "Bhuvaneshwar",
    "Goa",
    "Guwahati",
    "Hyderabad",
    "Indore",
    "Jammu",
    "Jodhpur",
    "Kanpur",
    "Kharagpur",
    "Madras",
    "Mandi",
    "Patna",
    "Rookee",
    "Ropar",
    "Varanasi",
  ];
  const [collegeName, setCollegeName] = React.useState("");
  const [domain, setDomain] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [age, setAge] = React.useState("");
  const [gender, setGender] = React.useState("");
  const navigate = useNavigate();

  console.log(collegeName, domain, location,age,gender);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      collegeName === "" ||
      domain === "" ||
      location === "" ||
      age === "" ||
      gender === ""
    ) {
      toast.error("Please fill all the fields");
    } else {
      try {
        const currentUser = auth.currentUser;
        console.log(currentUser);
        if (currentUser) {
          await setDoc(doc(db, "users", currentUser.uid), {
            name: currentUser.displayName,
            email: currentUser.email,
            collegeName: collegeName,
            domain: domain,
            location: location,
            age: age,
            gender: gender,
          });
          toast.success("Registration Successful");
          navigate("/");
        } else {
          toast.error("User not logged in");
        }
      } catch (error) {
        console.error("Error updating user profile:", error);
        toast.error("An error occurred while updating user profile");
      }
    }
  };

  React.useEffect(() => {
    const fetchUserData = async () => {
      try {
        const currentUser = auth.currentUser;
        if (!currentUser) {
          // If user is not authenticated, navigate to login page
          navigate("/login");
          return;
        }
        if (currentUser) {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          console.log(userDoc.data());
          if (userDoc.exists()) {
            const userData = userDoc.data();
            setCollegeName(userData.collegeName);
            setDomain(userData.domain);
            setLocation(userData.location);
            setAge(userData.age);
            setGender(userData.gender);
          }
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registration Details
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">College</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={collegeName}
                    label="College"
                    onChange={(e) => setCollegeName(e.target.value)}
                  >
                    <MenuItem value={"IIT"}>IIT</MenuItem>
                    <MenuItem value={"NIT"}>NIT</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Domain</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={domain}
                    label="Domain"
                    onChange={(e) => setDomain(e.target.value)}
                  >
                    {domainsArray.map((domain) => (
                      <MenuItem value={domain}>{domain}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="age"
                  label="Age"
                  type="number"
                  id="age"
                  value={age}
                  onChange={(e) => {
                    const enteredAge = parseInt(e.target.value);
                    console.log(age,enteredAge);
                    if (enteredAge >= 0) {
                      setAge(enteredAge);
                    } else if (enteredAge < 0) {
                      toast.error("Age cannot be negative");
                    } else {
                      setAge(enteredAge);
                      toast.error("Cannot be Empty");
                    }
                  }}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={gender}
                    label="Gender"
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <MenuItem value={"Male"}>Male</MenuItem>
                    <MenuItem value={"Female"}>Female</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">
                    Location
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={location}
                    label="Domain"
                    onChange={(e) => setLocation(e.target.value)}
                  >
                    {locationArray.map((location) => (
                      <MenuItem value={location}>{location}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              {/* <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      <ToastContainer />
    </ThemeProvider>
  );
}
