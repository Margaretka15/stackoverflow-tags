import React, {useEffect, useState} from 'react';
import {ITag} from "../interfaces/ITag";
import {getAllTags} from "../services/DataService";
import {MenuItem, Select, TextField} from "@mui/material";
import TagList from "./TagList";
import {sortData} from '../utils/ManageData';

import Loader from "./Loader";
import PaginationPanel from "./PaginationPanel";

type TLoadingState = {
    isLoading: boolean;
    isError: boolean
}
type TPaginationState = {
    page: number;
    countPerPage: number;
    totalPages: number;
}

export default function PaginatedTagsList() {

    const [tags, setTags] = useState<ITag[]>();

    const [loadingState, setLoadingState] = useState<TLoadingState>({
        isLoading: true,
        isError: false
    });

    const [paginationState, setPaginationState] = useState<TPaginationState>({
        page: 1,
        countPerPage: 10,
        totalPages: 1
    })

    useEffect(() => {
        const fetchData = async () => {
            setLoadingState({...loadingState, isLoading: true})
            try {
                const response = await getAllTags();
                const data = await response?.json();
                setTags(data.items);
                setPaginationState({
                    ...paginationState,
                    totalPages: Math.ceil(data.items.length / paginationState.countPerPage)
                });


            } catch (error) {
                console.error('Błąd pobierania danych:', error);
                setLoadingState({...loadingState, isError: true});
            }
        };
        fetchData().then(() => {
            setLoadingState({...loadingState, isLoading: false})
        });

    }, []);

    useEffect(() => {
        if (tags !== undefined) {
            setPaginationState({
                ...paginationState,
                totalPages: Math.ceil(tags.length / paginationState.countPerPage),
                page: 1
            });
        }
    }, [paginationState.countPerPage])


    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPaginationState({
            ...paginationState,
            page: value
        });
    }

    const handleCountPerPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = parseInt(e.target.value.replace(/\D/g, ""));
        if (Number.isNaN(value))
            value = 1;
        setPaginationState({
            ...paginationState,
            countPerPage: value < 1 ? 1 : value,
            page: 1
        })
    }

    const [sortOption, setSortOption] = useState('mostPopular');

    const start = (paginationState.page - 1) * paginationState.countPerPage;

    const end = (paginationState.page - 1) * paginationState.countPerPage + paginationState.countPerPage;

    const sortedTags = sortData(tags, sortOption);

    const handleSortChange = (e: any) => {
        setSortOption(e.target.value);
        setPaginationState({
            ...paginationState,
            page:  1
        });
    };


    let content;
    if (loadingState.isLoading) {
        content = <Loader/>
    }
    else if (!loadingState.isError) {
       content =  <TagList tags={sortedTags.slice(start, end)}/>
    }
    else {
        content = <div>An unexpected error occured.</div>
    }
    return (
        <div className="list-section">
            <div className="sort-options-container">
                <div>
                    <label htmlFor="sortOption">Sort by:</label>
                    <Select id="sortOption" value={sortOption} onChange={handleSortChange}>
                        <MenuItem value="mostPopular">Most popular</MenuItem>
                        <MenuItem value="leastPopular">Least Popular</MenuItem>
                        <MenuItem value="alphabetical">Alphabetical</MenuItem>
                    </Select>
                </div>

                <TextField type="number" label="Rows per page" value={paginationState.countPerPage}
                           onChange={handleCountPerPageChange}/>

            </div>

            {content}

            <PaginationPanel totalPages={paginationState.totalPages} page={paginationState.page} callback={handleChange} />


        </div>
    );
}
