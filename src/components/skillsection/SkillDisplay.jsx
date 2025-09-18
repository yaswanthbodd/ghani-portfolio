import { Box, Chip, Grid, IconButton, Paper, Stack, Typography } from "@mui/material"
import CodeIcon from '@mui/icons-material/Code';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { LiaReact } from "react-icons/lia";
import { RiTailwindCssFill } from "react-icons/ri";
import StorageIcon from '@mui/icons-material/Storage';
import { FaJava } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import TranslateIcon from '@mui/icons-material/Translate';
import TerminalIcon from '@mui/icons-material/Terminal';
import { FaPython } from "react-icons/fa";
import MemoryIcon from '@mui/icons-material/Memory';
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { SiPostgresql } from "react-icons/si";
import { SiTableau } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { FcStatistics } from "react-icons/fc";
import { RiBuilding2Line } from "react-icons/ri";



const SkillDetails = [
    // {
    //     logo : CodeIcon,
    //     logoColor : 'text-blue-500',
    //     main : 'Frontend Development',
    //     skills: [
    //         { label : 'HTML', color : '#e34c26', icon : FaHtml5},
    //         { label : 'CSS' , color : 'blue', icon : FaCss3Alt},
    //         {label : 'JavaScript', color : 'yellow', icon : IoLogoJavascript},
    //         {label : 'React' ,  color : 'lightgreen', icon : LiaReact},
    //         {label : 'Tailwind CSS', color : 'blue', icon : RiTailwindCssFill}
    //     ]
    // },
    // {
    //     logo : StorageIcon,
    //     logoColor : 'text-green-500',
    //     main : 'Backend Development',
    //     skills: [
    //         { label : 'Java', color : '#e34c26', icon : FaJava},
    //         { label : 'Spring Boot' , color : 'green', icon : BiLogoSpringBoot},
    //         {label : 'MySQL', color : 'lightblue', icon : SiMysql},
    //         {label : 'MongoDB' ,  color : 'green', icon : SiMongodb},
    //     ]
    // },
    {
        logo : TranslateIcon,
        logoColor : 'text-green-500',
        main : 'Languages',
        skills: [
            {label : 'Python', color : 'orange', icon : FaPython},
            {label : 'Javascript' ,  color : 'yellow', icon : IoLogoJavascript},
            {label : 'PostgreSQL',  color : 'blue', icon : SiPostgresql}
        ]
    },
    {
        logo : MemoryIcon,
        logoColor : 'text-red-500',
        main : 'Tools & Technologies',
        skills: [
            { label : 'Power BI', color : 'yellow', icon : RiBuilding2Line},
            { label : 'Tableau' , color : 'red', icon : SiTableau},
            {label : 'SSIS', color : 'red', icon : DiMsqlServer},
            {label : 'Statistics Modeling' ,  color : 'yellow', icon : FcStatistics},
        ]
    },
    
]


export const SkillDisplay = () => {
    return(
        <Box id='skillDisplay' mt={{ xs : '100px', sm : '300px' , md: '100px'}}>
            <Typography color="warning" sx={{ fontSize : { xs : '30px', sm : '40px'}, background: 'linear-gradient(to right, #1626FD 5%, #CF1512 100%)',    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',}} fontWeight='700' textAlign={'center'}>My Skills</Typography>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} mt={'20px'}>
                
                {
                    SkillDetails.map((value, index) => (
                    <Grid key={index} size={{ xs: 12, sm: 6, md: 6 }}>
                    <Paper
                        sx={{
                        border : '2px solid red',
                        padding: '20px',
                        borderRadius: '12px',
                        p: '2px', // space for border
                        background: 'linear-gradient(to right, #1626FD 5%, #CF1512 100%)',
                        backgroundSize: '400% 400%',
                        animation: 'gradientBorder 10s ease infinite',
                        '@keyframes gradientBorder': {
                            '0%': { backgroundPosition: '0% 50%' },
                            '50%': { backgroundPosition: '100% 50%' },
                            '100%': { backgroundPosition: '0% 50%' },
                        },
                        '& > *': {
                            borderRadius: '10px',
                            padding: '10px',
                        },
                        }}
                        elevation={2}
                    >
                        <Stack direction={'row'}>
                        <IconButton
                            size="medium"
                            sx={{ backgroundColor: 'GrayText', borderRadius: '12px', mr: '10px' }}
                        >
                            <value.logo  className={value.logoColor}/>
                        </IconButton>
                        <Typography variant="h6" mt={0.5}>
                            {value.main}
                        </Typography>
                        </Stack>
                        <Stack flexWrap="wrap" direction={'row'} mt={2} gap={2}>
                            {value.skills.map((skill,ind)=>{
                                const IconComponent = skill.icon;
                                return(
                                // 
                                    <Chip label={skill.label} icon={<IconComponent size={20} style={{ color: skill.color }} />}/>
                                
                                )
                            })}
                        </Stack>
                        {/* <Stack flexWrap="wrap" direction={'row'} mt={2} gap={2}>
                        <Chip label="HTML" icon={<FaHtml5 size={20} style={{ color: '#e34c26' }} />} />
                        <Chip label="CSS" icon={<FaCss3Alt size={20} style={{ color: 'blue' }} />} />
                        <Chip label="JavaScript" icon={<IoLogoJavascript size={20} style={{ color: 'yellow' }} />} />
                        <Chip
                            label="React"
                            icon={<LiaReact size={20} style={{ color: 'lightgreen' }} className="animate-spin" />}
                        />
                        <Chip
                            label="Tailwind CSS"
                            icon={<RiTailwindCssFill size={20} style={{ color: 'blue' }} className="animate-pulse" />}
                        />
                        </Stack> */}
                    </Paper>
                </Grid>
                ))
                }
            </Grid>
        </Box>
    )
}