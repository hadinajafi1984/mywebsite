import React, { useState } from "react";
import clint1Image from "../../assets/img/clients/client-01.png";
import clint2Image from "../../assets/img/clients/client-02.png";
import clint3Image from "../../assets/img/clients/client-03.png";
import clint4Image from "../../assets/img/clients/client-04.png";
import clint5Image from "../../assets/img/clients/client-05.png";
import clint6Image from "../../assets/img/clients/client-06.png";
import clint7Image from "../../assets/img/clients/client-07.png";
import clint8Image from "../../assets/img/clients/client-08.png";
import clint9Image from "../../assets/img/clients/client-09.png";
import { IAbout } from "./about/about";
import dateFormat from "dateformat";

export const About = () => {
  const [abouData, setData] = useState<IAbout>();
  React.useEffect(() => {
    const url = "https://localhost:49154/api/Abouts/GetAbouts";
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = (await response.json()) as IAbout;
        setData(json);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section id="about" className="about-section pt-page page-active">
      <div className="section-container">
        <div className="page-heading">
          <span className="icon">
            <i className="lnr lnr-user"></i>
          </span>
          <h2>About Me.</h2>
        </div>

        <div className="row about mb-70">
          <div className="col-lg-8">
            <h3 className="mb-20">UI/UX Designer & Developer</h3>
            <p>
              Dolor reprehenderit aut repudiandae maiores recusandae.
              Consequatur dolor nisi labore commodi ipsa? Excepturi velit
              laboriosam at voluptatibus cupiditate est vel. Dolorem praesentium
              itaque fugiat placeat quas consequatur? Obcaecati natus rerum
            </p>
            <p>
              Consectetur consectetur nesciunt nesciunt blanditiis amet? Quod
              quis unde aliquid excepturi laudantium? Illo architecto aliquam
              velit illo magnam neque perferendis sint Incidunt eius ipsa
              inventore labore eos velit. Minus hic magni reiciendis
              necessitatibus ex Quidem officia deleniti accusamus obcaecati
              dolores. Porro culpa quibusdam impedit porro praesentium
              excepturi. Alias ab consequatur?
            </p>

            <div className="signature mt-20">
              <img src="img/signature-black.png" alt="" />
            </div>
          </div>

          <div className="col-lg-4">
            <div className="about-info">
              <h3 className="mb-20">Personal Information</h3>
              <ul>
                <li>
                  <span className="title">Name</span>
                  <span className="value">
                    {abouData?.name + " " + abouData?.family}
                  </span>
                </li>
                <li>
                  <span className="title">Birth Date</span>
                  <span className="value">
                    {dateFormat(abouData?.birthDate, "yyyy-mm-dd")}
                  </span>
                </li>
                <li>
                  <span className="title">Residence</span>
                  <span className="value">{abouData?.residence}</span>
                </li>
                <li>
                  <span className="title">Address</span>
                  <span className="value">{abouData?.address}</span>
                </li>
                <li>
                  <span className="title">Email</span>
                  <span className="value">{abouData?.email}</span>
                </li>
                <li>
                  <span className="title">Phone</span>
                  <span className="value">{abouData?.phone}</span>
                </li>
                <li>
                  <span className="title">Freelance</span>
                  <span className="value">{abouData?.freelance}</span>
                </li>
              </ul>
              <div className="resume-button mt-30">
                <a className="btn-main" href="#">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="row services mb-30">
          <div className="col-md-12">
            <div className="subheading">
              <h3>Services</h3>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="service-item">
              <div className="icon">
                <i className="lnr lnr-laptop"></i>
              </div>
              <h4>Web Development</h4>
              <p>
                Amet aspernatur delectus maxime ducimus similique Ratione
                asperiores corporis provident aut libero.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="service-item">
              <div className="icon">
                <i className="lnr lnr-eye"></i>
              </div>
              <h4>Web Design</h4>
              <p>
                Amet aspernatur delectus maxime ducimus similique Ratione
                asperiores corporis provident aut libero.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="service-item">
              <div className="icon">
                <i className="lnr lnr-laptop-phone"></i>
              </div>
              <h4>Responsive Design</h4>
              <p>
                Amet aspernatur delectus maxime ducimus similique Ratione
                asperiores corporis provident aut libero.
              </p>
            </div>
          </div>

          <div className="col-lg-3 col-sm-6">
            <div className="service-item">
              <div className="icon">
                <i className="lnr lnr-camera"></i>
              </div>
              <h4>Photography</h4>
              <p>
                Amet aspernatur delectus maxime ducimus similique Ratione
                asperiores corporis provident aut libero.
              </p>
            </div>
          </div>
        </div>

        <div className="row clients mb-70">
          <div className="col-md-12">
            <div className="subheading">
              <h3>Clients</h3>
            </div>
          </div>

          <div className="owl-carousel owl-theme">
            <div className="client-logo">
              <a href="#">
                <img src={clint1Image} alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src={clint2Image} alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src={clint3Image} alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src={clint4Image} alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src={clint5Image} alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src={clint6Image} alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src={clint7Image} alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src={clint8Image} alt="" />
              </a>
            </div>

            <div className="client-logo">
              <a href="#">
                <img src={clint9Image} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="row testimonials mb-50">
          <div className="col-md-12">
            <div className="subheading">
              <h3>Testimonials</h3>
            </div>
            <div className="owl-carousel owl-theme">
              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>
                    Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum
                    deserunt suscipit eos fugit. Consectetur dolorum temporibus
                    facilis impedit exercitationem dignissimos.
                  </p>
                </div>
                <div className="testimonial-meta">
                  <img src="img/testimonials/author-1.jpg" alt="" />
                  <div className="meta-info">
                    <h4>Kate Fox</h4>
                    <p>Digital Marketing Executive</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>
                    Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum
                    deserunt suscipit eos fugit. Consectetur dolorum temporibus
                    facilis impedit exercitationem dignissimos.
                  </p>
                </div>
                <div className="testimonial-meta">
                  <img src="img/testimonials/author-2.jpg" alt="" />
                  <div className="meta-info">
                    <h4>Emma Jones</h4>
                    <p>Creative Director</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-item">
                <div className="testimonial-content">
                  <p>
                    Ipsum ab necessitatibus numquam vitae quis. Nobis nostrum
                    deserunt suscipit eos fugit. Consectetur dolorum temporibus
                    facilis impedit exercitationem dignissimos.
                  </p>
                </div>
                <div className="testimonial-meta">
                  <img src="img/testimonials/author-3.jpg" alt="" />
                  <div className="meta-info">
                    <h4>Jack Smith</h4>
                    <p>Marketing Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
