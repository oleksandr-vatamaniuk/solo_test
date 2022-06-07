import React, { useRef, useState} from "react";
import './App.css';

import {TodoForm} from "./components/TodoForm";
import {CurrentStateBox} from "./components/CurrentStateBox";
import {FetchStateBox} from "./components/FetchStateBox";
import {BatchItem} from "./components/BatchItem";
import {Card} from "./components/UI/Card";

const STATE = {
    READY: 'Ready',
    PROCESSING: 'Processing',
    ERROR: 'Error'
}

const API_GET_TODOS = 'https://jsonplaceholder.typicode.com/todos/'

function App() {
    const [disabledTodoForm, setDisabledTodoForm] = useState(false);
    const [batchState, setBatchState] = useState(STATE.READY)
    const [currentRequestItemIndex, setCurrentRequestItemIndex] = useState(0)
    const [totalRequests, setTotalRequests] = useState(0);
    const [fetchTime, setFetchTime] = useState([]);
    const [todoBatch, setTodoBatch] = useState([]);
    const todosCache = useRef({})

    const createTodosQueue = (from, to) => {
        const todoQueue = [];

        for (let i = from; i <= to; i++){
            todoQueue.push(`${API_GET_TODOS}${i}`)
        }

        return todoQueue;
    }

    const getTodo = async (url) => {
        return getCachedTodo(url) || fetchTodo(url);
    }

    const getCachedTodo = (url) => todosCache.current[url];

    const cacheTodo = (ulr, data) => {
        todosCache.current[ulr] = data;
    }

    const fetchTodo = async (url) => {
        const result =  await fetch(url).then(data => data.json());
        cacheTodo(url, result);
        return result;
    }

    const getTodos = async (todoQueue) => {
        let todos = []
        for(let i = 0; i < todoQueue.length; i++){
            setCurrentRequestItemIndex(i+1);
            const todoItem = await getTodo(todoQueue[i])
            todos.push(todoItem);
        }
        return todos;
    }

    const fetchTodoRange = async (min, max) => {
        setBatchState(STATE.PROCESSING)
        setDisabledTodoForm(true)

        const todoQueue = createTodosQueue(min, max);
        setTotalRequests(todoQueue.length);

        const startTime = performance.now();
        const todos = await getTodos(todoQueue)
        const endTime = performance.now();


        setFetchTime((prevState) => {
            return [...prevState, {
                batchReq: `${min}-${max}`,
                fetchTime: endTime - startTime
            }]
        });

        setTodoBatch((prevState => {
            return [{
                todos,
                batchId: fetchTime.length + 1,
                range: {min, max}
            }, ...prevState];
        }))

        setBatchState(STATE.READY);
        setDisabledTodoForm(false)
    }

    const deleteBatchByIndex = (index) => {
        setTodoBatch((prevState => prevState.filter((item, i) => i !== index)));
    }

    return (
        <div className='wrapper'>
            <Card>
                <TodoForm disabled={disabledTodoForm} onFetchTodoRange={fetchTodoRange}/>
                {fetchTime.map(({batchReq, fetchTime,}, i) => <FetchStateBox key={batchReq + i} rangeName={batchReq} fetchTime={fetchTime}/>)}
            </Card>
            <Card>
                {todoBatch.map(({todos, batchId}, i) => <BatchItem key={batchId} batchItems={todos} batchOrder={batchId} index={i} onDeleteBatch={deleteBatchByIndex}/>)}
            </Card>
            <Card>
                <CurrentStateBox currentState={batchState} currentRequest={currentRequestItemIndex} totalRequests={totalRequests}/>
            </Card>
        </div>
    );
}

export default App;

