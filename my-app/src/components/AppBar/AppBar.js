import {useContext, useEffect, useLayoutEffect} from "react";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import authContext from "../../contexts/auth/context.js";

export default function Appbar() {
    const { isLoggedIn,user,onLogIn,onLogOut} = useContext(authContext);

    // ЮзЛаяут запускается до отрисовки - на подобие юзЭффекта 
    // Используется редко
    useLayoutEffect(() => {

    },[])

    // useEffect(() => {
    //     return() => {

    //     }
    // }, [])

    return (
        <header>
            <Navigation/>
            {isLoggedIn ? (
                <UserMenu onLogOut={onLogOut} user={user} />
            ) : (
                <button type="button" onClick={onLogIn}>
                    Войти
                </button>   
            )}
        </header>
    );
}