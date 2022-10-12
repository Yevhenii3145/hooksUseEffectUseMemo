import {useReducer, useState} from "react";

// Более продвинутая работа со стейтом с помощью юзРедюсер
function countReducer(state,action) {
    switch(action.type) {
        case "increment":
            return {...state, count: state.count + action.payload}
        case "decrement":
            return {...state, count: state.count - action.payload}
        default:
            throw new Error(`Unsuported action type ${action.type}`)
    }
}

// function init(param) {
//     return param + 5;
// }
function init(initialState) {
    return {
        ...initialState,
        count: initialState.count + 100,
    }
}

export default function Counter() {
    // const [count, setCount] = useState(0);

    const [state, dispatch] = useReducer(countReducer, {
        count: 0,
    },
    init,)
// Если надо начайльное значение стейт сделать как результат вычисления  передаем инит
// В функцию инит  0 идет как аргумент  и инит возвращает начальное значение
    // const [state,dispatch] = useReducer(reducer,0,init)

    return (
        <div>
            <p>{state.count}</p>
            <button
            type='button'
            onClick={() => dispatch({type: "increment", payload: 1})}
            >
                Увеличить
            </button>
            <button
            type="button"
            onClick={() => dispatch({type: "decrement", payload: 1})}
            >
                Уменьшить
            </button>
        </div>
    )
}