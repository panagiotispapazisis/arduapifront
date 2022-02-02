import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { singIn } from './slices/userSlice'

function App() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user)
  useEffect(() => {
    console.log(user.isAuth)
    console.log(user.token)
  }, [user]);

  return <div>
    <button onClick={() => dispatch(singIn({ email: "panagiotis60@outlook.com", password: "123456" }))} >press</button>
    <button onClick={() => dispatch(singIn({ email: "panagiSSSSots60@outlook.com", password: "123456" }))} >press</button>

  </div>;
}

export default App;
