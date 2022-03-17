import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Common = (props) => {
    const {tagline , name , img , btn , link} = props;
  return (
    <>
      <section id='header' className='d-flex align-items-center'>
        <div className='container-fluid'>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                  <h1 className="h1edit">{tagline} <strong className="mainedit">{name}</strong></h1>
                  <h2 className='mt-3 h2edit'>
                    We are the team of talented persons
                  </h2>
                  <div className="mt-3">
                    <NavLink to={link} className="btn btn-style">{btn}</NavLink>
                  </div>

                </div>

                <div className="col-md-6 order-1 order-lg-2">
                  <img src={img} alt="imgae" className='img-fluid animate' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Common