import React from 'react';
import "./table.scss";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const List = () => {
    const rows = [
        {
          id: "Comida",
          product: "2/7/22",
          // img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "3",
          date: "$2000",
          amount: 6000,
          method: "3",
          status: "Aprobada",
          lugar: "Mc Donalds",
        },
        {
          id: "Cine",
          product: "6/7/22",
          // img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "3",
          date: "$2000",
          amount: 6000,
          method: "3",
          status: "Aprobada",
          lugar: "Hoyts",
        },
        {
          id: "Deporte",
          product: "7/7/22",
          // img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "2",
          date: "$2000",
          amount: 4000,
          method: "2",
          status: "Pendiente",
          lugar: "Solo Deportes",
        },
        {
          id: "Ropa",
          product: "7/7/22",
          // img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "3",
          date: "$2000",
          amount: 6000,
          method: "6",
          status: "Pendiente",
          lugar: "Shopping",
        },
        {
          id: "Cine",
          product: "8/7/22",
          // img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
          customer: "2",
          date: "$500",
          amount: 1000,
          method: "1",
          status: "Aprobada",
          lugar: "Hoyts",
        },
      ];


  return (
         <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell">Tipo</TableCell>
            <TableCell className="tableCell">Fecha</TableCell>
            <TableCell className="tableCell">Cantidad</TableCell>
            <TableCell className="tableCell">Precio</TableCell>
            <TableCell className="tableCell">Total</TableCell>
            <TableCell className="tableCell">Cuotas</TableCell>
            <TableCell className="tableCell">Tarjeta</TableCell>
            <TableCell className="tableCell">Lugar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className='tableCell'> {row.id} </TableCell>
              <TableCell className="tableCell">
                  <div className="cellWrapper">
                      <img src={row.img} alt="" className="image" />
                      {row.product}
                  </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                  <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">{row.lugar}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default List