import { Box, Stack,Typography } from "@mui/material"
import { HeroText } from "./HeroText"
import { HeroImage } from "./HeroImage"

export const HeroDisplay = ()=> {
    return(
        <Stack id='heroDisplay' direction='row' spacing={3} justifyContent={'space-between'} mt={'50px'} sx={{
            display : {
                xs : 'block',
                sm : 'block',
                md : 'flex'
            },
            
        }}>
            <Box sx={{flex : '2'}}>
                <HeroText />
            </Box>
            <Box sx={{flex : '1'}}>
                <HeroImage />
            </Box>
        </Stack>
    )
}