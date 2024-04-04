import React from 'react';
import {Pagination, Stack} from "@mui/material";

type PropType = {
    totalPages: number;
    page: number;
    callback: (event: React.ChangeEvent<unknown>, value: number) => void;
}

function PaginationPanel({totalPages, page, callback} : PropType) {
    return (
        <div className="pagination-wrapper">
            <Stack spacing={2}>
                <Pagination count={totalPages} page={page} onChange={callback}
                            variant="outlined" color="primary"/>
            </Stack>
        </div>
    );
}

export default PaginationPanel;