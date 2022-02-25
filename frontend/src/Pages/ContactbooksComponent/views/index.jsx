import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux' ;
import Card from '../../../components/CardComponent';
import { allContacts, resetAllContacts } from "../reducers/allContacts";

const Contactbooks = () => {
    const dispatch = useDispatch();
    const [allContactsData, setAllContactsData] = useState(null);
    // const contactbooks = useSelector(state => state.contactbooks.contactbooks);

    const state = useSelector(({ allContactsReducer }) => {
        const {
            allContactsResponseData,
            errorAllContactsResponseDate,
        } = allContactsReducer;

        return {
            allContactsResponseData,
            errorAllContactsResponseDate,
        };
    }, shallowEqual)

    const fetchApi = useCallback(() => {
        dispatch(allContacts());
    }, [dispatch]);
    
    useEffect(() => {
        fetchApi();
    }, [fetchApi]);

    useEffect(() => {
        if (state?.allContactsResponseData !== null) {
            setAllContactsData(state?.allContactsResponseData);
            dispatch(resetAllContacts());
        }
    }, [dispatch, state.allContactsResponseData]);

    console.log(allContactsData);
    
    return (
        <>
        {allContactsData?.length > 0 && allContactsData?.map(item => {
            return <Card contactbook={item} key={item?.id} />
        })}

        {/* {contactbooks.length > 0 && contactbooks.map((contactbook)=> (
            <Card contactbook={contactbook} key={contactbook.id} />
        ))}
            {contactbooks.length === 0 && <p>No contactbooks available!</p>} */}
        </>
    )
}
export default Contactbooks;