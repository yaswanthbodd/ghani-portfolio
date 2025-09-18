import { Box, Card, Stack, Typography, CardContent, CardMedia, CardActions, Button } from "@mui/material"

export const ProjectDisplay = ()=> {
    return(
        <Box id='projectDisplay' mt={8}>
            <Typography fontWeight={700} sx={{ fontSize : { xs : '30px', sm : '40px'}}} variant="h3" color="warning" textAlign="center">My Projects</Typography>
            <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                sx={{ flexWrap: 'wrap' }}
                mt="20px"
                justifyContent="center"
            >
                {[
                {
                    title: 'Road Potholes detection based on deep learning',
                    tech: 'Yolov4, Python, Deeplearning',
                    img: '#',
                    desc: 'Road Potholes Detection System is used to assists the driver to avoid potholes on the road by giving prior warnings. The project is to be a robot vehicle that is capable of detecting the potholes and transferring this information to the near by vehicles i the vicinty. By sharing the information about the potholes with the nearby vehicles the probability of accidents or collision can be reduced. Then the images are classisfied into YOLOV4 algorithm.',
                    href : '#'
                },
                {
                    title: 'Audio Steganography',
                    tech: 'Python, Datascience',
                    img: '#',
                    desc: 'This project is all about the decrypting the message hided or encrypted in the form of audio signal using required tools.',
                    href : '#'
                },
                ].map((proj, idx) => (
                <Box key={idx} width="300px">
                    <Card elevation={10} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    {/* <CardMedia component="img" image={proj.img} alt={proj.title} /> */}
                    <CardContent sx={{ flex: 1 }}>
                        <Typography variant="h6" gutterBottom>
                        {proj.title}
                        <Typography variant="body2" color="warning">– {proj.tech}</Typography>
                        </Typography>
                        <Typography variant="body2">{proj.desc}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="contained" href={proj.href} target="_blank">Get Code</Button>
                    </CardActions>
                    </Card>
                </Box>
                ))}
            </Stack>
        </Box>
    )
}