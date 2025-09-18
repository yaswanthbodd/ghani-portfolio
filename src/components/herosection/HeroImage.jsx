import { Box, colors } from "@mui/material"

export const HeroImage = ()=>{
    return(
        <Box sx={{
            height : 200,
            justifyContent : 'center',
            alignItems : 'center',
            display: 'flex',
            flexDirection: 'center',
            width: '100%',
            mt:{
                xs : 28,
                sm : 35,
                md : 10
            }
        }}>
            <img src="assests/images/ghani_image.png" style={{width : '100%', borderBottomLeftRadius : '50%', borderBottomRightRadius : '50%'}} />
        </Box>
    )
}