import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Chip from '@mui/material/Chip';
import { Box } from '@mui/material';

export default function ToggleTrip() {
  const [alignment, setAlignment] = React.useState('round');

  const handleChange = (event, newAlignment) => {

    setAlignment(newAlignment);
  };

  return (
    <Box sx={{ padding: 1, }} >
      <ToggleButtonGroup
        color="secondary"
        value={alignment}
        exclusive
        aria-label="Platform"

      >
        <ToggleButton
          onClick={handleChange}
          component={Chip} label="Round Trip" value="round" name="round" />
        <ToggleButton
          onClick={handleChange}
          component={Chip} label="One Way" value="one" name="one" />
      </ToggleButtonGroup>
    </Box>
  );
}