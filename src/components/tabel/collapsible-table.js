import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



const Row = ({key, data, columns, children }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <TableRow  key={key} sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                {columns.map((column,index) => <TableCell key={index} align="right">{data[column]}</TableCell>)}
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            {children}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    )
}

// filler data for empty generation
const coll1 = 'coll1'
const coll2 = 'coll2'
const coll3 = 'coll3'
CollapsibleTable.defaultProps = {

    columns: [coll1, coll2, coll3],
    rows: [{
        data: { coll1: 'a', coll2: 'b', coll3: 'c' },
        children: <div>fgdfg</div>
    },
  
        ,]
}


export default function CollapsibleTable(props) {
    const { rows, columns } = props
    return (
        <TableContainer component={Paper} >
            <Table aria-label="collapsible table">
                <TableHead>

                    <TableRow>
                        <TableCell>

                        </TableCell>
                        {columns.map((column) => <TableCell >{column}</TableCell>)}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row,index) => {
                        let data = row.data;
                        let children = row.children;
                        return Row({ key:{index},data, columns, children })
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
