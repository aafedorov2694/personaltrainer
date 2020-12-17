import React, {useEffect, useState} from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import Moment from 'moment';
import AddTraining from './AddTraining';

export default function Trainings(){
    const[training, setTraining] = useState([]);
    useEffect(() => fetchData() ,[]);

    const deleteTraining = (link) =>{
        fetch(link, {method: 'DELETE'})
        .then(res => fetchData())
        .catch(err => console.error(err))
    }
    
    const fetchData = () => {
        fetch('https://customerrest.herokuapp.com/api/trainings')
         .then(response => response.json())
         .then(data => setTraining(data.content))
         
    }
         const columns = [
            {
                Header: 'date', 
                accessor:'date'
            },
            {
                Header: 'duration', 
                accessor:'duration'
            },
            {
                Header: 'activity', 
                accessor:'activity'
            },   
            {
                sortable: false,
                filterable: false,
                width: 100,
                accessor:'links[0].href',
                Cell: row => <button onClick={() => deleteTraining(row.value)}>Delete</button>
            }
    
        ]  
     return (
         <div>
             <AddTraining />
            <ReactTable filterable = {true} data = {training} columns = {columns} />

         </div>
     )
 }
