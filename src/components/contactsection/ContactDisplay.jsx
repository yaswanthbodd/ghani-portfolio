import { Box,Stack,Typography,IconButton, TextField, Paper, Button,Link } from "@mui/material"
import { SocialMedia } from "../herosection/HeroContent";

export const ContactDisplay = ()=>{
    return(
        <Box id='contactDisplay' mt={'20px'}>
            <Typography fontWeight={700} sx={{ fontSize : { xs : '30px' , sm : '40px'}}} color="warning" textAlign={'center'}>Contact Me</Typography>
            <Stack direction={'row'} display={{ xs : 'block' , sm : 'flex'}}>
                <Box sx={{flex : 2}}>
                    <Typography sx={{ textAlign : {xs : 'center', sm: 'left'}, fontSize : { xs : '20px', sm : '30px', md : '40px'}}} color="error" variant="h4">Get In Touch</Typography>
                        <Stack direction={'row'}  sx={{ justifyContent : { xs : 'center', sm : 'left'}}} >
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
                    <Typography color="success" variant="h6" fontWeight={'700'}>Mail : shaikmothadghani@gmail.com</Typography>
                </Box>
                <Box sx={{flex : 1}}>
                
                    <Paper sx={{textAlign:'center',justifyContent:'center', display: 'flex',padding:'10px', borderRadius : 7}} elevation={5}>
                        <Stack direction={'column'} spacing={2}>
                        <Typography color="secondary" variant="h5" fontWeight={'700'}>Feedback</Typography>
                            <TextField label='name' variant="outlined" size="large"/>
                            <TextField label='Email' variant="outlined" size="large"/>
                            <TextField label='Comment' variant="outlined" size="large"/>
                            <Button variant="contained">Submit</Button>
                        </Stack>
                    </Paper>
                </Box>
            </Stack>
            <footer>
                <Typography color="info" variant="body1" textAlign={'center'} mt={'30px'}>Made by Shaik Abdulghani. @ 2025. All rights reserved</Typography>
            </footer>
        </Box>
    )
}