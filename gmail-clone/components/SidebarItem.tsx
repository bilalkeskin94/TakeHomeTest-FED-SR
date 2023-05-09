import { ListItem, ListItemIcon, ListItemText } from '@mui/material';

interface SidebarItemProps {
  icon: JSX.Element;
  text: string;
  onClick?: () => void;
  expandIcon?: JSX.Element;
}

function SidebarItem({ icon, text, onClick, expandIcon }: SidebarItemProps): JSX.Element {
  return (
    <ListItem button className="py-3" onClick={onClick}>
      <ListItemIcon>
        {icon}
      </ListItemIcon>
      <ListItemText primary={text} />
      {expandIcon}
    </ListItem>
  );
}

export default SidebarItem;
