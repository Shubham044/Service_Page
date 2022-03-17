import React from 'react';
import Card from './Card';
import ServicesApi from './ServicesApi';


const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
             

                {ServicesApi.map((cElem, id) => {
                  return (<Card
                    key={id}
                    name={cElem.name}
                    img={cElem.img}
                    btn={cElem.name} />
                )})}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Service;