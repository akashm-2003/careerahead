import React from 'react'
import './LoginModal.css'
import { Box, Button, Modal, Typography } from '@mui/material'
import { min } from 'moment/moment';
import {AiOutlineCloseCircle} from 'react-icons/ai'
const LoginModal = ({ open, handleClose }) => {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: '#181821',
    border: '2px solid #000',
    boxSize: 'border-box',
    boxShadow: '0 0 15px #71abde' ,
    width: 'min(75%, 500px)',
    height: 'min(30%, 350px)',
    borderRadius: '10px',
    p: 1,

  };
  return (
    <>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} >
          <div className="loginModal">
            <div className="closeModal">
              <div className="closeButton"><AiOutlineCloseCircle color='black' onClick={handleClose}/></div>
            </div>
            <div className="loginText">
              <div className="loginTextStart">Login</div>
            </div>
            <div className="emailText">
                Email:
            </div>
            <div className="emailInput">
              <input type="text" placeholder='Enter email' style={{backgroundColor:'#171717'}}/>
            </div>
            <div className="passwordText">
              Password:
            </div>
            <div className="passwordInput"><input type="password" placeholder='Enter Password' style={{backgroundColor:'#171717'}}/></div>
            <div className="loginButton">
              <Button variant="contained" >Login</Button>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  )
}

export default LoginModal