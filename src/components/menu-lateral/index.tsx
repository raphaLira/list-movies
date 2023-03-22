import { Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material"
import { Box } from "@mui/system"
import React from "react";
import { Link } from "react-router-dom";
export const MenuLateral: React.FC = ({ children }) => {
    const theme = useTheme();
    return (
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(25)} height="100%" display="flex" flexDirection="column">
                    <Box flex={1}>
                        <List component="nav">
                            <ListItemButton component={Link} to="/dashBoard">
                                <ListItemIcon>
                                    <Icon>home</Icon>
                                </ListItemIcon>
                                <ListItemText primary="DashBoard" />
                            </ListItemButton>
                            <ListItemButton component={Link} to="/movieList">
                                <ListItemIcon>
                                    <Icon>movie</Icon>
                                </ListItemIcon>
                                <ListItemText primary="List Movies" />
                            </ListItemButton>
                        </List>
                    </Box>
                </Box>
            </Drawer>
            <Box height="100vh" marginLeft={theme.spacing(25)}>
                {children}
            </Box>

        </>

    )
}