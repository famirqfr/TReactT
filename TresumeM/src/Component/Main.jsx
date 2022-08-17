import React from 'react';
import data from '../data.json'
import { SocialIcon } from 'react-social-icons';
import {Element} from 'react-scroll'
import DownIcon from './DownIcon'

function Main() {
    return (
      <>
        <Element name="ElementMain" className="full-page">
          <div className='container'>
            <h1 className='title section-title'>{data.FName} {data.LName}</h1>
            <h2 className='text-hover'>{data.JobTitle}</h2>
            <div className='icon-container'>
          {
            Object.keys(data.Links).map(key =>{
              return(
                <SocialIcon key={key} url={data.Links[key]} />
              )
            })
          }
            </div>
          </div>
        </Element>
        <DownIcon  up={false} to={"ElementAbout"}/>
      </>
    );
  }
  
  export default Main;