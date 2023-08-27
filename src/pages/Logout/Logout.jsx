import { signOut } from '@firebase/auth';
import React from 'react'
import { auth } from '../../auth/firebase';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Logout = () => {
    const navigate = useNavigate();
  const logoutUser=async()=>{
    try {
        await signOut(auth);
        window.location.href="/login"
      } catch (err) {
        console.error(err);
      }
  }
  useEffect(() => {
    logoutUser();
  },[])
}

export default Logout