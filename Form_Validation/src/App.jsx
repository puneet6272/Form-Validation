import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const initialValue = { username: '', Password: '', Email: '' }
  const [formValues, setFormValues] = useState(initialValue)
  const [formError, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)


  function handleChange(e) {

    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const onsubmit = (e) => {
    e.preventDefault()
    setFormError(validate(formValues))
    setIsSubmit(true)
  }

  useEffect(() => {
    console.log(formError)
    if (Object.keys(formError).length === 0 && isSubmit)
      console.log(formValues)
  }, [formError])

  const validate = (value) => {
    const error = {}
    const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (value.username === '') {
      error.username = "Username is reqired"
    }
    if (value.Email ==='') {
      error.Email = "Email is reqired"
    }else if(!email_pattern.test(value.Email)){
      error.Email = "Email did not match"
    }
    if (value.Password === '') {
      error.Password = "Password is reqired"
    }else if(!email_pattern.test(value.Password)){
      error.Password = "Password did not match"

    }

    return error;
  }

  return (
    <div className=" h-screen w-full bg-no-repeat bg-cover bg-center bg-[url('images/bg.jpg')]  grid place-content-center" >

      <pre>{JSON.stringify(formValues, undefined, 2)}</pre>

      <form onSubmit={onsubmit}>

        <div className=" bg-slate-800 grid grid-rows-4 w-96 h-[500px] border-2 border-black rounded-md">
          <div className=' text-white border-b-2 border-gray-300 pb-4 w-[90%] text-3xl font-semibold m-auto flex justify-center'> Login Form</div>


          <div className='set-perent '>
            <label> username</label>
            <input
              type="text"
              name='username'
              placeholder='Username'
              value={formValues.username}
              onChange={handleChange}
            />
            {formError.username && <p  className='text-white'>{formError.username}</p>}
          </div>

          <div className='set-perent'>
            <label > Email</label>
            <input
              type="text"
              name='Email'
              placeholder='Email'
              value={formValues.Email}
              onChange={handleChange}
            />
                        {formError.Email && <p  className='text-white'>{formError.Email}</p>}

          </div>

          <div className='set-perent'>
            <label > Password</label>
            <input
              type="text"
              name='Password'
              placeholder='Password'
              value={formValues.Password}
              onChange={handleChange}
              
            />
                        {formError.Password && <p  className='text-white'>{formError.Password}</p>}


            <button className=' text-white bg-purple-700 border w-[80%] mt-2 h-10 rounded-lg font-bold'> Submit</button>
          </div>




        </div>
      </form>




    </div >
  )
}

export default App
