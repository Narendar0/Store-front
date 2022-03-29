import React, { useState } from 'react'
import {AppBar, Toolbar, Typography, Tab ,Tabs} from '@mui/material'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom'
const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:"#232F3D"}} position='sticky'> 
        <Toolbar>
            <NavLink to="/" style={{color: "white"}}>
            <Typography>
            <LibraryBooksIcon/>
        </Typography>
            </NavLink>
        
        <Tabs
        sx={{ml:'auto'}}
         textColor="inherit" 
        indicatorColor="secondary"
         value={value}
          onChange={(e,val)=>setValue(val)}> 

            <Tab LinkComponent={NavLink} to='/add' label="Add Product"/>
            <Tab LinkComponent={NavLink} to='/books'label="Books"/>
            <Tab LinkComponent={NavLink} to='/about'label="About Us"/>

        </Tabs>
        </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header