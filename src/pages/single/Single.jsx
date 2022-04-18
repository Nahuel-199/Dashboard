import React from 'react';
import "./single.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';
import Chart from '../../components/chart/Chart';
import List from '../../components/table/Table';

const Single = () => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src="https://firebasestorage.googleapis.com/v0/b/react-eccomerce-979a7.appspot.com/o/Categorias%2FTodos.jpg?alt=media&token=e4bfdef1-d7b0-4162-a266-2f26aa9a4d07" 
              alt="" 
              className="itemImg" 
              />
             <div className="details">
               <h1 className="itemTitle">Goku San</h1>
               <div className="detailItem">
                 <span className="itemKey">Email:</span>
                 <span className="itemValue">Goku@gmail.com</span>
               </div>
               <div className="detailItem">
                 <span className="itemKey">Phone:</span>
                 <span className="itemValue">+54 112546-6982</span>
               </div>
               <div className="detailItem">
                 <span className="itemKey">Address:</span>
                 <span className="itemValue">Av Siempre Viva 123</span>
               </div>
               <div className="detailItem">
                 <span className="itemKey">Country:</span>
                 <span className="itemValue">USA</span>
               </div>
             </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  )
}

export default Single