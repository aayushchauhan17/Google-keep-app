import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import RefreshIcon from '@material-ui/icons/Refresh';
import ViewStreamOutlinedIcon from '@material-ui/icons/ViewStreamOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import SearchIcon from '@material-ui/icons/Search';
import './Nav.css';
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';


const Nav = () => {
    return (
        <>
            <div className="nav-bar">
                <div className="nav-left">
                    <IconButton>
                        <Tooltip title="Menu">
                            <MenuIcon classname="menuicon" />
                        </Tooltip>
                    </IconButton>
                    <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="" />
                    <h1>Keep</h1>
                </div>
                <div className="nav-btw">
                    <IconButton>
                        <Tooltip title="Search">
                            <SearchIcon />
                        </Tooltip>
                    </IconButton>
                    <input type="text" placeholder="Search" />
                    <IconButton>
                        <Tooltip title="Clear">
                            <ClearOutlinedIcon />
                        </Tooltip>
                    </IconButton>
                </div>
                <div className="nav-right">
                    <IconButton>
                        <Tooltip title="Refresh">
                            <RefreshIcon style={{ width: "27px", height: "27px" }} />
                        </Tooltip>
                    </IconButton>
                    <IconButton>
                        <Tooltip title="List">
                            <ViewStreamOutlinedIcon style={{ width: "27px", height: "27px" }} />
                        </Tooltip>
                    </IconButton>
                    <IconButton>
                        <Tooltip title="Setting">
                            <SettingsOutlinedIcon style={{ width: "27px", height: "27px" }} />
                        </Tooltip>
                    </IconButton>
                </div>
            </div>
        </>
    );
};

export default Nav;