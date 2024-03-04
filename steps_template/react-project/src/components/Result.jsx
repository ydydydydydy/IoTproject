import React from 'react'
import Starter from '../views/Starter'

const Result = () => {
<<<<<<< HEAD

  let user = JSON.parse(sessionStorage.getItem('user') || null);

  return (
    <div>
        {user?(
          <Starter/>   
        ):(<div>{alert('로그인후 이용 가능합니다.')} {window.location.href = '/main'}</div>)} 
=======
  return (
    <div>
        <Starter/>    
>>>>>>> 583a2cc2b26b84055c13fb4d0d16694bbfcb2e2e
    </div>
  )
}

export default Result