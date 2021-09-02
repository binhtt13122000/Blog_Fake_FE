import SideBar from "../components/SideBar/index";
import { Avatar, Box, Divider, List, Typography } from "@material-ui/core";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DashboardIcon from "@material-ui/icons/Dashboard";
import EditIcon from "@material-ui/icons/Edit";
import PeopleIcon from "@material-ui/icons/People";
import RssFeedIcon from "@material-ui/icons/RssFeed";

import NavItem from "./NavItem";

const user = {
    avatar: "/static/images/avatars/avatar_6.png",
    jobTitle: "Admin",
    name: "Katarina Smith",
};

const items = [
    {
        href: "/app/dashboard",
        title: "Blog Dashboard",
        icon: EditIcon,
    },
    {
        href: "/app/customers",
        title: "Blog Posts",
        icon: DashboardIcon,
    },
    {
        href: "/app/products",
        title: "Add New Post",
        icon: AddCircleOutlineIcon,
    },
    {
        href: "/app/account",
        title: "Accounts",
        icon: PeopleIcon,
    },
    {
        href: "/app/settings",
        title: "Posts",
        icon: RssFeedIcon,
    },
    {
        href: "/login",
        title: "User Profile",
        icon: AccountBoxIcon,
    },
];

type DashboardSidebarType = {
    onMobileClose: () => void;
    openMobile: boolean;
};

const DashboardSidebar: React.FC<DashboardSidebarType> = ({ onMobileClose, openMobile }) => {
    // const location = useLocation();

    // useEffect(() => {
    //     if (openMobile && onMobileClose) {
    //         onMobileClose();
    //     }
    // }, [location.pathname]);

    const content = (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
            }}
        >
            <Box
                sx={{
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                }}
            >
                <Avatar
                    src={user.avatar}
                    style={{
                        width: 64,
                        height: 64,
                    }}
                />
                <Typography color="textPrimary" variant="h5">
                    {user.name}
                </Typography>
                <Typography color="textSecondary" variant="body2">
                    {user.jobTitle}
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
                <List>
                    {items.map((item) => (
                        <NavItem key={item.title} title={item.title} icon={item.icon} />
                    ))}
                </List>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
        </Box>
    );

    return (
        <SideBar open={openMobile} onCloseSideBar={onMobileClose}>
            {content}
        </SideBar>
    );
};

export default DashboardSidebar;
