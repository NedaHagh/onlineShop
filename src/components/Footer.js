import React from "react";
import tahvileExpress from "../assets/images/tahvile-express.png";
import poshtibani from "../assets/images/poshtibani.png";
import pardakhtdarmahal from "../assets/images/pardakhtdarmahal.png";
import zemanatebazgasht from "../assets/images/zemanatebazgasht.png";
import zemanat from "../assets/images/zemanat.png";

export default function Footer() {
  return (
      <div className="contain-footer">
        <nav className="footer-feature">
          <a className="footer-badge">
            <img  src={require('../assets/images/tahvile-express.png')} alt="" />
            <div className="footer-feature-item">تحویل اکسپرس</div>
          </a>
          <a className="footer-badge">
            <img src={poshtibani} alt="" />
            <div className="footer-feature-item">پشتیبانی 24 ساعته</div>
          </a>
          <a className="footer-badge">
            <img src={pardakhtdarmahal} alt=""/>
            <div className="footer-feature-item">پرداخت در محل</div>
          </a>
          <a className="footer-badge">
            <img src={zemanatebazgasht} alt=""/>
            <div className="footer-feature-item">7 روز ضمانت بازگشت</div>
          </a>
          <a className="footer-badge">
            <img src={zemanat} alt="" />
            <div className="footer-feature-item">ضمانت اصل بودن کالا</div>
          </a>
        </nav>
        <div className="footer-middlebar">
          <div className="footer-links">
            <nav className="c-footer-links-col">
              <div className="o-headline-links">راهنمای خرید</div>
              <ul className="c-footer-links-ul">
                <li>نحوه ثبت سفارش</li>
                <li>رویه ارسال سفارش</li>
                <li>شیوه های پرداخت</li>
              </ul>
            </nav>
            <nav className="c-footer-links-col">
              <div className="o-headline-links">خدمات مشتریان</div>
              <ul className="c-footer-links-ul">
                <li>پاسخ به پرسش های متداول</li>
                <li>رویه های بازگرداندن کالا</li>
                <li>شرایط استفاده</li>
              </ul>
            </nav>
            <nav className="c-footer-links-col">
              <div className="o-headline-links">با ما باشید...</div>
              <ul className="c-footer-links-ul">
                <li>اتاق خبر</li>
                <li>فروش در فروشگاه ما</li>
                <li>فرصت های شغلی</li>
              </ul>
            </nav>
          </div>
          <nav className="footer-form">
            <form
              id="SubscribeNewsletter"
              className="c-form-newsletter"
              action="/newsletter/"
              method="post"
              noValidate="novalidate"
            >
              <fieldset>
                <div className="form-newsletter-row">
                  <input
                    className="input-field-placeholder"
                    type="text"
                    placeholder="آدرس ایمیل خود را وارد کنید"
                  />
                  <button type="submit" className="btn-secondary">
                    ارسال
                  </button>
                </div>
              </fieldset>
            </form>
            <div className="footer-community">
              <div className="footer-social">
                <span></span>
                <div className=""></div>
              </div>
            </div>
          </nav>
        </div>
      </div>
  );
}
