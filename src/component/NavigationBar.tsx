import { VFC } from 'react';
import {
  AppBar, Button, Toolbar, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavigationBar: VFC = () => {
  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      sx={{ mb: 2 }}
    >
      <Toolbar disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ ml: 5, mr: 5 }}
        >
          Opus Search
        </Typography>

        <Button
          sx={{ color: 'white', display: 'block' }}
          onClick={() => navigate('/composers')}
        >
          Composers
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
