import React from "react";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { green, yellow } from "@material-ui/core/colors";
import Tooltip from "@material-ui/core/Tooltip";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import ShareRoundedIcon from "@material-ui/icons/ShareRounded";
import NotificationsActiveRoundedIcon from "@material-ui/icons/NotificationsActiveRounded";
import ShowChartRoundedIcon from "@material-ui/icons/ShowChartRounded";
import ListRoundedIcon from "@material-ui/icons/ListRounded";
import CompareRoundedIcon from "@material-ui/icons/CompareRounded";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import StarRateIcon from "@material-ui/icons/StarRate";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import ChevronLeftRoundedIcon from "@material-ui/icons/ChevronLeftRounded";
import pic1 from "../images/asset 40.jpeg";
import pic2 from "../images/asset 75.svg";

const Page = (props) => {
  // const useStyles = makeStyles((theme) => ({
  //   fab: {
  //     margin: theme.spacing(1),
  //   },
  //   absolute: {
  //     position: "absolute",
  //     bottom: theme.spacing(2),
  //     right: theme.spacing(3),
  //   },
  // }));

  const handleClick = (event) => {
    event.preventDefault();
    //   console.info("You clicked a breadcrumb.");
  };
  return (
    <div>
      <BreadcrumbsStyle>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/">
            دیجی کالا
          </Link>
          <Link
            color="inherit"
            to="/getting-started/installation/"
            onClick={handleClick}
          >
            محصولات سوپر مارکتی
          </Link>
          <Typography color="textPrimary">پمینا</Typography>
        </Breadcrumbs>
      </BreadcrumbsStyle>
      <Section>
        <div className="right">
          <h1 className="special-offer">پیشنهاد شگفت انگیز</h1>
          <div className="right-bottom">
            <div className="icons">
              <Tooltip
                title="افزودن به علاقه مندی"
                placement="right-center"
                arrow
              >
                {/* <Fab color="secondary" className={classes.fab}> */}
                <FavoriteBorderRoundedIcon cursor="pointer" />
                {/* </Fab> */}
              </Tooltip>
              <Tooltip title="اشتراک گذاری" placement="right-center" arrow>
                <ShareRoundedIcon cursor="pointer" />
              </Tooltip>
              <Tooltip
                title="اطلاع رسانی شگفت انگیز"
                placement="right-center"
                arrow
              >
                <NotificationsActiveRoundedIcon cursor="pointer" />
              </Tooltip>
              <Tooltip title="نمودار قیمت" placement="right-center" arrow>
                <ShowChartRoundedIcon cursor="pointer" />
              </Tooltip>
              <Tooltip title="مقایسه" placement="right-center" arrow>
                <CompareRoundedIcon cursor="pointer" />
              </Tooltip>
              <Tooltip title="لیست های عمومی" placement="right-center" arrow>
                <ListRoundedIcon cursor="pointer" />
              </Tooltip>
            </div>
            <div className="image">
              <img src={pic1} alt="pic1" />
            </div>
          </div>
        </div>
        <div className="center">
          <h1 className="title">
            رول ضد تعریق زنانه شون مدل Pink Princess حجم 50 میلی لیتر
          </h1>
          <span className="description">
            Schon Pink Princess Roll-On Deodorant 50ml For Women
          </span>
          <div className="like">
            <ThumbUpAltOutlinedIcon
              cursor="pointer"
              style={{ color: green[500] }}
            />
            <h5>
              ۸۷٪ (بیشتر از ۹۹۹ نفر) از خریداران، این کالا را پیشنهاد کرده‌اند.
            </h5>
          </div>
          <div className="star">
            <StarRateIcon
              cursor="pointer"
              style={{ color: yellow[700], fontSize: "2rem" }}
            />
            <span>۴.۳ (۶۹۵۶)</span>
            <span className="dot"></span>
            <a href="">۵۲۷۵ دیدگاه کاربران</a>
            <span className="dot"></span>
            <a href="">۱۷ پرسش و پاسخ</a>
            <Tooltip
              title="خریداران کالا با انتخاب یکی از گزینه‌های پیشنهاد یا عدم پیشنهاد، تجربه خرید خود را با کاربران به اشتراک می‌گذارند.
"
              placement="bottom-end"
              arrow
            >
              <InfoOutlinedIcon cursor="pointer" style={{ fontSize: "1rem" }} />
            </Tooltip>
          </div>
          <div className="property">
            <h2>ویژگی های کالا</h2>
            <div className="property-subtitle">
              <span></span>
              <h5>ماندگاری: ۲۴ ساعت</h5>
            </div>
          </div>
          <div class="center-bottom">
            <div class="center-bottom-one">
              <div>
                <img src={pic2} alt="pic2" />
                <span class="">خدمات ویژه کاربران دیجی‌پلاس</span>
              </div>
              <a href="/page" class="">
                شما هم عضو شوید
                <ChevronLeftRoundedIcon />
              </a>
            </div>
            <div class="center-bottom-two">
              <span class="">۲,۰۰۰ تومان هدیه نقدی</span>
              <span class="dot"></span>
              <span class="">ارسال رایگان</span>
              <span class="dot"></span>
            </div>
          </div>
        </div>
        <div className="left">
          <h1>فروشنده</h1>
          <div>
            <div>
              <img src="" alt="" />
              <div>
                <span>دیجی کالا</span>
                <span>عملکرد عالی</span>
              </div>
            </div>
            <div>
              <img src="" alt="" />
              <span>گارانتی اصالت و سلامت فیزیکی کالا</span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

const BreadcrumbsStyle = styled.div`
  width: 95%;
  min-height: 5vh;
  /* background-color: #f3e0e0; */
  display: flex;
  align-items: center;
  margin: 0rem auto;
  a {
    text-decoration: none;
    color: unset;
  }
`;
const Section = styled.div`
  width: 95%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  min-height: 80vh;
  .right {
    width: 30%;
    min-height: 80vh;
    display: flex;
    flex-direction: column;
    .special-offer {
      color: #fb3449;
      font-size: 1.5rem;
      margin-bottom: 1rem;
      height: 7vh;
    }
    .right-bottom {
      display: flex;
      width: 100%;
      height: 100%;
      .icons {
        width: 10%;
        height: min-content;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        svg {
          margin-top: 1rem;
          color: #111111b7;
        }
      }
      .image {
        width: 90%;
        height: 70%;
        background-color: #00d4c6;
        img {
          /* padding: 3rem 0rem; */
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .center {
    width: 35%;
    min-height: 80vh;
    /* background-color: #d4d4d4; */
    .title {
      margin-top: 0px;
      margin-bottom: 10px;
      font-weight: 400;
      font-size: 1.143rem;
      line-height: 28px;
      color: rgb(0, 0, 0);
      height: calc(7vh-20px);
    }
    .description {
      position: relative;
      top: 0px;
      right: 0px;
      padding-left: 0.5rem;
      margin-left: auto;
      margin-bottom: 4px;
      color: rgb(192, 194, 197);
      font-size: 0.857rem;
      line-height: 1.833;
    }
    .like {
      display: flex;
      align-items: flex-end;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.833;
      svg {
        margin-left: 1rem;
      }
    }
    .star {
      display: flex;
      align-items: center;
      margin: 0.5rem 0;
      justify-content: flex-start;
      svg {
        margin-left: 0.5rem;
      }
      a,
      span {
        margin-left: 0.5rem;
      }
      a {
        text-decoration: none;
        color: #0fabc6;
      }
      .dot {
        display: block;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: rgb(192, 194, 197);
      }
    }
    .property {
      margin: 2rem 0;
      h2 {
        margin-bottom: 0.5rem;
        font-weight: 400;
        font-size: 1.2rem;
      }
      .property-subtitle {
        display: flex;
        align-items: center;
        font-size: 1rem;
        font-weight: 300;
        color: #707070;
        span {
          display: block;
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          background-color: rgb(192, 194, 197);
          margin-left: 0.7rem;
        }
      }
    }
    .center-bottom {
      width: 100%;
      /* min-height: 15vh; */
      /* background-color: #dbdbf8; */
      padding: 0.5rem;
      border: 1px solid black;
      border-radius: 15px;
      .center-bottom-one {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        min-height: 5vh;
        margin-bottom: 1rem;
        div {
          display: flex;
          img {
            margin-left: 0.3rem;
          }
        }
        a {
          text-decoration: none;
          color: #0fabc6;
          display: flex;
          align-items: center;
        }
      }
      .center-bottom-two {
        width: 90%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        color: #707070;
        .dot {
          display: block;
          width: 0.3rem;
          height: 0.3rem;
          border-radius: 50%;
          background-color: rgb(192, 194, 197);
          margin: 0 0.5rem;
        }
      }
    }
  }
  .left {
    width: 30%;
    min-height: 73vh;
    background-color: #f5f5f5;
    border: 1px solid #707070;
    border-radius: 15px;
    margin-top: 7vh;
  }
`;

export default Page;
