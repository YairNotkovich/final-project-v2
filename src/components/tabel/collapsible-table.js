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



const Row = ({ data, columns, children }) => {
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                {columns.map((column) => <TableCell align="right">{data[column]}</TableCell>)}
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
const a = 'a'
const b = 'b'
const c = 'c'
CollapsibleTable.defaultProps = {

    columns: [a, b, c],
    rows: [{
        data: { a: 'a', b: 'b', c: 'c' },
        children: <div>fgdfg</div>
    },
    {
        data: { a: 'a', b: 'b', c: 'c' },
        children: <div>fgdfg</div>
    },
    {
        data: { a: 'a', b: 'b', c: 'c' },
        children: <div>fgdfg</div>
    }
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
                    {rows.map((row) => {
                        let data = row.data;
                        let children = row.children;
                        return Row({ data, columns, children })
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
