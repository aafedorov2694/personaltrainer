import React, {useEffect, useState} from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import AddCustomer from './AddCustomer';
import EditCustomer from './EditCustomer';

export default function Customer(){
   const[customer, setCustomer] = useState([]);
   const deleteCustomer = (link) => {
        
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
   } 
   const saveCustomer = (customer) => {
       fetch('https://customerrest.herokuapp.com/api/customers', {
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
       body: JSON.stringify(customer)
       })
       .then(res => fetchData())
       .catch(err => console.error(err))

   }

   const editCustomer = (customer, link) => {
       fetch(link, {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
       body: JSON.stringify(customer)
       })
       .then(res => fetchData())
       .catch(err => console.error(err))
       
   }

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
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <EditCustomer editCustomer = {editCustomer} customer={row.original} />
        },
        {
            sortable: false,
            filterable: false,
            width: 100,
            accessor:'links[0].href',
            Cell: row => <button onClick={() => deleteCustomer(row.value)}>Delete</button>
        }

        
        
        
    ]
    return (
        <div>
            <AddCustomer saveCustomer={saveCustomer}/>
            <ReactTable filterable = {true} data = {customer} columns = {columns} />
        </div>
    )
}