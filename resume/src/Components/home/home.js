import { Component } from 'react';
import data from '../../data.json';
import './home.css';



export default class Home extends Component {
    render() {

        return [
            // Home Subpage  
            <section className="pt-page" data-id="home">
                <div className="section-inner start-page-content">
                    <div className="page-header">
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-4" style={{float : 'right'}}>
                                <div className="photo">
                                    <img src="assets/images/Amirmohammad.jpg" alt="" />
                                </div>
                            </div>
    
                            <div className="col-sm-8 col-md-8 col-lg-8" style={{float : 'right'}}>
                                <div className="title-block">
                                    <h1>{data.FirstName} <span>{data.LastName}</span></h1>
                                    <div className="sp-subtitle">{data.JobTitle}</div>
                                </div>
    
                                <div className="social-links">
                                    <a href={data.link.github}><i className="fa fa-github"></i></a>
                                    <a href={data.link.linkdin}><i className="fa fa-linkedin"></i></a>
                                    <a href={data.link.telegram}><i className="fa fa-telegram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    <div className="page-content">
                        <div className="row">
                            <div className="col-sm-4 col-md-4 col-lg-4">
                                <ul className="info-list">
                                    <li> <span className="title">سن</span><span className="value">22</span> </li>
                                    <li> <span className="title">محل سکونت</span><span className="value">تهران</span> </li>
                                    <li> <span className="title">ایمیل</span><span className="value"><a href="amqfr1228@gmail.com" target="_blank">amqfr1228@gmail.com</a></span> </li>
                                    <li> <span className="title">شماره تماس</span><span className="value ltr">+98 915 700 6752</span> </li>
                                    <li> <span className="title">وضعیت</span><span className="value">آماده به کار</span> </li>
                                </ul>
                            </div>
    
                            <div className="col-sm-8 col-md-8 col-lg-8">
                                <div className="about-me">
                                    <div className="block-title">
                                        <h3>درباره <span>من</span></h3>
                                    </div>
                                    <p className='rtl'> {data.AboutMe} </p>
                                </div>
                                <div className="download-resume">
                                    <a href="" className="btn btn-secondary">دریافت رزومه</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            // End of Home Subpage
        ];
    }
}
