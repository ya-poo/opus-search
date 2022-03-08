import React, { useState, VFC } from 'react';
import {
  AppBar, Box, Button, Menu, MenuItem, Toolbar, Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const NavigationBar: VFC = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ mb: 2 }}>
      <Toolbar disableGutters>
        <Box display="flex" flexGrow={1}>
          <Typography
            variant="h6"
            sx={{ ml: 3, mr: 3 }}
          >
            Opus Search
          </Typography>

          <Button
            onClick={() => navigate('/composers')}
            sx={{ color: 'white' }}
          >
            Composers
          </Button>
        </Box>

        <Button
          sx={{ color: 'white', mr: 3 }}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : 'false'}
          onClick={handleClick}
        >
          Links
        </Button>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={() => window.open('https://github.com/ya-poo/opus-search')}>GitHub</MenuItem>
          <MenuItem onClick={() => window.open('https://openopus.org/')}>Open Opus</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
