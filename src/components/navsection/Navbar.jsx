import { AppBar, Box, Button, IconButton, Stack, Toolbar, Typography } from "@mui/material"
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useState } from "react";
import { Toggole } from "./Toggole";
import HomeIcon from '@mui/icons-material/Home';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TimelineIcon from '@mui/icons-material/Timeline';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';
import { Link } from "react-scroll";

export const Navbar = ({mode, setMode}) => {
    const [darkMode, setDarkMode] = useState(true);
    const DarkModeHandler = ()=>{
        setDarkMode(!darkMode)
        setMode(darkMode ? 'light' : 'dark')
    }
    return(
        <Box>
            <AppBar variant="outlined" position="static" sx={{ borderRadius : 7, border:'1px solid blue'}}>
                <Toolbar>
                    <Typography 
                    variant="h6" 
                    component='div' 
                    fontWeight='700'
                    sx={{flexGrow : 1}}
                    >Shaik Abdulghani</Typography>
                    <Stack direction='row' spacing={2} sx={{ display : { xs : 'none' , sm : 'none' , md : 'flex'}}}>
                        <Link to="heroDisplay" smooth={true} duration={1500}>
                            <Button color="inherit" startIcon={<HomeIcon />}>Home</Button>
                        </Link>
                        <Link to="skillDisplay" smooth={true} duration={1500}>
                            <Button color="inherit" startIcon={<PsychologyIcon />}>Skills</Button>
                        </Link>
                        <Link to="projectDisplay" smooth={true} duration={1500}>
                            <Button color="inherit" startIcon={<TimelineIcon />}>Projects</Button>
                        </Link>
                        <Link to="educationDisplay" smooth={true} duration={1500}>
                            <Button color="inherit" startIcon={<SchoolIcon />}>Education</Button>
                        </Link>
                        <Link to="aboutDisplay" smooth={true} duration={1500}>
                            <Button color="inherit" startIcon={<PersonSearchIcon />}>About Me</Button>
                        </Link>
                        <Link to="contactDisplay" smooth={true} duration={1500}>
                            <Button color="inherit" startIcon={<ContactMailIcon />}>Contact Me</Button>
                        </Link>
                        
                    </Stack>

                    <Box sx={{ display : { md : 'none'}}}>
                        <Toggole />
                    </Box>
                    

                    <IconButton size="large" edge='end' color="inherit" onClick={DarkModeHandler}>
                        <DarkModeOutlinedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    )
}