import React, {useState} from 'react';
import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatableSource";
import { Link } from 'react-router-dom';

const DataTable = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id));
  }

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className='cellAction'>
                      <Link to="/users/test" style={{ textDecoration: "none" }}>
                        <div className="viewButton">Ver</div>
                      </Link>
                        <div className="deleteButton" 
                        onClick={() => handleDelete(params.row.id)}>
                          Eliminar
                        </div>
                    </div>
                );
            },
        },
    ];

  return (
    <div className='datatable'>
      <div className="datatableTitle">
        Integrantes del viaje
        <Link to="/integrantes/nuevo" style={{ textDecoration: "none" }} className="link">
          Agregar nuevo
        </Link>
      </div>
         <DataGrid
         className='datagrid'
        rows={data}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable