import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import digikala from "../images/asset 86.svg";
import card1 from "../images/asset 87.svg";
import card2 from "../images/asset 88.svg";
import card3 from "../images/asset 89.svg";
import card4 from "../images/asset 90.svg";
import card5 from "../images/asset 91.svg";

const Footer = () => {
  const footerOne = [
    { id: 1, title: "با دیجی کالا" },
    { id: 2, title: "اتاق خبر دیجی کالا" },
    { id: 3, title: "فروش در دیجی کالا" },
    { id: 4, title: "فرصت های شغلی" },
    { id: 5, title: "تماس با دیجی کالا" },
    { id: 6, title: "درباره دیجی کالا" },
  ];
  const footerTwo = [
    { id: 1, title: "خدمات مشتریان" },
    { id: 2, title: "پاسخ به پرسش های متداول" },
    { id: 3, title: "رویه های بازگرداندن کالا" },
    { id: 4, title: "شرایط استفاده" },
    { id: 5, title: "حریم خصوصی" },
    { id: 6, title: "گزارش باگ" },
  ];
  const footerThree = [
    { id: 1, title: "راهنمایی خرید از دیجی کالا" },
    { id: 2, title: "نحوه ثبت سفارش" },
    { id: 3, title: "رویه ارسال سفارش" },
    { id: 4, title: "شیوه های پرداخت" },
  ];

  return (
    <FooterStyled>
      <Header>
        <div>
          <img src={digikala} alt="logo" />
          <p>
            <span>تلفن پشتیبانی: 61930000 - 021</span>
            <span>|</span>
            <span>هفت روز هفته، 24 ساعت شبانه روز پاسخگوی شما هستیم</span>
          </p>
        </div>
        <a href="#">بازگشت به بالا</a>
      </Header>
      <Cards>
        <div>
          <img src={card1} alt="card1" />
          <p>امکان تحویل اکسپرس</p>
        </div>
        <div>
          <img src={card2} alt="card2" />
          <p>امکان پرداخت در محل</p>
        </div>
        <div>
          <img src={card3} alt="card3" />
          <p>7 روز هفته، 24 ساعته</p>
        </div>
        <div>
          <img src={card4} alt="card4" />
          <p>7 روز ضمانت بازگشت کالا</p>
        </div>
        <div>
          <img src={card5} alt="card5" />
          <p>ضمانت اصل بودن کالا</p>
        </div>
      </Cards>
      <hr />
      <MainFooter>
        <ul>
          {footerOne.map((data) => (
            <li key={data.id}>{data.title}</li>
          ))}
        </ul>
        <ul>
          {footerTwo.map((data) => (
            <li key={data.id}>{data.title}</li>
          ))}
        </ul>
        <ul>
          {footerThree.map((data) => (
            <li key={data.id}>{data.title}</li>
          ))}
        </ul>
        <div>
          <h3>با ما همراه باشید</h3>
          <div className="icons">
            <a href="#">
              <FontAwesomeIcon size="2x" icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon size="2x" icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon size="2x" icon={faLinkedin} />
            </a>
            <a href="#">
              <FontAwesomeIcon size="2x" icon={faYoutube} />
            </a>
          </div>
          <h3>از جدیدترین تخفیف ها باخبر شوید</h3>
          <form>
            <input type="email" placeholder="آدرس ایمیل خود را وارد کنید" />
            <input type="submit" title="ثبت در دیجی کالا" value="ثبت" />
          </form>
        </div>
      </MainFooter>
      <Social>
        <a href="#">
          <div className="logo"></div>
          <div>
            دانلود اپلیکیشن <label>دیجی کالا</label>
          </div>
        </a>
      </Social>
    </FooterStyled>
  );
};

const FooterStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 70vh;
  background-color: #fff;
  margin-top: 2rem;
  padding: 3rem;
  border-top: 1px solid #5f5f5f;
  hr {
    margin: 2.5rem auto;
    width: 100%;
  }
`;

const Header = styled.div`
  min-height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  div {
    display: flex;
    flex-direction: column;
    img {
      width: 20%;
      margin-bottom: 1.5rem;
    }
    p {
      span {
        margin-left: 1rem;
      }
    }
  }
  a {
    color: #9d9d9e;
    font-weight: bold;
    border: 1px solid #9d9d9e;
    border-radius: 10px;
    padding: 0.5rem 1rem;
  }
`;

const Cards = styled.div`
  width: 100%;
  min-height: 15vh;
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  flex-wrap: wrap;
  div {
    min-height: 4rem;
    margin-top: 1rem;
    flex: 1 8rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    img {
      width: 3.5rem;
      height: 3.2rem;
      margin-bottom: 0.5rem;
      object-fit: contain;
    }
  }
`;

const MainFooter = styled.div`
  width: 100%;
  min-height: 15rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  ul {
    flex: 1 12rem;
    li {
      color: #91898b;
      margin-top: 0.5rem;
      &:first-child {
        margin-top: 0;
        font-weight: bold;
        font-size: 1.1rem;
        color: #424750;
      }
    }
  }
  div {
    flex: 1 14rem;
    h3 {
      font-weight: bold;
      font-size: 1.1rem;
      color: #424750;
    }
    .icons {
      margin-top: 1rem;
      margin-bottom: 2.5rem;
      svg {
        color: #cacaca;
        margin-left: 1.75rem;
      }
    }
    form {
      margin-top: 1rem;
      input[type="email"] {
        font-size: 1.2rem;
        background-color: #cacaca;
        border: 0;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        margin-left: 0.5rem;
        &::placeholder {
          color: #424750;
        }
      }
      input[type="submit"] {
        font-size: 1.2rem;
        background-color: #cacaca;
        border: 0;
        border-radius: 5px;
        padding: 0.5rem 1rem;
        color: #fff;
      }
    }
  }
`;

const Social = styled.div`
  width: 100%;
  min-height: 10vh;
  background-color: #3c4b6d;
  border-radius: 10px;
  a {
    .logo {
    }
  }
`;

export default Footer;
