import React, {useState, useEffect} from 'react';
import ResponsiveDrawer from './ResponsiveDrawer';
import { Card } from './Card';
import axios from "axios";
import CardList from './CardList';

export const TodoApp = () => {

    const [items, setitems] = useState([])

    useEffect(() => {
        axios.get("https://tasksplannerieti.azurewebsites.net/api/add-task?code=Z5H7UO0RF4i2EHP5mv7WZX/a4XSRXnpbwwWmyua1yOwJY4xv8S5NPQ==")
            .then(response => {
                let result = response.data;
                setitems(result.response);
            }).catch(error => {
                alert("An error occurred while trying to connect to the database.");
            });
    }, [])

    const handleNewTask = (newItem) => {
        axios.post("https://tasksplannerieti.azurewebsites.net/api/add-task?code=Z5H7UO0RF4i2EHP5mv7WZX/a4XSRXnpbwwWmyua1yOwJY4xv8S5NPQ==", newItem)
            .then(response => {
                const newItems = [...items, newItem];
                setitems(newItems);
            }).catch(error => {
                alert("An error occurred while trying to connect to the database.");
            });
    }

    return (
        <div>
            <ResponsiveDrawer></ResponsiveDrawer>
            <CardList items={items} ></CardList>
            <br></br>
            <br></br>
            <div style={{textAlign:"right"}}>
            <Card handleNewTask={handleNewTask}></Card>
            </div>
        </div>
    )
}
export default TodoApp;


