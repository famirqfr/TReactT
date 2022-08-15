import { Component } from "react";
import './contact.css'


export default class Contact extends Component{
    render() {
        return[
            <section className="pt-page">
              <div className="section-inner custom-page-content">
                <div className="page-header color-1">
                  <h2>تماس</h2>
                </div>
                <div className="page-content text-right rtl">
                  <div className="row">
                    <div className="col-sm-6 col-md-6 right">
                      <div className="block-title">
                        <h3>با من در <span>ارتباط </span>باشید</h3>
                      </div>
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d404.87777474082657!2d51.41598256805549!3d35.725672594581724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e011f0d657a87%3A0x83da6e9185a01c32!2z2LTYsdqp2Kog2KrYrNin2LHYqiDYp9mE2qnYqtix2YjZhtuM2qkg2KLbjNix24zaqSDZvtin2LHYs9uM2KfZhg!5e0!3m2!1sen!2sde!4v1660392755251!5m2!1sen!2sde" width="400" height="250" style={{border : '0',allowfullscreen:'',referrerpolicy: 'no-referrer-when-downgrade'}}></iframe>

                      <div className="contact-info-block">
                        <div className="ci-icon">
                          <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="ci-text">
                          <h5>تهران، میرزای شیرازی کوچه آزادگان</h5>
                        </div>
                      </div>
                      <div className="contact-info-block">
                        <div className="ci-icon">
                          <i className="fa fa-envelope"></i>
                        </div>
                        <div className="ci-text">
                          <h5><a href="amqfr1228@gmail.com" target="_blank"
                            >amqfr1228@gmail.com</a></h5>
                        </div>
                      </div>
                      <div className="contact-info-block">
                        <div className="ci-icon">
                          <i className="fa fa-phone"></i>
                        </div>
                        <div className="ci-text ltr">
                          <h5>+98 915 700 6752</h5>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-6">
                      <div className="block-title">
                        <h3><span>تماس</span> با من</h3>
                      </div>
                      <form
                        id="contact-form"
                        method="post"
                        action="contact_form/contact_form.php"
                      >
                        <div className="messages"></div>

                        <div className="controls">
                          <div className="form-group form-group-with-icon">
                            <i className="fa fa-user"></i>
                            <label>نام و نام خانوادگی</label>
                            <input
                              id="form_name"
                              type="text"
                              name="name"
                              className="form-control text-right"
                              placeholder
                              required="required"
                              data-error="نام و نام خانوادگی شما اجباری است"
                            />
                            <div className="form-control-border"></div>
                            <div className="help-block with-errors"></div>
                          </div>

                          <div className="form-group form-group-with-icon">
                            <i className="fa fa-envelope"></i>
                            <label>ایمیل</label>
                            <input
                              id="form_email"
                              type="email"
                              name="email"
                              className="form-control text-right"
                              placeholder
                              required="required"
                              data-error="ایمیل صحیح اجباری می‌باشد"
                            />
                            <div className="form-control-border"></div>
                            <div className="help-block with-errors"></div>
                          </div>

                          <div className="form-group form-group-with-icon">
                            <i className="fa fa-comment"></i>
                            <label>پیام شما ...</label>
                            <textarea
                              id="form_message"
                              name="message"
                              className="form-control text-right"
                              placeholder
                              rows="4"
                              required="required"
                              data-error="لطفا پیام خود را تایپ کنید"
                            ></textarea>
                            <div className="form-control-border"></div>
                            <div className="help-block with-errors"></div>
                          </div>

                          <input
                            type="submit"
                            className="button btn-send"
                            value="ارسال پیام"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </section>
        ];
    }
}