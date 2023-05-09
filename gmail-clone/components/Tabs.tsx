import { useState } from 'react';
import { Tabs, Tab, InputBase, Select, MenuItem } from '@mui/material';
import { Search } from '@mui/icons-material';

function TabsComponent(): JSX.Element {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <div className="flex items-center justify-between bg-white px-4 py-2">
      <Tabs value={activeTab} onChange={handleTabChange} className="bg-white">
        <Tab label="Primary" className={activeTab === 0 ? "text-blue-500" : ""} />
        <Tab label="Social" className={activeTab === 1 ? "text-blue-500" : ""} />
        <Tab label="Promotions" className={activeTab === 2 ? "text-blue-500" : ""} />
      </Tabs>

      <div className="flex items-center">
        <Select value="All" className="bg-white" variant="outlined" input={<InputBase />} >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="Primary">Primary</MenuItem>
          <MenuItem value="Social">Social</MenuItem>
          <MenuItem value="Promotions">Promotions</MenuItem>
        </Select>
      </div>
    </div>
  );
}

export default TabsComponent;
