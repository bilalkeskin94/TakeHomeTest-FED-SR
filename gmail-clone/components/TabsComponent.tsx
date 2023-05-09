import { useState } from 'react';
import { Tabs, Tab, InputBase, Select, MenuItem } from '@mui/material';
import { Search } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import GroupIcon from '@mui/icons-material/Group';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TabsComponent(): JSX.Element {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  const handleShowNotification = () => {
    toast.success('This is a success notification!', {
      position: 'bottom-right',
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="flex items-center justify-between bg-white px-4 py-2">
      <Tabs value={activeTab} onChange={handleTabChange} className="bg-white">
        <Tab label="Primary" icon={<MailIcon />} className={activeTab === 0 ? "text-blue-500" : ""} />
        <Tab label="Social" icon={<GroupIcon />} className={activeTab === 1 ? "text-blue-500" : ""} />
        <Tab label="Promotions" icon={<LocalOfferIcon />} className={activeTab === 2 ? "text-blue-500" : ""} />
      </Tabs>
      <button onClick={handleShowNotification}>Show Notification</button>
      <ToastContainer />
    </div>
  );
}

export default TabsComponent;
