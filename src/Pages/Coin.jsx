import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SingleCoin } from '../config/api';
import { CryptoState } from '../CryptoContext';
import { makeStyles } from '@mui/styles';
import CoinInfo from '../components/CoinInfo';

import { Typography } from '@mui/material';
import ReactHtmlParser from 'react-html-parser';


const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        [theme.breakpoints.down("md")]: {
            flexDirection: "column",
            alignItems: "center",
        },
    },
    sidebar: {
        width: "30%",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 25,
        borderRight: "2px solid grey",
    },
    heading: {
        fontWeight: "bold",
        marginBottom: 20,
        fontFamily: "Montserrat",
    },
    description: {
        width: "100%",
        fontFamily: "Montserrat",
        padding: 25,
        paddingBottom: 15,
        paddingTop: 0,
        textAlign: "justify",
    },
    marketData: {
        alignSelf: "start",
        padding: 25,
        paddingTop: 10,
        width: "100%",
        [theme.breakpoints.down("md")]: {
            display: "flex",
            justifyContent: "space-around",
        },
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            alignItems: "center",
        },
        [theme.breakpoints.down("xs")]: {
            alignItems: "start",
        },
    },
}));

const Coin = () => {

    const { id } = useParams()
    const [coin, setCoin] = useState({})
    const { currency, symbol } = CryptoState()

    const fetchCoin = async () => {
        const { data } = await axios.get(SingleCoin(id))
        setCoin(data)
    }

    useEffect(() => {
        fetchCoin()

    }, [])


    const classes = useStyles();

    return (
        <div className={classes.container}>
            <div className={classes.sidebar}>

                <img
                    src={coin?.image?.large}
                    alt={coin?.name}
                    height="200"
                    style={{ marginBottom: 20 }} />

                <Typography variant="h3" className={classes.heading}>
                    {coin?.name}
                </Typography>
                <Typography variant="subtitle1" className={classes.description}>
                    {ReactHtmlParser(coin?.description?.en.split(". ")[0])}.
                </Typography>

            </div>

            {/* <CoinInfo coin={coin} />
             */}
            <CoinInfo coin={coin} />

        </div>
    )
}

export default Coin