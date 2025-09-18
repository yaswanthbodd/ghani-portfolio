import { Drawer, IconButton,Box, Typography, Divider, List, ListItem, ListItemButton, ListItemText, ListItemIcon } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home';
import PsychologyIcon from '@mui/icons-material/Psychology';
import TimelineIcon from '@mui/icons-material/Timeline';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SchoolIcon from '@mui/icons-material/School';
import { useState } from "react"
import { Link } from "react-scroll";

// Toggole Details
const ToggoleDetails = [
    {
        to : 'heroDisplay',
        icon : HomeIcon,
        primary : 'Home'
    },
    {
        to : 'skillDisplay',
        icon : PsychologyIcon,
        primary : 'Skills'
    },
    {
        to : 'projectDisplay',
        icon : TimelineIcon,
        primary : 'Projects'
    },
    {
        to : 'educationDisplay',
        icon : SchoolIcon,
        primary : 'Education'
    },
    {
        to : 'aboutDisplay',
        icon : PersonSearchIcon,
        primary : 'About'
    },
    {
        to : 'contactDisplay',
        icon : ContactMailIcon,
        primary : 'Contact'
    },
]

export const Toggole = ()=>{
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    return(
        <>
            <IconButton size="large" color="inherit" onClick={()=>setIsDrawerOpen(true)}>
                <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={isDrawerOpen} onClose={()=> setIsDrawerOpen(false)}> 
                <Box p={2} width={'250px'} textAlign={'center'} role='representation'>
                    <Typography component='div'>Side Panel</Typography>
                    <Divider></Divider>
                    { ToggoleDetails.map((value,index)=>(
                        <List key={index} disablePadding>
                            <Link to={value.to} smooth={true} duration={1500}>
                                <ListItem disablePadding>
                                    <ListItemButton onClick={() => setIsDrawerOpen(false)}>
                                        <ListItemIcon>
                                                <value.icon />
                                        </ListItemIcon>
                                                <ListItemText primary={value.primary} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </List>
                        ))
                    }
                </Box>
            </Drawer>
        </>
    )
}