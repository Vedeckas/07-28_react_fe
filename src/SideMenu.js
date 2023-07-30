import React from 'react';
import { Drawer, List, ListItem, ListItemText, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

const OvalButton = styled(Button)({
  borderRadius: '50%',
  width: '100px',
  height: '100px',
  margin: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const SideMenu = ({ open, onClose }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List>
        <ListItem>
          <OvalButton variant="contained">
            <ListItemText primary="Pirmas" />
          </OvalButton>
        </ListItem>
        <ListItem>
          <OvalButton variant="contained">
            <ListItemText primary="Antras" />
          </OvalButton>
        </ListItem>
        <ListItem>
          <OvalButton variant="contained">
            <ListItemText primary="Trečias" />
          </OvalButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideMenu;
