import { useState } from 'react';
import { IconButton, Drawer, Menu, MenuItem, TextField, InputAdornment, FormControl, Select, OutlinedInput, Box } from '@mui/material';
import { Settings, Apps, AccountCircle, Search, ArrowDropDown } from '@mui/icons-material';
import SearchInput from './SearchInput';

function Header() {
  const [showSettings, setShowSettings] = useState(false);
  const [filter, setFilter] = useState('All');

  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  return (
    <header className="flex items-center vh-100 justify-between bg-gray-200 px-4 py-2 shadow">

      <div className="flex-grow">
        <SearchInput />
      </div>

      <div className="flex items-center">
        

        <IconButton onClick={handleShowSettings} sx={{ ml: 2 }}>
          <Settings />
        </IconButton>

        <IconButton sx={{ ml: 2 }}>
          <Apps />
        </IconButton>

        <IconButton sx={{ ml: 2 }}>
          <AccountCircle />
        </IconButton>
      </div>

      <Drawer open={showSettings} anchor="right" onClose={handleShowSettings}>
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Settings Panel</h2>
        </div>
      </Drawer>
    </header>
  );
}

export default Header;
