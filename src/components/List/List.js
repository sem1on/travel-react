import React, { useState, useEffect, createRef } from 'react';

import { Grid, CircularProgress, Typography, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

import PlaceDetails from '../PlaceDetails/PlaceDetails';

import useStyles from './style';


const List = ({ places, childClicked, isLoading, type, setType, rating, setRating }) => {

    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);

    useEffect(() => {
        const refs = Array(places?.length).fill().map((_, i) => elRefs[i] || createRef());
        setElRefs(refs);
    }, [places]);


    return (
        <div className={classes.container}>
            <Typography variant="h4">Кафе & Отели  рядом с Вами</Typography>
            {isLoading ? (
                <div className={classes.loading}>
                    <CircularProgress size="5rem" />
                </div>
            ) : (
                <>
                <FormControl className={classes.formControl}>
                    <InputLabel id="type">Тип</InputLabel>
                    <Select id="type" value={type} onChange={(e) => setType(e.target.value)}>
                        <MenuItem value="restaurants">Рестораны</MenuItem>
                        <MenuItem value="hotels">Отели</MenuItem>
                        <MenuItem value="attractions">Места</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="rating">Рейтинг</InputLabel>
                    <Select id="rating" value={rating} onChange={(e) => setRating(e.target.value)}>
                        <MenuItem value="0">Все</MenuItem>
                        <MenuItem value="3">Более 3.0</MenuItem>
                        <MenuItem value="4">Более 4.0</MenuItem>
                    <MenuItem value="4.5">Более 4.5</MenuItem>
                    </Select>
                </FormControl>
                <Grid container spacing={3} className={classes.list}>
                    {places?.map((place, i) => (
                        <Grid ref={elRefs[i]} key={i} item xs={12}>
                            <PlaceDetails selected={Number(childClicked) === i} refProp={elRefs[i]} place={place} />
                        </Grid>
                    ))}
                </Grid>
                </>
            )}
        </div>
    );
};

export default List;