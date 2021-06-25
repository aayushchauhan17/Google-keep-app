import React from 'react';
import './context.css';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import IconButton from '@material-ui/core/IconButton';



const Box = (promp) => {
    return (
        <>
            <div className="content-3">
                <div className="content-3-data">
                    <p style={{ fontWeight: '100', fontSize:"25px", width:"29vh"}}>{promp.tytll}</p>
                    <h3 style={{ fontWeight: '100', fontSize:"22px", width:"29vh"}}>{promp.txtt}</h3>
                </div>
                <div className="content-3-icon">
                    <IconButton >
                        <ArchiveOutlinedIcon />
                    </IconButton >
                    <IconButton >
                        <NotificationsNoneOutlinedIcon />
                    </IconButton>
                    <IconButton onClick={()=>{return promp.onselect(promp.id);}} >
                        <DeleteOutlineOutlinedIcon  />
                    </IconButton>
                </div>
            </div>
        </>
    );
}

export default Box;