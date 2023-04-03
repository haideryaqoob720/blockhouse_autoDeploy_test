import { useState } from "react";
import {
    Drawer,
    List,
    ListItem,
    ListItemText,
    Box,
    IconButton,
    Divider,
    Toolbar,
    makeStyles
} from "@material-ui/core";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

import logo from "../../Images/landingPage/landing-page/BLOCKHOUSE.png";

const useStyles = makeStyles(() => ({
    link: { textDecoration: "none", color: "#659BEB", fontSize: "16px", fontWeight: 'bold' },
    icon: { color: "white" },
    logo: { flexGrow: "1", cursor: "pointer" },
    draw: { background: "red" },
}));

function DrawerComponent() {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <>
            <Drawer
                anchor="top"
                sx={{ width: 250, color: "red" }}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
            >
                <Toolbar style={{ backgroundColor: "#1F2021", borderBottom: '1px solid grey' }}>
                    <Link href="/" underline="none">
                        <Box sx={{ width: "240px", height: "40px" }}>
                            <img
                                style={{ width: "100%", height: "100%", marginTop: '10px' }}
                                src={logo}
                                alt="logo"
                            />
                        </Box>
                    </Link>
                    <CloseIcon style={{ color: 'white', position: 'absolute', right: '20px' }}
                        onClick={() => setOpenDrawer(false)}
                    />
                </Toolbar>
                <box height="100vh" style={{ backgroundColor: "#1F2021" }}>
                    <List height="100vh">
                        <Divider />
                        <ListItem onClick={() => setOpenDrawer(false)}>
                            <ListItemText>
                                <Link to="/BorrowPage" className={classes.link}>
                                    For Dealers
                                </Link>
                            </ListItemText>
                        </ListItem>
                        <Divider />
                        <ListItem>
                            <ListItemText>
                                <Link to="https://aadityak.substack.com/" className={classes.link}
                                    target={"_blank"}
                                >
                                    Resources
                                </Link>
                            </ListItemText>
                        </ListItem>
                        {/* <Divider />
                        <ListItem>
                            <ListItemText>
                                <Link to="/" className={classes.link}>
                                    <DarkModeOutlinedIcon
                                        sx={{ color: "#659BEB", height: "40px", width: "40px", marginBottom: '-20px' }}
                                    />
                                </Link>
                            </ListItemText>
                        </ListItem> */}
                        <Divider />
                        <ListItem>
                            <ListItemText>
                                <Link to="/ComingSoon" className={classes.link}>
                                    Launch Exchange
                                </Link>
                            </ListItemText>
                        </ListItem>
                        <Divider />
                    </List>
                </box>
            </Drawer>
            <IconButton
                className={classes.icon}
                onClick={() => setOpenDrawer(!openDrawer)}
            >
                <MenuIcon />
            </IconButton>
        </>
    );
}

export default DrawerComponent;
