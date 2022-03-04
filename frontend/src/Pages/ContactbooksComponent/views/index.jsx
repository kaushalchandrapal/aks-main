import React, { useEffect, useCallback, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from 'react-redux' ;
import ButtonComponent from "../../../components/ButtonComponent";
import Card from '../../../components/CardComponent';
import TextInputComponent from "../../../components/TextInputComponent";
import { allContacts, resetAllContacts } from "../reducers/allContacts";
import { useHistory } from 'react-router-dom';
import './index.scss'

const Contactbooks = () => {
    const history=useHistory();
  const handleHistory = () =>{
    history.push("/add");
  };
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
        
        <TextInputComponent variant="outlined" label="Required*" placeholder="FirstName"/>
        <ButtonComponent text="Add Contact" variant="text" onClick={handleHistory} />
        <div className="css-row-margin">
        <div className="row">
                {allContactsData?.length > 0 && allContactsData?.map(item => {
                return <div className="col-4 p-0"><Card contactbook={item} key={item?.id} /></div>
            })}
        </div>
        </div>
        {/* {contactbooks.length > 0 && contactbooks.map((contactbook)=> (
            <Card contactbook={contactbook} key={contactbook.id} />
        ))}
            {contactbooks.length === 0 && <p>No contactbooks available!</p>} */}
        </>
    )
}
export default Contactbooks;