import React from 'react';
import "./featured.scss";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import 'react-circular-progressbar/dist/styles.css';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className='title'>CONTADOR DE DIAS</h1>
            <MoreVertIcon fontSize="small" />
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text={"10"} strokeWidth={5} />
            </div>
            <p className="title">Dias</p>
            <p className="amount">15</p>
            <p className="desc">
                Dias dura este viaje.
            </p>
        </div>
    </div>
  )
}

export default Featured