// LOGIN Y REGISTRO NO FINALIZADO

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import CloseIcon from '@mui/icons-material/Close';
import '../../styles/styles.scss'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const SignUp = () => {

    const [, setEmailRegister] = useState('')
    const [, setPasswordRegister] = useState('')
    const [, setEmailLogin] = useState('')
    const [, setPasswordLogin] = useState('')
  
    const [open, setOpen] = React.useState(false);
    const [formRegister, setFormRegister] = useState(false)
    
    const handleOpen = () => {
      setOpen(true);
    }
    const handleClose = () => {
      setOpen(false);
      setFormRegister(false)
    }
    const goToRegister = () => {
      setFormRegister(true)
    }
    const goToLogin = () => {
      setFormRegister(false)
    }

    return (
      <React.Fragment>
        <button className='userIcon' onClick={handleOpen}><PersonIcon/></button>
        <Modal
          className={'modalLogin'}
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style }}>
            {
              !formRegister
              ?
              <>
                <form>
                <h2 id="child-modal-title">Iniciar Sesión</h2>
                <p className='m-0' id="child-modal-description">Correo electrónico</p>
                <input type="text" onChange={event => setEmailLogin(event.target.value)} required/>
                <p className='m-0' id="child-modal-description">Contraseña</p>
                <input type="text" onChange={event => setPasswordLogin(event.target.value)} required/>
                <button className="btnCloseModal" onClick={handleClose}><CloseIcon/></button>
                <button className="buttonCustom buttonLogin">INICIAR SESIÓN</button>
                <div>
                  <span className='secondaryFont'>¿Aún no tienes cuenta?<button className='btnRegister' onClick={goToRegister}>Registrarse</button></span>
                </div>
                </form>
              </>
              : 
              <>
                <form>
                <h2 id="child-modal-title">Creá tu cuenta</h2>
                <p className='m-0' id="child-modal-description">Correo electrónico</p>
                <input type="text" onChange={event => setEmailRegister(event.target.value)} required/>
                <p className='m-0' id="child-modal-description">Contraseña</p>
                <input type="text" onChange={event => setPasswordRegister(event.target.value)} required/>
                <button className="btnCloseModal" onClick={handleClose}><CloseIcon/></button>
                <button className="buttonCustom buttonLogin">REGISTRARSE</button>
                <div>
                  <span className='secondaryFont'>¿Ya tienes cuenta?<button className='btnRegister' onClick={goToLogin}>Iniciar sesión</button></span>
                </div>
                </form>
                </>
            }
          </Box>
        </Modal>
      </React.Fragment>
    );
}