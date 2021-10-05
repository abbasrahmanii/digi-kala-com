import React, { useState, useEffect } from "react";
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
import samandehi from "../images/asset 71.png";
import ettehadieh from "../images/asset 72.png";
import enamad from "../images/enamad.png";
import { Copyright } from "@material-ui/icons";

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
  const [toggleHiddenText, setToggleHiddenText] = useState(true);
  const [toggleText, setToggleText] = useState("مشاهده بیشتر ...");
  useEffect(() => {
    if (toggleHiddenText) {
      setToggleText("مشاهده بیشتر ...");
    } else {
      setToggleText("بستن");
    }
  }, [toggleHiddenText]);
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
        <div className="install">
          <a href="#">
            <img
              data-src="https://www.digikala.com/static/files/6f0c9aeb.svg"
              alt="دریافت از گوگل پلی"
              width="150px"
              height="44px"
              loading="lazy"
              src="https://www.digikala.com/static/files/6f0c9aeb.svg"
            />
          </a>
          <a href="#">
            <img
              data-src="https://www.digikala.com/static/files/b43d144f.svg"
              alt="دریافت از بازار"
              width="150px"
              height="44px"
              loading="lazy"
              src="https://www.digikala.com/static/files/b43d144f.svg"
            />
          </a>
          <a href="#">
            <img
              data-src="https://www.digikala.com/static/files/401848fb.png"
              alt="دریافت از مایکت"
              width="150px"
              height="44px"
              loading="lazy"
              src="https://www.digikala.com/static/files/401848fb.png"
            />
          </a>
          <a href="#">
            <img
              data-src="https://www.digikala.com/static/files/c824b056.svg"
              alt="دریافت از سیبچه"
              width="150px"
              height="44px"
              loading="lazy"
              src="https://www.digikala.com/static/files/c824b056.svg"
            />
          </a>
        </div>
      </Social>
      <Information>
        <div className="desc">
          <h4>فروشگاه اینترنتی دیجی‌کالا، بررسی، انتخاب و خرید آنلاین</h4>
          <p>
            دیجی‌کالا به عنوان یکی از قدیمی‌ترین فروشگاه های اینترنتی با بیش از
            یک دهه تجربه، با پایبندی به سه اصل، پرداخت در محل، ۷ روز ضمانت
            بازگشت کالا و تضمین اصل‌بودن کالا موفق شده تا همگام با فروشگاه‌های
            معتبر جهان، به بزرگ‌ترین فروشگاه اینترنتی ایران تبدیل شود. به محض
            ورود به سایت دیجی‌کالا با دنیایی از کالا رو به رو می‌شوید! هر آنچه
            که نیاز دارید و به ذهن شما خطور می‌کند در اینجا پیدا خواهید کرد.
          </p>
          <p className="hidden-text" hidden={toggleHiddenText}>
            حتی زمانی که بین خرید کالاها برای شخصی مردد هستید می‌توانید با خرید
            کارت هدیه دیجی کالا ، انتخاب را به سایرین بسپارید. این فروشگاه مثل
            یک ویترین پر زرق و برق است که با انواع و اقسام محصولاتی نظیر گوشی
            موبایل سامسونگ ، ساعت هوشمند اپل ، تلویزیون سامسونگ ، لپ تاپ و
            الترابوک ایسوس ، گوشی موبایل هواوی و همچنین محصولاتی که هر فرد در
            زندگی شخصی، تحصیلی و کاری خود به آنها احتیاج پیدا می‌کند، چیده شده
            است. اینجا مرجع متنوع‌ترین کالاهای مصرفی از گوشی موبایل موتورولا
            گرفته تا تبلت لنوو ، اتو پاناسونیک ، جارو شارژی بلک اند دکر ، کولر
            آبی آبسال ، اسپیکر (بلندگو) جی بی ال و حتی خرید لوازم جهیزیه
            می‌باشد. دیجی‌کالا همچنین یک بازار آنلاین برای خرید جدیدترین و
            ضروری‌ترین لوازم خانگی همانند سرخ کن فیلیپس ، یخچال و فریزر امرسان ،
            جاروبرقی پارس خزر ، آبمیوه گیری بوش ، سینمای خانگی و ساندبار سونی و
            انواع پخش کننده خانگی می‌باشد تا هر فرد بتواند مطابق با سلیقه شخصی
            خود، خانه رویاهایش را بسازد. حتی می‌توانید از مشهورترین برندهای
            داخلی و خارجی انواع مدل مانتو جدید ، لباس خواب زنانه ، پیراهن مردانه
            ، پیراهن و لباس مجلسی زنانه ، لباس بچه گانه ، شومیز زنانه و دخترانه
            و انواع لباس زیر مردانه را به صورت آنلاین با کمک راهنمای سایز
            خریداری کنید. این فروشگاه اینترنتی حتی برای سرگرمی کودکان هم خرید
            محصولاتی مانند عروسک ، مدل‌های اسباب بازی دخترانه و پسرانه و انواع
            لگو را فراهم کرده است. همچنین با سر زدن به محصولات آرایشی و بهداشتی
            زنانه و مردانه مانند عطر و ادکلن دیور ، لالیک ، جگوار ، گرلن اصل ،
            انواع دستگاه اصلاح موی صورت فیلیپس ، موزر ، پاناسونیک و حتی بهترین
            برندهای رنگ مو و ابرو می‌توانید تجربه‌ای جدید از خرید آنلاین کسب
            کنید. شما می توانید کلیه نیازهای خود را تنها با چند کلیک سفارش داده
            و در کمترین زمان ممکن درب منزل تحویل بگیرید.
          </p>
          <span
            className="toggle"
            onClick={() => setToggleHiddenText(!toggleHiddenText)}
          >
            {toggleText}
          </span>
        </div>
        <div className="icons">
          <a href="#">
            <img
              width="78px"
              height="85px"
              alt="samandehi-logo"
              src={samandehi}
            />
          </a>
          <a href="#">
            <img
              width="78px"
              height="85px"
              src={ettehadieh}
              alt="ecunion-logo"
              onclick="window.open('https://www.ecunion.ir/verify/digikala.com?token=35858775acf0232a8063', 'Popup','toolbar=no, location=no, statusbar=no, menubar=no, scrollbars=1, resizable=0, width=580, height=600, top=30')"
            />
          </a>
          <a href="#">
            <img
              width="78px"
              height="85px"
              referrerpolicy="origin"
              src={enamad}
              alt=""
              id="sScdOJOzhFxtcEqkjP7P"
            />
          </a>
        </div>
      </Information>
      <hr />
      <CopyRight>
        <p>
          استفاده از مطالب فروشگاه اینترنتی دیجی‌کالا فقط برای مقاصد غیرتجاری و
          با ذکر منبع بلامانع است. کلیه حقوق این سایت متعلق به شرکت نوآوران فن
          آوازه (فروشگاه آنلاین دیجی‌کالا) می‌باشد.
        </p>
      </CopyRight>
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
      font-size: 107%;
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
        cursor: pointer;
      }
    }
  }
`;

const Social = styled.div`
  width: 100%;
  min-height: 10vh;
  background-color: #3c4b6d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  a {
    display: flex;
    align-items: center;
    color: #fff;
    font-size: 1.5rem;
    .logo {
      width: 2.75rem;
      height: 2.75rem;
      background-color: #ee394f;
      border-radius: 12px;
      margin: 1rem;
    }
  }
  .install {
    display: flex;
    a {
      margin-left: 1rem;
    }
  }
`;

const Information = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 2rem;
  .desc {
    flex: 1 50rem;
    margin-left: 1rem;
    color: #424750;
    h4 {
      font-weight: bold;
      font-size: 1.1rem;
      margin-bottom: 0.5rem;
    }
    p {
      line-height: 25px;
    }
    .toggle {
      display: inline-block;
      cursor: pointer;
      color: #2f3238;
      font-weight: 400;
      font-size: 1.05rem;
      margin-top: 0.75rem;
    }
  }
  .icons {
    display: flex;
    flex: 1 8rem;
    justify-content: flex-end;
    a {
      padding: 1rem;
      border: 1px solid #ddd;
      border-radius: 10px;
      margin-right: 1rem;
    }
  }
`;
const CopyRight = styled.div`
  width: 100%;
  font-size: 1rem;
  text-align: center;
  margin-top: -1rem;
`;

export default Footer;
