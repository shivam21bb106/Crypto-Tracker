import { AppBar, Container, MenuItem, Select, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import Banner from "./Banner";

const useStyles = makeStyles({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "'Bitcount Single Ink', sans-serif",
        fontWeight: "bold",
        cursor: "pointer",
    },
});

const Header = () => {
    const classes = useStyles();
    const navigate = useNavigate()
    const { currency, setCurrency } = CryptoState()
    return (
        <AppBar color="primary" position="static">
            <Container>
                <Toolbar>
                    <Typography className={classes.title} variant="h5" onClick={() => navigate('/')}>
                        Crypto Spy
                    </Typography>

                    <Select
                        variant="outlined"
                        style={{
                            width: 100,
                            height: 40,
                            marginLeft: 15,
                            color: 'white',
                            border: '1px solid white'
                        }}
                        defaultValue="USD"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                    >
                        <MenuItem value="USD">USD</MenuItem>
                        <MenuItem value="INR">INR</MenuItem>
                    </Select>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
