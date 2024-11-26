import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

export const DahsboardPage: React.FC = () => {
    return(
        <Drawer sx={ styleDrawer } variant="persistent" anchor="left" open={true}>
            <List>
                {['Resumen', 'Productos', 'Envíos', 'Impuesto cerrado'].map((text) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}

const styleDrawer = {
    width: 240,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
      width: 240,
      boxSizing: 'border-box',
    },
  }