import React from "react";

import DashboardSidebar from "./DashBoardSideBarLayout";
import NavBar from "./NavBar/index";

const DashBoardMain: React.FC = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpenSideBar = () => {
        setOpen(true);
    };
    const handleCloseSideBar = () => {
        setOpen(false);
    };
    return (
        <>
            <NavBar onOpenMobileNav={handleOpenSideBar} />
            <DashboardSidebar openMobile={open} onMobileClose={handleCloseSideBar} />
        </>
    );
};

export default DashBoardMain;
