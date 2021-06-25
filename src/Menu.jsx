import React from 'react';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import CreateOutlinedIcon from '@material-ui/icons/CreateOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import './Menu.css'

const Menu = () => {
    const menustyle ={
        height:"26px",
        width :"26px",
    }
    return (
        <>
            <div className="menu-left">
                <div className="menu-list">
                    <EmojiObjectsOutlinedIcon style={menustyle} />
                    <p>Notes</p>
                </div>
                <div className="menu-list">
                    <NotificationsNoneOutlinedIcon style={menustyle}/>
                    <p>Reminders</p>
                </div>
                <div className="menu-list">
                    <CreateOutlinedIcon style={menustyle}/>
                    <p>Edit labels</p>
                </div>
                <div className="menu-list">
                    <ArchiveOutlinedIcon style={menustyle}/>
                    <p>Archive</p>
                </div>
                <div className="menu-list">
                    <DeleteOutlineOutlinedIcon style={menustyle}/>
                    <p>Bin</p>
                </div>
            </div>
        </>
    );
}

export default Menu;