import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import digikala from "../images/asset 73.svg";

const Login = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <LoginStyle>
      <form>
        <Link to="/">
          <img src={digikala} alt="digikala" />
        </Link>
        <h3>ورود / ثبت نام</h3>
        <label>
          <div className="input-text">
            شماره موبایل یا پست الکترونیک خود را وارد کنید
          </div>
          <input name="login[email_phone]" />
        </label>
        <button>ورود به دیجی کالا</button>
        <p>
          با ورود و یا ثبت نام در دیجی‌کالا شما{" "}
          <a href="https://www.digikala.com/page/terms">شرایط و قوانین</a>{" "}
          استفاده از سرویس های سایت دیجی‌کالا و{" "}
          <a href="https://www.digikala.com/page/privacy/">
            قوانین و حریم خصوصی
          </a>{" "}
          آن را می پذیرید.
        </p>
      </form>
    </LoginStyle>
  );
};

const LoginStyle = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    width: 25%;
    padding: 2rem;
    border: 1px solid #ddd;
    border-radius: 10px;
    a {
      width: 100%;
      margin: 0rem auto 3rem auto;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 50%;
      }
    }
    h3 {
      font-size: 1.4rem;
      margin-bottom: 1rem;
    }
    label {
      .input-text {
        font-size: 1rem;
        color: #555;
        margin-bottom: 1.5rem;
      }
      display: block;
      width: 100%;
      input {
        width: 100%;
        padding: 0.75rem 1rem;
        border: 1px solid #ddd;
        border-radius: 10px;
        margin-bottom: 1.5rem;
      }
    }
    button {
      display: block;
      width: 100%;
      background-color: #ef394e;
      color: #fff;
      font-size: 1rem;
      font-weight: 600;
      border: 0;
      padding: 1rem 1rem;
      border-radius: 10px;
    }
    p {
      margin-top: 1rem;
      font-size: 0.8rem;
      text-align: center;
      line-height: 1.3rem;
      color: #444;
      a {
        display: inline;
        text-decoration: underline;
        color: #333;
      }
    }
  }
`;

export default Login;
