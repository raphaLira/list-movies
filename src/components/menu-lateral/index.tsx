import { Drawer, List, ListItemButton, ListItemText, useTheme } from "@mui/material"
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
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                            <ListItemButton component={Link} to="/movieList">
                                <ListItemText primary="List" />
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