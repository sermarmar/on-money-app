import styled from "@emotion/styled";
import { Drawer, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { Outlet, useNavigate } from "react-router";
import { DASHBOARD_PAGE, MAILING_PAGE, PRODUCTS_PAGE, TRADING_PAGE } from "../../providers/routers/routers";

export const DahsboardPage: React.FC = () => {
    const navigate = useNavigate();
    const listRoutes = [DASHBOARD_PAGE, PRODUCTS_PAGE, MAILING_PAGE, TRADING_PAGE];
    
    const handleNavigate = (url: string) => {
        navigate(url);
    }

    return(
        <>
            <Drawer sx={ styleDrawer } variant="persistent" anchor="left" open={true}>
                <List>
                    {listRoutes.map((route) => (
                        <ListItem key={ route.name } disablePadding>
                            <ListItemButton onClick={() => handleNavigate(route.url) }>
                                <ListItemText primary={ route.name } />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Main>
                <Outlet />
            </Main>
        </>
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

const Main = styled.main`
    flex-grow: 1;
    padding-inline: 25px;
    margin-left: 240px;
`