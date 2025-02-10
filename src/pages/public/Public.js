import React from "react";
import {Outlet} from "react-router-dom";
import { Footer, TopHeader } from "../../components";
const Public = () => {
    return (
        <div className = 'w-full max-h-screen overflow-y-auto flex flex-col items-center'>
            <TopHeader />
            <div className="w-full flex items-center flex-col">
                <Outlet />
            </div>
            <div className="w-full h-[200px]"></div>
            <Footer />
        </div>
    )
}

export default Public