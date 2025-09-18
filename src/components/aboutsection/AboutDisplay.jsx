import { Box, Stack, Typography } from "@mui/material"

export const AboutDisplay = ()=>{
    return(
        <Box mt={'10px'} id='aboutDisplay'>
            <Typography fontWeight={700} sx={{ fontSize : { xs : '30px', sm : '40px'}}} variant="h3" color="warning" textAlign={'center'}>About Me</Typography>
            <Stack sx={{ display : { xs : 'block' , sm : 'flex'}, mt : { xs : '1px'}}} direction='row' spacing={3} justifyContent={'space-between'} gap={4}>
                        <Box sx={{flex : '2'}}>
                            <Box sx={{ mt : { xs : 2, sm : 5, md : 15}}}>
                                <Typography color="info" variant="h3" fontFamily={'serif'}>Shaik Abdulghani</Typography>
                                <Typography color="warning" variant="h5"> - A computer science student with hard-working passionate person who believes in the important of education and accessibility to technological advancements. </Typography>
                                <Typography color="error" variant="h5">- Your's Abdulghani</Typography>
                            </Box>
                        </Box>
                        <Box sx={{flex : '1'}}>
                            <Box sx={{
                                display: 'flex',
                                justifyContent : 'center',
                                flexDirection : 'center',
                                alignItems : 'center',
                                mt : { sm : 6}
                            }}>
                                {/* <img src='assests/images/ghani_image.png' alt="ghani-image"/> */}
                            </Box>
                        </Box>
                    </Stack>
        </Box>
    )
}