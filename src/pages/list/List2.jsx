import React from 'react';
import Table from '../../components/table/Table';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import { Link } from 'react-router-dom';  

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <div className='datatable'>
      <div className="datatableTitle">
        Listado de gastos
        <Link to="/gastos/nuevo" style={{ textDecoration: "none" }} className="link">
          Agregar nuevo
        </Link>
      </div>
        <Table/>
      </div>
    </div>
    </div>
  )
}

export default List
