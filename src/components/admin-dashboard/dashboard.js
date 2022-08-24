import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Admin from '../../pages/system-admin';
import { Container } from '@mui/system';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PublicIcon from '@mui/icons-material/Public';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import AirlinesIcon from '@mui/icons-material/Airlines';
import SettingsIcon from '@mui/icons-material/Settings';
import Users from '../../screens/users';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box  >
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function AdminDashboard() {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 'inherit' }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider', maxWidth: '200px', minWidth: '180px' }}
      >
        <Tab icon={<PeopleAltIcon />} iconPosition="start" label="Users" {...a11yProps(0)} />
        <Tab  icon={<PublicIcon />} iconPosition="start" label='Countries' {...a11yProps(1)} />
        <Tab icon={<AirlinesIcon />} iconPosition="start" label="Airlines" {...a11yProps(2)} />
        <Tab icon={<ConnectingAirportsIcon />} iconPosition="start" label="Airports" {...a11yProps(3)} />
        <Tab icon={<SettingsIcon/>} iconPosition="start" label="Settings" {...a11yProps(4)} />
        {/* <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} /> */}
      </Tabs>
      <TabPanel value={value} index={0} >
        <Users />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Countries
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  );
}
