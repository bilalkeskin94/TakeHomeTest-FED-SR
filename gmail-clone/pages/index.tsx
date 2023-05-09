import Head from 'next/head'
import { useState } from 'react'
import { IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material'
import { Menu, Settings, Apps, AccountCircle } from '@mui/icons-material'

export default function Home() {
  const [showSettings, setShowSettings] = useState(false)
  const [showExtendedSidebar, setShowExtendedSidebar] = useState(false)

  const handleShowSettings = () => {
    setShowSettings(!showSettings)
  }

  const handleShowExtendedSidebar = () => {
    setShowExtendedSidebar(!showExtendedSidebar)
  }

  return (
    <div>
      <Head>
        <title>My App</title>
        <meta name="description" content="My App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-gray-800 text-white flex justify-between items-center p-4">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Logo" className="h-8 mr-4" />
          <input type="text" className="w-64 bg-gray-700 text-white px-2 py-1 rounded-lg" placeholder="Search" />
          <select className="bg-gray-700 text-white ml-4 px-2 py-1 rounded-lg">
        <option value="filter1">Filter 1</option>
        <option value="filter2">Filter 2</option>
        <option value="filter3">Filter 3</option>
      </select>
    </div>

    <div className="flex items-center">
      <input type="text" className="w-32 bg-gray-700 text-white px-2 py-1 rounded-lg mr-4" placeholder="Text Input 1" />
      <input type="text" className="w-32 bg-gray-700 text-white px-2 py-1 rounded-lg mr-4" placeholder="Text Input 2" />
      <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg">Button</button>

      <IconButton onClick={handleShowSettings} className="ml-4">
        <Settings />
      </IconButton>

      <IconButton className="ml-4">
        <Apps />
      </IconButton>

      <IconButton className="ml-4">
        <AccountCircle />
      </IconButton>
    </div>
  </header>

  <Drawer open={showSettings} anchor="right" onClose={handleShowSettings}>
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Settings Panel</h2>
      {/* Leave blank */}
    </div>
  </Drawer>

  <div className="flex">
    <div className={`bg-gray-800 text-white h-screen ${showExtendedSidebar ? 'w-64' : 'w-16'} transition-all duration-300`}>
      <div className="flex items-center justify-center py-4">
        <IconButton onClick={handleShowExtendedSidebar}>
          <Menu />
        </IconButton>
      </div>

      <List>
        <ListItem button>
          <ListItemText primary="Mail" />
        </ListItem>

        <ListItem button>
          <ListItemText primary="Chat" />
        </ListItem>
      </List>

      {showExtendedSidebar && (
        <div>
          <List>
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Categories" />
            </ListItem>
          </List>

          <List>
            <ListItem button>
              <ListItemText primary="Social" />
            </ListItem>

            <ListItem button>
              <ListItemText primary="Updates" />
            </ListItem>
          </List>
        </div>
      )}
    </div>

    <div className="flex-1">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Main Panel</h2>

        <div className="border-b border-gray-300 mb-4">
          <div className="flex items-center">
            <h3 className="text-lg font-medium mr-4">Primary</h3>
            {/* Leave blank */}
          </div>
        </div>

        <div className="border-b border-gray-300 mb-4">
          <div className="flex items-center">
            <h3 className="text-lg font-medium mr-4">Promotions</h3>
            {/* Leave blank */}
          </div>
        </div>

        <div className="border-b border-gray-300 mb-4">
          <div className="flex items-center">
            <h3 className="text-lg font-medium mr-4">Social</h3>
            {/* Leave blank */}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
)
}
