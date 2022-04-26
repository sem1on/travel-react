import React, { useState } from 'react';

import { AppBar, Toolbar, Typography } from '@material-ui/core';

import useStyles from './style';

const Header = () => {

    const classes = useStyles();


    return (
        <AppBar position='static'>
            <Toolbar className={classes.toolbar}>
                <Typography variant='h5' className={classes.title}>
                    wherE?
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;