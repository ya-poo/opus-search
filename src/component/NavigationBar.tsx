import { VFC } from 'react';
import {
  AppBar, Button, Toolbar, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavigationBar: VFC = () => {
  const navigate = useNavigate();

  const onComposerButtonClick = () => {
    navigate('/composers');
  };

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
          Open Opus
        </Typography>

        <Button
          sx={{ color: 'white', display: 'block' }}
          onClick={onComposerButtonClick}
        >
          Composers
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
