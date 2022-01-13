import * as React from 'react';
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
import {parseValueByType} from "../data/utils"
import { Chip } from '@mui/material';

function Row(props) {
    const { row , headers,subHeaders , subRowTitle , subRowKey} = props;
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <Chip label="ממתין לתשלום" />
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                {headers.map(h => (<TableCell align='center' component={"th"} key={`${row.id}_${h.field}`}>{parseValueByType(row[h.field],h.type)}</TableCell>))}
            </TableRow>
            <TableRow>
                <TableCell align='center' style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={subHeaders.length}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div" sx={{'display':"flex",'justifySelf':'start'}}>
                                {subRowTitle}
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        {subHeaders.map(sh => (<TableCell align='center' component={"th"} key={`${row.id}_${sh.field}`}>{sh.label}</TableCell>))}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row[subRowKey].map((subRow) => (
                                        <TableRow key={subRow.id}>
                                            {subHeaders.map(sh=>(
                                                <TableCell align='center' key={`${subRow.id}_${sh.field}`} component="td" scope="row">
                                                    {parseValueByType(subRow[sh.field] , sh.type)}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </>
    );
}

export default function CollapsibleTable({data , headers,subHeaders ,subRowKey="subItems", subRowTitle="פירוט"}={}) {
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align='center' />
                        {headers.map(h => (
                            <TableCell component="th" align='center' style={{ fontWeight: '600' }} key={h.field}>{h.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <Row key={row.id} row={row} headers={headers} subHeaders={subHeaders} subRowTitle={subRowTitle} subRowKey={subRowKey} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}