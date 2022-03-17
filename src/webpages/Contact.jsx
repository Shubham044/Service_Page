import React, { useState } from 'react';


const ContactDiv = (props) => {
  const { type, label, id, placeholder,vId , fetchData } = props;

  return (
    <div className="mb-3">
      <label htmlFor={id} className="form-label">{label}</label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={id}
        value={vId}
        onChange={fetchData}
        placeholder={placeholder} />
    </div>
  )
}

const Contact = () => {
  const [data, setData] = useState({
    fullName: '',
    phone: '',
    email: '',
    msg: ''
  });



const fetchData=(e)=>{ 
    const {name , value} = e.target;

    setData((preVal)=>{
      return{
        ...preVal ,
        [name] : value,
      };
    } );
  };

  const submitted=(d) =>{
    const {msg , fullName , email, phone} = data;
      
    alert(`Hello ${fullName} Your number is ${phone} and email is ${email} and your message is ${msg}`);
}


  return (

    <div className="my-5">
      <h1 className='text-center'>Contact Us</h1>
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-6 mx-auto">

            <form className='border p-4 mt-4' onSubmit={submitted}>

              <ContactDiv 
              id="fullName" 
              type='text' 
              fetchData={fetchData} placeholder='Enter Your FullName'
              label='Full Name' 
              vId={data.fullName} />

              <ContactDiv 
              id="phone" 
              type='number' 
              fetchData={fetchData} placeholder='Enter Your Mobile Number'
              label='Phone Number' 
              vId={data.phone} />

              <ContactDiv 
              id="email" 
              type='email' 
              fetchData={fetchData} placeholder='Enter Your Email Id'
              label='Email address' 
              vId={data.email}/>

              <div className="mb-3">
                <label htmlFor="exampleInputMessage" className="form-label">Message</label>
                <textarea
                  className="form-control"
                  id="exampleInputMessage"
                  name='msg'
                  value={data.msg}
                  onChange={fetchData}>

                  </textarea>

                <div id="emailHelp" className="form-text">We'll never share your Details with anyone else.</div>
              </div>

              <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Contact;