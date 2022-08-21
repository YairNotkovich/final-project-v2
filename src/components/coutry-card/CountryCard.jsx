import * as React from 'react';

import {
    Typography, Avatar, Box,
    List,
    ListItem,
    ListItemText,
    Divider,
} from '@mui/material';

import { Accordion, AccordionSummary, AccordionDetails } from './countryCard.styles.js'

import { useSelector } from 'react-redux';
import { selectCountries } from '../../app/context/locations/countries/countriesSlice';
import { selectRangedAirports } from '../../app/context/locations/airports/airportsSlice.js';
import { Container } from '@mui/system';




const style = {
    width: '100%',
    bgcolor: 'background.paper',
};


const CountryCard = (props) => {

    const countries = useSelector(selectCountries)
    const rangedAirports = useSelector(selectRangedAirports)


    const { country_id, resultAirports } = props
    const { Name, Flag, id } = countries.find(country => country.id === country_id)

    const active = React.useRef(country_id)
    const [expanded, setExpanded] = React.useState(null);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };


    const airports = resultAirports.filter(airport => airport.country_id === id)
    





    return (
        <div key = {Name}>
            <Accordion expanded={expanded === active.current} onChange={handleChange(active.current)}>
                <AccordionSummary
                    aria-controls={`panel${country_id}bh-content`}
                    id={active.current}
                >

                    <Container sx={{ alignItems: 'center', display: 'flex' }}>
                        <Avatar alt={Name} src={Flag} />
                        <Typography sx={{ color: 'text.secondary', marginLeft: 4 }}>{Name}</Typography>
                        <Typography sx={{ color: 'text.secondary', marginLeft: 4 }}>{airports.length} Airports at your range</Typography>
                    </Container>
                    <Box minWidth={'30%'}>
                    </Box>



                </AccordionSummary>
                <Typography>
                    {airports.length}
                </Typography>
                <AccordionDetails>
                    <List sx={style} component="nav" aria-label="airports in range" key={`${id}list`}>

                        {airports.map(airport =>
                        (<>
                            <ListItem key={`${airport.id}listItem`} sx={{
                                borderRadius: "4px",
                                boxShadow: "rgba(52, 152, 219, 1) 0px 1px 6px 0px"
                            }} button>
                                <ListItemText primary={airport.name} secondary={airport.iata_code} />
                            </ListItem>
                            <Divider />
                        </>)
                        )}
                    </List>

                </AccordionDetails>
            </Accordion>

        </div>
    );
}

export default CountryCard