import {useDispatch, useSelector} from "react-redux";
import {MdDeleteForever} from "react-icons/md";
import {removeUser} from "../store/slice/UserSlice.jsx";
// import styled from "styled-components";
const DisplayUsers = () => {

    const dispatch = useDispatch()
    const deleteUser = (id) => {
        dispatch(removeUser(id))
    }

    const data = useSelector((state) => {
        return state.user;
    })

    // console.log(data)

    return (
        <>
            { data.map((user, id) => {
                return <li key={id}>
                    {user}
                    <button className={'btn-delete'} onClick={() => deleteUser(id)}>
                        <MdDeleteForever className={'delete-icon'}/>
                    </button>
                </li>
            }) }
        </>
    );
};

export default DisplayUsers;