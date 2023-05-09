import Header from './Header';
import Sidebar from './Sidebar';
import TabsComponent from './Tabs';

function Main() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <TabsComponent />
      </div>
    </div>
  );
}

export default Main;