import { Box, Typography, Stack,IconButton, Link} from "@mui/material"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

export const SocialMedia = [
    { 
        href : 'https://www.linkedin.com/in/Shaik-abdul-ghani09/',
        icon : LinkedInIcon,
        color : '#0A66C2'
    },
    { 
        href : 'https://www.github.com/shaikmothadghani-lgtm',
        icon : GitHubIcon,
        color : ''
    },
    { 
        href : '#',
        icon : WhatsAppIcon,
        color : 'green'
    },
    { 
        href : '#',
        icon : InstagramIcon,
        color : '#E1306C'
    },
]

export const HeroContent = ()=>{
    return(
        <Box height={300}>
            <Stack direction='column' spacing={2}>
                <Typography variant="h5" color="primary" fontFamily='serif'>Do You know Me</Typography>
                <Typography variant="h3" color="warning">Hey, I'm <span className="text-emerald-400">Shaik AbdulGhani</span></Typography>
                <Typography variant="body1" color="primary">A Computer Science student passionate about building smart, secure, and user-friendly applications. With a Detail-oriented and analytical professional with hands-on experience in data analysis, business intelligence, and software development. Adept at leveraging tools like Python, Power BI, SSIS, Tableau, and SQL to deliver actionable insights and support data-driven decision making.  </Typography>
                
                <Stack direction={'row'} justifyContent={'center'} >
                    {
                        SocialMedia.map((value,index)=>(
                            <Link href={value.href} target="_blank" >
                                <IconButton>
                                    <value.icon fontSize="large" sx={{ color: value.color }} />
                                </IconButton>
                            </Link>
                        ))
                    }
                </Stack>
            </Stack>
        </Box>
    )
}