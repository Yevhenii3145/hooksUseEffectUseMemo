import {useState,useEffect,useRef} from "react";

export default function SkipEffectOnFirstRender() {
    const [count,setCount] = useState(0);
    const isFirstRender = useRef(true);

    // const [query] = useState("")

    // Пропуск первого рендера
    useEffect(() => {
        if(isFirstRender.current) {
            console.log(isFirstRender);
            isFirstRender.current = false;
            return; 
        }
        console.log(`Выполняется useEffect - ${Date.now()}`)
    });


    // useEffect(() => {
    //     if(query === "") {
    //         return;
    //     }
    //     fetch();
    // }, [query])

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>{count}</button>
            <p>
                <code>useEffect</code> этот компонент не выполняется на первом рендере
            </p>
        </div>
    );
}