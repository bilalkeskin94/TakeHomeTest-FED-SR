import { useState } from 'react';
import { Tabs, Tab, InputBase, Select, MenuItem } from '@mui/material';
import { Search } from '@mui/icons-material';

function TabsComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="flex items-center justify-between bg-white px-4 py-2">
      <Tabs value={activeTab} onChange={handleTabChange} className="bg-white">
        <Tab label="Primary" className={activeTab === 0 ? "text-blue-500" : ""} />
        <Tab label="Social" className={activeTab === 1 ? "text-blue-500" : ""} />
        <Tab label="Promotions" className={activeTab === 2 ? "text-blue-500" : ""} />
      </Tabs>
    </div>
  );
}

export default TabsComponent;
