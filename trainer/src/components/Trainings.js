import React, {useEffect, useState} from 'react';
import ReactTable from 'react-table-6';
import 'react-table-6/react-table.css';
import Moment from 'moment'

export default function Trainings(){
    const[training, setTraining] = useState([]);
    useEffect(() => fetchData() ,[]);
    
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
            }
    
        ]  
     return (
         <div>
                         <ReactTable filterable = {true} data = {training} columns = {columns} />

         </div>
     )
 }
