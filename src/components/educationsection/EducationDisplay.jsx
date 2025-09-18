import { Box, IconButton, Typography } from "@mui/material"
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent } from "@mui/lab"
import LabelIcon from '@mui/icons-material/Label';

const EducationDetails = [
    {
        year : '2020 - 2024',
        study : 'Bachelor Of Technology',
        stream : 'Computer Science & Engineering',
        Address : 'Narasaraopeta Institute of Technology, Narasaraopeta , Andhra Pradesh',
        marks : 'C.G.P.A : 7.2 / 10'
    },
    {
        year : '2018 - 2020',
        study : 'Intermediate',
        stream : 'M.P.C',
        Address : 'Sri Chaitanya JR College, Narasaraopeta, Andhra Pradesh',
        marks : 'Marks : 9.23 / 10'
    },
    {
        year : '2017 - 2018',
        study : "10'th Standard",
        stream : 'State Syllabus',
        Address : 'Sindhu High School, Narasaraopeta, Andhra Pradesh',
        marks : 'C.G.P.A : 9.7 / 10'
    },
]

export const EducationDisplay = ()=>{
    return(
        <Box id='educationDisplay' mt={10}>
            <Typography fontWeight={700} sx={{ fontSize : { xs : '30px', sm : '40px'}}} variant="h3" color="info" textAlign=         {'center'}>Time line</Typography>
            <Timeline position="right" sx={{ alignItems: 'center' }} >

            {
                EducationDetails.map((details, index) => (
                <TimelineItem key={index}>
                <TimelineOppositeContent color="success">
                    <Typography sx={{ fontSize : { xs : '20px', sm : '30px' } }} variant="h5">{details.year}</Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineDot color="warning" variant="filled" sx={{width: 24, height: 24,  boxShadow: '0px 0px 15px rgba(255, 165, 0, 0.7)'}}/>
                    <TimelineConnector sx={{ backgroundColor: 'deeppink' , height:'100%'}} />
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                    <Typography sx={{ fontSize : { xs : '20px', sm : '30px' } }} color="secondary" fontWeight={'700'}>{details.study}</Typography>
                    <Typography color="info" sx={{ fontSize : {xs : '15px' , sm : '20px'}}} variant="body2" fontFamily={'serif'}>{details.stream}</Typography>
                    <Typography color="info" sx={{ fontSize : {xs : '15px' , sm : '20px'}}} variant="body1" fontFamily={'serif'}>{details.Address}</Typography>
                    <Typography color="info" sx={{ fontSize : {xs : '15px' , sm : '20px'}}} variant="body2" fontFamily={'serif'}>{details.marks}</Typography>
                </TimelineContent>
            </TimelineItem>
            ))
            }
        </Timeline>
        </Box>
    )
}