import React from 'react';
import ReactDOM from "react-dom";
import { Image } from 'mui-image'
import { CardMedia, Typography } from '@mui/material';
import { Box} from '@mui/material'
import { Container} from '@mui/material'
import CustomizedAccordions from './Accordion';
import Paper from '@mui/material/Paper';
import DrawerWrapper from '../Wrapper/DrawerWrapper';


function SupportPage() {
  
 
  return (
    <DrawerWrapper>
    <div>
        <Container maxWidth={false} disableGutters>
            <card>
            <Typography variant="h3" top="9%" left="5%" position="absolute" color={"white"} fontWeight="fontWeightBold" sx={{paddingTop:"50px"}}>Stop N Rest Support</Typography> 
            <Typography variant="h5" top="29%" left="5%" position="absolute" color={"white"} fontWeight="fontWeightBold" className='subtitle'>
            Get in touch with us here, <br/>and our team is Here To Assist You</Typography> 
           <img src="/../../hotel_images/customer_service_generated.jpg"  width="30%" style={{position:"absolute",top:'17%', right:'10%'}} className='sideimage'/>
           <CardMedia component="img" src="/../../hotel_images/supportimage.png"  maxwidth="100%" height={500} />
           <Typography variant="h4" pl={10} mt={5} fontWeight="fontWeightBold">Need to talk to Support?</Typography>
           <Typography mt={3} pl={10} >Feel free to Call Our Customer Support Executive with the below given number</Typography>
           <Typography variant="h5" mt={3} pl={10} fontWeight="fontWeightBold">Stop N Rest Customer Care No. 9876543210</Typography>
           <Typography mt={3} pl={10}>Its A 24/7 Toll Free Number To Assist You In All Indian Languages</Typography>
           <Typography variant="h4" pl={10} mt={5} fontWeight="fontWeightBold">Mail US</Typography>
           <Typography mt={3} pl={10}>Feel Free To Write Us For Any Kind Of Queries And Concerns </Typography>
           <Typography variant="h5" mt={3} pl={10} fontWeight="fontWeightBold">Stop N Rest mailID is stopNrest@gmail.com</Typography>
           <Typography variant="h4" pl={10} mt={5} fontWeight="fontWeightBold">FAQ</Typography>
             <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 3,
          width: "90%",
          height: 500,
          ml:10
        },
      }}
    >
      <CustomizedAccordions/>

    </Box>
        </card>
        </Container>     
    </div>
    </DrawerWrapper>
  )
}
export default SupportPage