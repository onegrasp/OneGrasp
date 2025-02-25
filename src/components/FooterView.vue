<template>
  <div>
    <a
      href="https://wa.me/9246272747"
      target="_blank"
      class="btn-whatsapp-pulse btn-whatsapp-pulse-border"
    >
      <i class="fab fa-whatsapp"></i>
    </a>

    <!-- pop up code -->

    <div class="popup-enroll">
      <div class="popup-content-enroll">
        <span class="close-enroll">&times;</span>

        <PopUpFormVue />

        <!-- contact__form__end-->
      </div>
    </div>

    <!-- pop up code -->

    <div class="popup">
      <div class="popup-content">
        <span class="close">&times;</span>

        <PopUpFormEnrollVue />
      </div>
    </div>

    <!-- pop up code -->

    <!-- footer__section__start -->

    <div class="footerarea">
      <div class="container">
        <div class="footerarea__wrapper footerarea__wrapper__2">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
              <div class="footerarea__inner footerarea__about__us">
                <div class="footerarea__heading">
                  <img src="@/assets/images/next-logo-main.png" alt="" />
                </div>
                <div class="footerarea__content">
                  <p>
                    orporate clients and leisure travelers has been relying on
                    Groundlink for dependable safe, and professional chauffeured
                    car end service in major cities across World.
                  </p>
                </div>
                <div class="footerarea__icon footerarea__icon__2">
                  <ul>
                    <li>
                      <a href="http://facebook.com/"
                        ><i class="icofont-facebook"></i
                      ></a>
                    </li>
                    <li>
                      <a href="#"><i class="icofont-instagram"></i></a>
                    </li>
                    <li>
                      <a href="#"><i class="icofont-youtube-play"></i></a>
                    </li>

                    <li>
                      <a href="http://linkedin.com/"
                        ><i class="icofont-linkedin"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div class="footerarea__inner">
                <div class="footerarea__heading">
                  <h3>Usefull Links</h3>
                </div>
                <div class="footerarea__list">
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Universities</a>
                    </li>
                    <li>
                      <a href="#">Courses</a>
                    </li>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6">
              <div class="footerarea__inner footerarea__padding__left">
                <div class="footerarea__heading">
                  <h3>Course</h3>
                </div>
                <div class="footerarea__list">
                  <ul>
                    <li>
                      <a href="#">For working Proffesionals </a>
                    </li>
                    <li>
                      <a href="#">For College Students</a>
                    </li>
                    <li>
                      <a href="#">Study Abroad</a>
                    </li>
                    <li>
                      <a href="#">Universities</a>
                    </li>
                    <li>
                      <a href="#">Programs</a>
                    </li>
                    <li>
                      <a href="#">Top Wanted Courses</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
              <div class="footerarea__right__wraper footerarea__inner">
                <div class="footerarea__heading">
                  <h3>Recent Post</h3>
                </div>
                <div class="footerarea__right__list">
                  <ul>
                    <li>
                      <a href="#">
                        <div class="footerarea__right__img">
                          <img
                            loading="lazy"
                            src="@/assets/img/footer/footer__1.png"
                            alt="footerphoto"
                          />
                        </div>
                        <div class="footerarea__right__content">
                          <span>02 Apr 2024 </span>
                          <h6>Best Your Business</h6>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <div class="footerarea__right__img">
                          <img
                            loading="lazy"
                            src="@/assets/img/footer/footer__2.png"
                            alt="footerphoto"
                          />
                        </div>
                        <div class="footerarea__right__content">
                          <span>02 Apr 2024 </span>
                          <h6>Keep Your Business</h6>
                        </div>
                      </a>
                    </li>

                    <li>
                      <a href="#">
                        <div class="footerarea__right__img">
                          <img
                            loading="lazy"
                            src="@/assets/img/footer/footer__3.png"
                            alt="footerphoto"
                          />
                        </div>
                        <div class="footerarea__right__content">
                          <span>02 Apr 2024 </span>
                          <h6>Nice Your Business</h6>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="footerarea__copyright__wrapper footerarea__copyright__wrapper__2"
        >
          <div class="row">
            <div class="col-lg-12">
              <div
                class="footerarea__copyright__content footerarea__copyright__content__2 text-center"
              >
                <p>
                  Copyright © 2025 by <a> Next Step</a> All Rights Reserved.
                </p>
              </div>
            </div>
            <!-- <div class="col-xl-6 col-lg-6">
                    <div class="footerarea__copyright__content footerarea__copyright__content__2 text-end">
                        <p>
                            Developed by <a target="_blank" href="https://techsters.in/">Techsters</a>
                        </p>
                    </div>
                </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import PopUpFormEnrollVue from "@/components/PopUpEnrollment.vue";
import PopUpFormVue from "@/components/PopUpForm.vue";
// Data for programs and courses
// Select all elements with the open-popup class and the popup elements
</script>

<style>
.close-enroll {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}
.popup-enroll {
  display: none;
  /* Hidden by default */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  /* Semi-transparent background */
  z-index: 999999;
  justify-content: center;
  align-items: center;
  /* align-items: center; */
}

/* Popup content box */
.popup-content-enroll {
  background-color: #f5f5fe;
  border-radius: 8px;
  width: 30%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  position: relative;
}
.popup-content-enroll .contact__form__inner {
  padding: 20px;
}
.popup-content-enroll .contact__input__wraper input {
  height: auto;
  padding: 5px 20px;
  margin-bottom: 15px;
  border: 1px solid #68030b;
}
.popup-content-enroll .contact__input__wraper textarea {
  height: 100px !important;
  padding: 5px 20px !important;
  border: 1px solid #68030b;
}
.popup-content-enroll .contact__input__wraper .contact__icon {
  position: absolute;
  top: 7px;
  right: 24px;
}
.popup-content-enroll .contact__button {
  margin-top: 10px;
}
</style>
