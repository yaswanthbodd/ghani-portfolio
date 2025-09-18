import { Box, Container } from "@mui/material"
import { Navbar } from "../components/navsection/Navbar"
import { HeroDisplay } from "../components/herosection/HeroDisplay"
import { SkillDisplay } from "../components/skillsection/SkillDisplay"
import { ProjectDisplay } from "../components/projectsection/ProjectDisplay"
import { EducationDisplay } from "../components/educationsection/EducationDisplay"
import { AboutDisplay } from "../components/aboutsection/AboutDisplay"
import { ContactDisplay } from "../components/contactsection/ContactDisplay"

export const LandingPage = ({mode, setMode})=>{
    return(
        <Container>
            <Box>
                <Navbar mode={mode} setMode={setMode}/>
                <HeroDisplay />
                <SkillDisplay />
                <ProjectDisplay />
                <EducationDisplay />
                <AboutDisplay />
                <ContactDisplay />
            </Box>
        </Container>
    )
}