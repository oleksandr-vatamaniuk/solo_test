import {useState} from "react";
import './TodoForm.css'

const REGEX_TODO_INPUT = /^\d+-\d+$/;

export const TodoForm = ({disabled = false, onFetchTodoRange = () => {}}) => {
    const [range, setRange] = useState('');
    const [isValid, setIsValidRange] = useState(false)

    const getValuesFromRange = (range) => {
        return range.split('-');
    }

    const isInputValid = (range = '') => {
        const isMatched = REGEX_TODO_INPUT.test(range)
        setIsValidRange(isMatched);
    }

    const changeTodoInputHandler = (event) => {
        const value = event.target.value

        setRange(value);
        isInputValid(value)
    }

    const onTodoSubmitHandler = (e) => {
        e.preventDefault();
        if (!isValid) return;

        const [min, max] = getValuesFromRange(range);

        onFetchTodoRange(min, max);

        setRange('');
    }

    return (
        <form onSubmit={onTodoSubmitHandler}>
            <div className='form-group'>
                <div className='form-control'>
                    <label>Range of Todos to fetch</label>
                    <input
                        value={range}
                        type="text"
                        onChange={changeTodoInputHandler}
                        placeholder='e.g 1-5...'
                    />
                    { (!isValid && range.length !== 0) && <p style={{color: 'red'}}>Invalid range</p>}
                </div>
                <div>
                    <button className='btn' type="submit" disabled={disabled}>Fetch</button>
                </div>
            </div>
        </form>
    )
}
