import { useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, IconButton, Popover } from '@mui/material';
import { Menu, Inbox, Category, PeopleAlt, Update, Chat, Mail, Search, ExpandLess, ExpandMore } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';
import SidebarItem from './SidebarItem';
import SidebarCategorySubMenu from './SidebarCategorySubMenu';

function Sidebar(): JSX.Element {
  const [showExtendedSidebar, setShowExtendedSidebar] = useState(false);
  const [showCategorySubMenu, setShowCategorySubMenu] = useState(false);
  const [inboxPopoverOpen, setInboxPopoverOpen] = useState(false);
  const [chatPopoverOpen, setChatPopoverOpen] = useState(false);
  const [popoverAnchorEl, setPopoverAnchorEl] = useState(null);

  const handleShowExtendedSidebar = () => {
    setShowExtendedSidebar(!showExtendedSidebar);
  };

  const handleShowCategorySubMenu = () => {
    setShowCategorySubMenu(!showCategorySubMenu);
  };

  const handleInboxPopoverOpen = (event) => {
    setPopoverAnchorEl(event.currentTarget);
    setInboxPopoverOpen(true);
  };

  const handleInboxPopoverClose = () => {
    setPopoverAnchorEl(null);
    setInboxPopoverOpen(false);
  };

  const handleChatPopoverOpen = (event) => {
    setPopoverAnchorEl(event.currentTarget);
    setChatPopoverOpen(true);
  };

  const handleChatPopoverClose = () => {
    setPopoverAnchorEl(null);
    setChatPopoverOpen(false);
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
        </div>

        <div className="flex-1 bg-gray-200 px-4 py-2 overflow-y-auto">
          <List>
            <div onMouseEnter={handleInboxPopoverOpen}>
              <SidebarItem icon={<Mail />} text="Inbox" />
            </div>
            <div onMouseEnter={handleChatPopoverOpen}>
              <SidebarItem icon={<Chat />} text="Chat" />
            </div>
          </List>
          <Popover
            open={inboxPopoverOpen || chatPopoverOpen}
            onClose={inboxPopoverOpen ? handleInboxPopoverClose : handleChatPopoverClose}
            anchorEl={popoverAnchorEl}
            anchorOrigin={{
              vertical: 'center',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'center',
              horizontal: 'left',
            }}
          >
            <div className="p-4">{inboxPopoverOpen ? "Inbox Popover" : "Chat Popover"}</div>
          </Popover>
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
              <SidebarItem
                icon={<Inbox />}
                text="Primary"
              />
              <SidebarItem
                icon={<Category />}
                text="Categories"
                onClick={handleShowCategorySubMenu}
                expandIcon={showCategorySubMenu ? <ExpandLess /> : <ExpandMore />}
              />
              <SidebarCategorySubMenu show={showCategorySubMenu} handleSubMenuClick={handleShowCategorySubMenu} />
            </List>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Sidebar;
