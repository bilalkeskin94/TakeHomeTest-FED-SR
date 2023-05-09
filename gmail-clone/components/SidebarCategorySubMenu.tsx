import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { PeopleAlt, Update } from '@mui/icons-material';

type Props = {
  show: boolean;
  handleSubMenuClick: () => void;
};

function SidebarCategorySubMenu({ show, handleSubMenuClick }: Props): JSX.Element {
  if (!show) return null;
  
  return (
    <List>
      <ListItem button className="pl-10 py-3" onClick={handleSubMenuClick}>
        <ListItemIcon>
          <PeopleAlt />
        </ListItemIcon>
        <ListItemText primary="Social" />
      </ListItem>

      <ListItem button className="pl-10 py-3" onClick={handleSubMenuClick}>
        <ListItemIcon>
          <Update />
        </ListItemIcon>
        <ListItemText primary="Updates" />
      </ListItem>
    </List>
  );
}

export default SidebarCategorySubMenu;
