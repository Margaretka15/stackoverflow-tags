import React from 'react';
import {ITag} from "../interfaces/ITag";

import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

type PropType = {
    tags: ITag[];
}

const TagList = ({tags}: PropType) => {
    return (
        <div className="table-wrapper">
            <TableContainer component={Paper}>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Tag name</TableCell>
                            <TableCell align="right">Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tags.map((tag) => (
                            <TableRow
                                key={tag.name}
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell component="th" scope="row">
                                    {tag.name}
                                </TableCell>
                                <TableCell align="right">{tag.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>

            </TableContainer>

        </div>

    );
}

export default TagList;