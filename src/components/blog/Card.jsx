import React from 'react';
import "./blog.css"
import { blog } from '../../assets/data/data';
import {AiOutlineTags} from "react-icons/ai"
import {AiOutlineClockCircle} from "react-icons/ai"
import {AiOutlineComment} from "react-icons/ai"
import {AiOutlineShareAlt} from "react-icons/ai"
import {Link} from "react-router-dom"

// API
// const getdata = "localhost:5000/posts/getAlldata"

const Card = () => {
    return (
        <>
          <section className='blog'>
            <div className="container grid3">
              {
                blog.map((item)=>(
                  <div className="box boxItems" key={item.id}>
                    <div className="img">
                      <img src={item.url} alt="" width="100%"/>
                    </div>
                    <div className="details">
                      {/* <p>{item.id}</p> */}
                      <div className="tag">
                        < AiOutlineTags  className="ican" />
                        <Link to='/'>#{item.category}</Link>
                      </div>
                      <Link to={`/details/${item.id}`} className='link' >
                        <h3>{item.title}</h3>
                      </Link>
                      <p>{item.desc.slice(0, 180)}...</p>
                      <div className="date">
                        <AiOutlineClockCircle className="ican"/><label htmlFor=''>{item.date}</label>
                         <AiOutlineComment className='ican'/> <label htmlFor=''>27</label>
                        <AiOutlineShareAlt className='ican' /> <label htmlFor=''>SHARE</label>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </section>
        </>
    );
}

export default Card;