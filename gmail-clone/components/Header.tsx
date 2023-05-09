import { useState } from 'react';
import { IconButton, Drawer, Menu, MenuItem, TextField, InputAdornment, FormControl, Select, OutlinedInput, Box } from '@mui/material';
import { Settings, Apps, AccountCircle, Search, ArrowDropDown } from '@mui/icons-material';

function Header() {
  const [showSettings, setShowSettings] = useState(false);
  const [filter, setFilter] = useState('All');

  const handleShowSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <header className="flex items-center justify-between bg-white px-4 py-2 shadow">
      <div className="flex items-center">

        <FormControl variant="outlined">
          <OutlinedInput
            placeholder="Search mail"
            startAdornment={
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            }
            sx={{ width: 400, mr: 2 }}
          />
        </FormControl>

        <FormControl variant="outlined" sx={{ minWidth: 120 }}>
          <Select
            value={filter}
            onChange={handleFilterChange}
            startIcon={<ArrowDropDown />}
          >
            <MenuItem value="All">All Mail</MenuItem>
            <MenuItem value="Social">Social</MenuItem>
            <MenuItem value="Promotions">Promotions</MenuItem>
            <MenuItem value="Updates">Updates</MenuItem>
            <MenuItem value="Forums">Forums</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="flex items-center">
        <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
          <TextField size="small" label="From" variant="outlined" sx={{ mr: 2 }} />
          <TextField size="small" label="Subject" variant="outlined" sx={{ mr: 2 }} />
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg">Search</button>
        </Box>

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
          {/* Leave blank */}
        </div>
      </Drawer>
    </header>
  );
}

export default Header;
