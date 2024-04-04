import React from 'react';
import './App.css';
import "../src/styles/TagList.scss";
import PaginatedTagsList from "./PaginatedTagsList";
import {Typography} from "@mui/material";

function App() {
  return (
    <div className="App">
        <Typography variant={'h1'} fontSize={30}> StackOverflow Tags </Typography>
        <PaginatedTagsList/>
    </div>
  );
}

export default App;
