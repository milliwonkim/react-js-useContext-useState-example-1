import React, { useContext } from 'react';
import { UserContext } from './App';

const Navbar = () => {

  const {firstName, lastName} = useContext(UserContext)

  return (
    <>
      <p>
        Hello, {firstName} {lastName}
      </p>
    </>
  )
}

export default Navbar;