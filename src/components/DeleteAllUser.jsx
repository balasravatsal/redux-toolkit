import styled from "styled-components";
import {useDispatch} from "react-redux";
import {removeAllUser} from "../store/slice/UserSlice.jsx";

const DeleteAllUser = () => {

    const dispatch = useDispatch()

    const removeAll = () => {
        dispatch(removeAllUser())
    }
    return <Wrapper>
        <button className="btn clear-btn" onClick={removeAll}>clear users</button>
    </Wrapper>
}

const Wrapper = styled.section`
  .clear-btn {
    text-transform: capitalize;
    background-color: #db338a;
    margin-top: 2rem;
  }
`

export default DeleteAllUser