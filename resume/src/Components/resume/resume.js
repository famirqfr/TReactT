import { Component } from "react"
import './resume.css'

export default class Resume extends Component{
    render() {
        return[
            <section className="pt-page" data-id="resume">
              <div className="section-inner custom-page-content">
                <div className="page-header color-1">
                  <h2>رزومه</h2>
                </div>
                <div className="page-content">
                  <div className="row">
                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="block">
                        <div className="block-title">
                          <h3><i className="fa fa-history"></i> سوابق <span>شغلی</span></h3>
                        </div>

                        <div className="timeline">
                          <div className="timeline-item">
                            <h4 className="item-title">Specialization Course</h4>
                            <span className="item-period">2010</span>
                            <span className="item-small">Apple Inc.</span>
                            <p className="item-description">
                              Mauris magna sapien, pharetra consectetur
                              fringilla vitae, interdum sed tortor.
                            </p>
                          </div>

                          <div className="timeline-item">
                            <h4 className="item-title">Specialization Course</h4>
                            <span className="item-period">2010</span>
                            <span className="item-small">Apple Inc.</span>
                            <p className="item-description">
                              Mauris magna sapien, pharetra consectetur
                              fringilla vitae, interdum sed tortor.
                            </p>
                          </div>

                          <div className="timeline-item">
                            <h4 className="item-title">Specialization Course</h4>
                            <span className="item-period">2010</span>
                            <span className="item-small">Apple Inc.</span>
                            <p className="item-description">
                              Mauris magna sapien, pharetra consectetur
                              fringilla vitae, interdum sed tortor.
                            </p>
                          </div> 
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-6 col-md-6 col-lg-6">
                      <div className="block">
                        <div className="block-title">
                          <h3><i className='fa fa-graduation-cap'></i> سوابق <span>تحصیلی</span></h3>
                        </div>

                        <div className="timeline">
                          <div className="timeline-item">
                            <h4 className="item-title">کارشناسی</h4>
                            <span className="item-period">مهرماه 1398 - شهریورماه 1400</span>
                            <span className="item-small">دانشگاه صنعتی سجاد</span>
                            <p className="item-description">
                              مهندسی نرم افزار - کامپیوتر
                            </p>
                          </div>

                          <div className="timeline-item">
                            <h4 className="item-title">کاردانی</h4>
                            <span className="item-period">مهرماه 1396 - شهریورماه 1398</span>
                            <span className="item-small">دانشگاه صنعتی سجاد</span>
                            <p className="item-description">
                              مهندسی نرم افزار - کامپیوتر
                            </p>
                          </div>
                          

                          <div className="timeline-item">
                            <h4 className="item-title">دیپلم فنی حرفه‌ای</h4>
                            <span className="item-period">مهرماه 1394 - خردادماه 1396</span>
                            <span className="item-small">هنرستان کوشا</span>
                            <p className="item-description">
                              نرم افزار 
                            </p>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="block">
                      <div className="block-title">
                        <h3><i className="fa fa-certificate" aria-hidden="true"></i> گواهینامه‌های <span>من</span></h3>
                      </div>
                      <div className="gallery ltr">
                        <div className="gallery__column">
                          <a href="https://maktabkhooneh.org/certificates/MK-FE1YJV/?print=True" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                              <img src="assets/images/certificates/MK-FE1YJV.png" alt="Machine Learning with Python" className="gallery__image"/>
                              <figcaption className="gallery__caption">Machine Learning with Python From Maktabkhooneh</figcaption>
                            </figure>
                          </a>
                          <a href="https://toplearn.com/Certificate/10054__7442ecd6-30f6-4583-96da-28f2cd6e0c08" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                              <img src="assets/images/certificates/Angular.jpg" alt="Angular Freamwork (v8, v9, v10)" className="gallery__image"/>
                              <figcaption className="gallery__caption">Angular Freamwork (v8, v9, v10) From Toplearn</figcaption>
                            </figure>
                          </a>
                        </div>
                        <div className="gallery__column">
                          <a href="https://toplearn.com/Certificate/12222__7442ecd6-30f6-4583-96da-28f2cd6e0c08" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                              <img src="assets/images/certificates/Django.jpg" alt="Django Beginner to Advanced" className="gallery__image"/>
                              <figcaption className="gallery__caption">Django Beginner to Advanced From Toplearn</figcaption>
                            </figure>
                          </a>
                          <a href="https://maktabkhooneh.org/certificates/MK-3AC0N7/?print=True" target="_blank" className="gallery__link">
                            <figure className="gallery__thumb">
                              <img src="assets/images/certificates/MK-3AC0N7.png" alt="Python Programming for Beginners" className="gallery__image"/>
                              <figcaption className="gallery__caption">Python Programming for Beginners From Maktabkhooneh</figcaption>
                            </figure>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12 col-lg-12 right">
                    <div className="block">
                      <div className="block-title">
                        <h3><i className="fa fa-cogs" aria-hidden="true"></i> مهارت های <span>من</span></h3>
                      </div>
                      <div className="row">
                        <div className="skills-info col-sm-6 col-md-6 col-lg-6">
                          <h4>Web Design</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-1"></div>
                          </div>

                          <h4>Graphic Design</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-2"></div>
                          </div>

                          <h4>Print Design</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-3"></div>
                          </div>
                        </div>
                        <div className="skills-info col-sm-6 col-md-6 col-lg-6">
                          <h4>Web Design</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-1"></div>
                          </div>

                          <h4>Graphic Design</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-2"></div>
                          </div>

                          <h4>Print Design</h4>
                          <div className="skill-container">
                            <div className="skill-percentage skill-3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                      <div className="block">
                        <div className="center download-resume">
                          <a href="#" className="btn btn-secondary">دریافت رزومه</a>
                        </div>
                      </div>
                    </div>
                  </div>
                   
                </div>
              </div>
            </section>
            //End of Resume Subpage
        ];
    }
}