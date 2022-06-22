import React from 'react'
import VerCuenta from '../components/VerCuenta'

const MiCuenta = () => {
    return (
        <>
          <h1 className=' text-4xl font-black '>Mi Cuenta</h1>
    
          <div className="mt-10 flex justify-center">
            <VerCuenta/>
          </div>
        </>
      )
}

export default MiCuenta