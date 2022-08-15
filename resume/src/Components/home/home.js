import { Component } from 'react';
import data from '../../data.json';
import './home.css';

export default class Home extends Component {
    render() {

        return [
            <section className="pt-page">
            <div className="section-inner start-page-content">
              <div className="page-header">
                <div className="row">
                  <div className="col-sm-4 col-md-4 col-lg-4 right">
                    <div className="photo">
                      <img src="assets/images/Amirmohammad.jpg" alt="" />
                    </div>
                  </div>

                  <div className="col-sm-8 col-md-8 col-lg-8 right">
                    <div className="title-block">
                      <h1>امیرمحمد <span>غفاری</span></h1>
                      <div className="sp-subtitle">مهندسی هوش مصنوعی</div>
                    </div>

                    <div className="social-links">
                      <a href="https://github.com/famirqfr">
                        <i className="fa fa-github"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/famirqfr/">
                        <i className="fa fa-linkedin"></i>
                      </a>
                      <a href="http://t.me/famirqfr">
                        <i className="fa fa-telegram"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="page-content">
                <div className="row">
                  <div className="col-sm-12 col-md-4 col-lg-4 text-right">
                    <ul className="info-list">
                      <li>
                        <span className="title">سن</span>
                        <span className="value">22</span>
                      </li>
                      <li>
                        <span className="title">محل سکونت</span>
                        <span className="value">تهران</span>
                      </li>
                      <li>
                        <span className="title">ایمیل</span>
                        <span className="value">
                          <a href="amqfr1228@gmail.com" target="_blank">
                            amqfr1228@gmail.com
                          </a>
                        </span>
                      </li>
                      <li>
                        <span className="title">شماره تماس</span>
                        <span className="value ltr">+98 915 700 6752</span>
                      </li>
                      <li>
                        <span className="title">وضعیت</span>
                        <span className="value">آماده به کار</span>
                      </li>
                    </ul>
                  </div>

                  <div className="col-sm-12 col-md-8 col-lg-8 text-right">
                    <div className="about-me">
                      <div className="block-title">
                        <h3>درباره <span>من</span></h3>
                      </div>
                      <p className="rtl">
                        دانشجو کامپیوتر و علاقه‌مند به فراگیری علوم کامپیوتر.
                        سال 96 وارد دنیای برنامه نویسی شدم و با استفاده از
                        java مشغول به ساخت و طراحی نرم افزارهای Android شدم.
                        فعالیت خود را با وردپرس و طراحی سایت ادامه دادم و با
                        مهارت‌هایی چون ASP .Net Core، Django برای سمت سرور و
                        Angular، reatjs برای سمت کاربر آشنا شدم از سال 98 با
                        دنیای هوش مصنوعی آشنا و علاقه‌مند به این حوزه از
                        مهندسی و برنامه نویسی کامپیوتر شدم و در کنار
                        فعالیت‌هام در حوزه طراحی سایت و نرم افزارهای تحت وب
                        یادگیری هوش مصنوعی را نیز دنبال کردم که تونستم با
                        ابزار ها و کتابخونه‌های محبوبی مثل numpy ،pandas و ...
                        در زمینه علم داده و یادگیری ماشین آشنا بشم داستان
                        یادگیری همچنان ادامه دارد...
                      </p>
                    </div>
                    <div className="download-resume">
                      <a href="" className="btn btn-secondary">
                        دریافت رزومه
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ];
    }
}
