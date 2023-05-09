import { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Menu, Inbox, Category, PeopleAlt, Update, Chat, Mail } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

function Sidebar() {
  const [showExtendedSidebar, setShowExtendedSidebar] = useState(false);

  const handleShowExtendedSidebar = () => {
    setShowExtendedSidebar(!showExtendedSidebar);
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col">
        <div className="bg-gray-200 flex items-center justify-between p-4">
          <div className="flex items-center">
            <IconButton onClick={handleShowExtendedSidebar}>
              <Menu />
            </IconButton>
            <img className="h-8 ml-2" src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x.png" alt="Gmail logo"/>
          </div>
          <IconButton>
            <Chat />
          </IconButton>
        </div>

        <div className="flex-1 bg-gray-200 px-4 py-2 overflow-y-auto">
          <List>
            <ListItem button className="py-3">
              <ListItemIcon>
                <Mail />
              </ListItemIcon>
              <ListItemText primary="Inbox" />
            </ListItem>

            <ListItem button className="py-3">
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <ListItemText primary="Categories" />
            </ListItem>

            <ListItem button className="py-3">
              <ListItemIcon>
                <Update />
              </ListItemIcon>
              <ListItemText primary="Updates" />
            </ListItem>
          </List>
        </div>
      </div>

      <AnimatePresence>
        {showExtendedSidebar && (
          <motion.div
            className="bg-gray-100 w-64 flex-shrink-0 z-10"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -200, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <List>
              <ListItem button className="py-3">
                <ListItemIcon>
                  <Inbox />
                </ListItemIcon>
                <ListItemText primary="Primary" />
              </ListItem>

              <ListItem button className="py-3">
                <ListItemIcon>
                  <PeopleAlt />
                </ListItemIcon>
                <ListItemText primary="Social" />
              </ListItem>

              <ListItem button className="py-3">
                <ListItemIcon>
                  <Category />
                </ListItemIcon>
                <ListItemText primary="Promotions" />
              </ListItem>

              <ListItem button className="py-3">
                <ListItemIcon>
                  <Update />
                </ListItemIcon>
                <ListItemText primary="Updates" />
              </ListItem>

              <ListItem button className="py-3">
                <ListItemIcon>
                  <Inbox />
                </ListItemIcon>
                <ListItemText primary="Forums" />
              </ListItem>
            </List>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sidebar;
