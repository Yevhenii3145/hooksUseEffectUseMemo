import {useState, useMemo} from "react";

const  initialFriends = [
    "Kolby Thompson",
    "Jean Santiago",
    "Ireland Bautista",
    "Thaddeus Campos",
    "Drew Nixon",
    "Van Garrett",
    "Brycen Montoya",
    "Maurice Cordova",
    "Joseph Harris",
    "Kadyn Robinson",
    "Shayna Olson",
    "Hector Cole",
    "Chandler Heath",
    "Eileen Whitake",
    "Rene Preston",
    "Terrence Lee",
    "Angel Powell",
    "Haiden Pollard",
    "Nina Gentry",
    "Keyla Rich",
    "Darren Ali",
    "Angeline Snow",
    "Jazmyn Henry",
    "Amiyah Donaldson",
    "Craig Lutz",
    "Heath Hobbs",
    "Marley Castillo",
    "Milton Mata",
];

export default function Friends() {
    const [count, setCount] = useState(0);
    const [friends] = useState(initialFriends);
    const [filter,setFilter] = useState('');

    // Операция фильтрации будет запускаться только при изменении фильтра или друзей
    // При изменении каунт фильтрация не запускается- юзМемо похож на юзЭффект
    // Только юзЭффект это запись значений, а юзМемо наоборот получение значений
    // ЮзМемо используют для синхронных операций
    // Для того чтобы не повторять тяжелые операции на каждом рендере
    // Используется в работе с большими коллекциями
    const visibleFriends = useMemo(() => {
        console.log("Фильтруем друзей" + Date.now());
        return friends.filter(friened => 
            friends.toLowerCase().includes(filter))
    }, [filter, friends])

    // const visibleFriends = (() => {
    //     console.log("Фильтруем друзей" + Date.now());
    //     return friends.filter(friened => 
    //         friends.toLowerCase().includes(filter))
    // })();

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>{count}</button>
            <hr/>
            <input onChange={e =>setFilter(e.target.value)} value={filter} />
            <ul>
                {visibleFriends.map((friend,idx) => (
                    <li key={idx}>{friend}</li>
                ))}
            </ul>
        </div>
    )
}