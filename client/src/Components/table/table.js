import React from 'react';
import PropTypes from 'prop-types';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { FlagIcon } from 'react-flag-kit';

const GetFlagIcon = (cntryCode) => {            //get corresponding flag pic
    const { code } = cntryCode;
    return (
        <FlagIcon code={code} size={48} />
    )
};

const CntryTable = (props) => {                 //mui table with api data
    const { countries } = props.data;           //pulling countries info from data

    let cntryRows = countries.map((obj, index) => ({ id: index, ...obj }))  //adding unique id to array for table

    const columns: GridColDef[] = [             //defining columns
        {
            field: 'code',
            headerName: 'Code',
            // width: 150,
            editable: false,
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 200,
            editable: false,
        },
        {
            field: 'capital',
            headerName: 'Capital',
            width: 200,
        },
        {
            field: 'currency',
            headerName: 'Currency',
            width: 200,
        },
        {
            field: 'native',
            headerName: 'Native',
            width: 200,
        },
        {
            field: 'continent.name',
            headerName: 'Continent',
            width: 200,
            renderCell: (cntryRows) =>
                (cntryRows.row.continent.name)
        },
        {
            field: 'flag',
            headerName: 'Flag',
            description: 'This column is not sortable or filterable.',
            sortable: false,
            filterable: false,
            // width: 160,
            renderCell: (cntryRows) =>
            (<GetFlagIcon
                code={cntryRows.row.code}
            />)
        },
    ];

    return (
        <div style={{ height: 500, width: '100%' }}>
            {!countries                         // only display table if there's country data
                ? null
                : <DataGrid
                    columns={columns}
                    rows={cntryRows}
                    getRowId={(cntryRows) => cntryRows.id}
                    rowsPerPageOptions={[10, 25, 50, 100]}
                    components={{ Toolbar: GridToolbar }} />}
        </div>
    );
};

export default CntryTable;

// const CntryTable = (props) => {                  old material table do not use
//     const { countries } = props.data;

//     const [page, setPage] = useState(0);
//     const [rowsPerPage, setRowsPerPage] = useState(10);

//     const emptyRows =
//         page > 0 ? Math.max(0, (1 + page) * rowsPerPage - countries.length) : 0;

//     const handleChangePage = (event, newPage) => {
//         setPage(newPage);
//     };

//     const handleChangeRowsPerPage = (event) => {
//         setRowsPerPage(parseInt(event.target.value, 10));
//         setPage(0);
//     };

//     const columns = [
//         { id: 'code', label: 'Code', minWidth: 170 },
//         { id: 'name', label: 'Name', minWidth: 100 },
//         { id: 'flag', label: 'Flag', minWidth: 170, },
//     ];


//     return (
//         <Paper sx={{ width: '100%', overflow: 'hidden' }}>
//             <TableContainer sx={{ maxHeight: '50%' }}>
//                 <Table stickyHeader aria-label="sticky table" sx={{ minWidth: 500 }}>
//                     <TableHead>
//                         <TableRow>
//                             {columns.map((column) => (
//                                 <TableCell
//                                     key={column.id}
//                                     align={column.align}
//                                     style={{
//                                         minWidth: column.minWidth,
//                                         backgroundColor: 'black',
//                                         color: 'white',
//                                     }}
//                                 >
//                                     {column.label}
//                                 </TableCell>
//                             ))}
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {countries
//                             .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                             .map((countries) => {
//                                 return (
//                                     <TableRow hover role="checkbox" tabIndex={-1} key={countries.code}>
//                                         {columns.map((column) => {
//                                             const value = countries[column.id];
//                                             return (
//                                                 <TableCell key={column.id} align={column.align}>
//                                                     {/* {column.format && typeof value === 'number'
//                                                         ? column.format(value)
//                                                         : value} */}
//                                                     {column.id === 'flag'
//                                                         ? <FlagIcon code={countries.code} size={48} />
//                                                         : value}
//                                                 </TableCell>
//                                             );
//                                         })}
//                                     </TableRow>
//                                 );
//                             })}
//                     </TableBody>
//                 </Table>
//                 <TableFooter>
//                     <TableRow>
//                         <TablePagination
//                             rowsPerPageOptions={[10, 25, 50, 100, { label: 'All', value: -1 }]}
//                             colSpan={3}
//                             count={countries.length}
//                             rowsPerPage={rowsPerPage}
//                             page={page}
//                             SelectProps={{
//                                 inputProps: {
//                                     'aria-label': 'rows per page',
//                                 },
//                                 native: true,
//                             }}
//                             onPageChange={handleChangePage}
//                             onRowsPerPageChange={handleChangeRowsPerPage}
//                             ActionsComponent={TablePaginationActions} />
//                     </TableRow>
//                 </TableFooter>
//             </TableContainer>
//         </Paper>
//     );
// }