import {useState, useEffect, useCallback} from 'react';


export function useFetch(url){
    let [users, setUsers] =  useState([]);
    const [fetchComplete, setFetching ] = useState(false);
    useEffect(() => {
        setFetching(true);
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setUsers(data)
                setFetching(false)
            })
    },[]);
    return [users, fetchComplete, setUsers];
}