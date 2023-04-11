import React, { Component } from 'react'
import Carousel from 'react-elastic-carousel';
import './slider.css';
import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import tajimg from './tajmahal.webp'
import qutubimg from './qutub_minar.jpg'
import hampi from './Hampi.jpg'
import shimla from './shimla.jpg'
import himalya from './Himalyas.jpg'
import tamil from './tamilnadu.jpg'


class Slider extends Component {


    render() {

        return (
            <>
                <div className='upperdiv'>
                    <h2>Unlock the Wonders of India</h2>
                </div>
                <Carousel className='carousel'>
                    <div className='row'>
                        <div className='column' id='carcol'>
                            <Card sx={{ maxWidth: 345, border:"2px solid black"}}>
                                <CardMedia
                                    component="img"
                                    height="260"
                                    image={tajimg}
                                    alt="green iguana"
                                />
                                {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Tajhmahal the Wonder
                            </Typography>
                           
                            </CardContent> */}

                            </Card>


                        </div>

                        <div className='column' id='carcol'>
                            <Card sx={{ maxWidth: 345, border:"2px solid black" }}>
                                <CardMedia
                                    component="img"
                                    height="260"
                                    image={qutubimg}
                                    alt="green iguana"
                                />
                                {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Tajhmahal the Wonder
                            </Typography>
                           
                            </CardContent> */}

                            </Card>


                        </div>


                        <div className='column' id='carcol'>
                            <Card sx={{ maxWidth: 345, border:"2px solid black"}} >
                                <CardMedia
                                    component="img"
                                    height="260"
                                    image={hampi}
                                    alt="green iguana"
                                />
                                {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Tajhmahal the Wonder
                            </Typography>
                           
                            </CardContent> */}

                            </Card>


                        </div>


                    </div>


                    <div className='row'>
                        <div className='column'>
                            <Card sx={{ maxWidth: 345, border:"2px solid black" }}>
                                <CardMedia
                                    component="img"
                                    height="260"
                                    image={shimla}
                                    alt="green iguana"
                                />
                                {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Tajhmahal the Wonder
                            </Typography>
                           
                            </CardContent> */}

                            </Card>


                        </div>

                        <div className='column'>
                            <Card sx={{ maxWidth: 345, border:"2px solid black"}}>
                                <CardMedia
                                    component="img"
                                    height="260"
                                    image={himalya}
                                    alt="green iguana"
                                />
                                {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Tajhmahal the Wonder
                            </Typography>
                           
                            </CardContent> */}

                            </Card>


                        </div>


                        <div className='column'>
                            <Card sx={{ maxWidth: 345, border:"2px solid black"}}>
                                <CardMedia
                                    component="img"
                                    height="260"
                                    image={tamil}
                                    alt="green iguana"
                                />
                                {/* <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Tajhmahal the Wonder
                            </Typography>
                           
                            </CardContent> */}

                            </Card>


                        </div>


                    </div>










                </Carousel>

            </>

        )
    }
}


export default Slider
