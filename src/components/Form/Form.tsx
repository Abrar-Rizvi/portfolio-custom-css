import './Form.css'

const Form = () => {
  return (
    <>
    <form action="" id="form">
        <h1>Contact Us</h1>
        <label htmlFor="name">Name  </label>
        <br />
        <input type="text" id='name' placeholder='Enter your name' />
        <br />
      
       

        <label htmlFor="email">Email</label>
        <br />
        <input type="text" id='email'placeholder='Enter your email' />
        <br />

        <label htmlFor="phone">Phone No</label>
        <br />
        <input type="text" id='phone' placeholder='Enter your Number'/>
        <br />
        <input type="submit" id="submit" placeholder=''/>
    </form>
    
    
    </>
  )
}

export default Form