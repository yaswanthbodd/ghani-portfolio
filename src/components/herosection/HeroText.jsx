import { Box } from "@mui/material"
import { HeroContent } from "./HeroContent"

export const HeroText = ()=>{
    return(
        <Box sx={{ 
            
            width: '100%',
            height : {xs : '100%', sm : '100%'},
            //justifyContent : 'center',
            //alignItems : 'center',
            display : 'flex'
            }}>
            <HeroContent />
        </Box>
    )
}