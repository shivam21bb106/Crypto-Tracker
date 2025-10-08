import React from 'react'
import { makeStyles } from "@mui/styles";
import { Container, Typography } from '@mui/material';
import Carousel from './Carousel';

const useStyles = makeStyles({
    banner: {
        backgroundImage: 'url(./banner.jpg)',
    },
    bannerContent: {
        height: 400,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 25,
        justifyContent: 'space-around',
    },
    tagline: {
        display: 'flex',
        height: '40%',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center'
    }
});
const Banner = () => {
    const classes = useStyles()
    return (
        <div className={classes.banner}>

            <Container className={classes.bannerContent}>

                <div className={classes.tagline}>

                    <Typography variant='h2'
                        style={{
                            fontWeight: 'bold',
                            marginBottom: 15,

                        }}
                    >
                        Crypto Tracker

                    </Typography>

                    <Typography variant='subtitle2'
                        style={{
                            color: 'darkgrey',
                            textTransform: 'captialize'
                        }}
                    >
                        Get all the info regarding your favourite Crypto curremncy
                    </Typography>

                </div>
                <Carousel />
            </Container>

        </div>
    )
}

export default Banner