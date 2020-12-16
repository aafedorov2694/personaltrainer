import React, {useEffect, useState} from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';


export default function Customer(){
   const[customer, setCustomer] = useState([]);

   useEffect(() => fetchData() ,[]);
   
   const fetchData = () => {
       fetch('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then(data => setCustomer(data.content))
   
    } 
    
    const columns = [
        {
            Header: 'Firstname', 
            accessor:'firstname'
        },
        {
            Header: 'Lastname', 
            accessor:'lastname'
        },
        {
            Header: 'Streetaddress', 
            accessor:'streetaddress'
        },
        {
            Header: 'Postcode', 
            accessor:'postcode'
        },
        {
            Header: 'City', 
            accessor:'city'
        },
        {
            Header: 'Email',
            accessor:'email'
        },
        {
            Header: 'Phone',
            accessor:'phone'
        }
        
    ]
    return (
        <div>

            <ReactTable filterable = {true} data = {customer} columns = {columns} />
        </div>
    )
}