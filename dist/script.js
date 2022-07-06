"use strict";

var videoArray = [{
  videoThumbnail: "./assets/images/all/thumbnail-1.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/1.mp4",
  videoChannelImg: "../assets/images/all/channel-1.jpg",
  videoTitle: "Marvel's 616 | Official Trailer |<span class='video__second-title'> Disney+ Marvel Entertainment</span>",
  videoChannelName: "Marvel Entertainment",
  videoViews: "8.5M",
  videoTimeStamp: "1 year ago"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-2.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/2.mp4",
  videoChannelImg: "../assets/images/all/channel-2.jpg",
  videoTitle: "Sydney Sweeney Discusses the Memeification of Euphoria ",
  videoChannelName: "Jimmy Fallon show",
  videoViews: "1.3M",
  videoTimeStamp: "4 months"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-3.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/3.mp4",
  videoChannelImg: "../assets/images/all/channel-3.jpg",
  videoTitle: " America Chavez Coming To Avengers Campus ",
  videoChannelName: " Disney Parks",
  videoViews: "200K",
  videoTimeStamp: "3 weeks"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-4.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/4.mp4",
  videoChannelImg: "../assets/images/all/channel-4.jpg",
  videoTitle: "Doctor Strange in the Multiverse of Madness Premiere Red Carpet",
  videoChannelName: "  Stage Secrets",
  videoViews: "269K",
  videoTimeStamp: "3 weeks"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-5.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/5.mp4",
  videoChannelImg: "../assets/images/all/channel-5.jpg",
  videoTitle: "Mission Impossible: Dead Reckoning Part One - Official Teaser Trailer(2023) Tom Cruise, Simon Pegg",
  videoChannelName: " IGN ",
  videoViews: "432K ",
  videoTimeStamp: "1 day"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-6.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/6.mp4",
  videoChannelImg: "../assets/images/all/channel-6.jpg",
  videoTitle: " 1 Year of Coding in 5 Minutes (Computer Science First Year)",
  videoChannelName: " Frying Pan",
  videoViews: "2.6M",
  videoTimeStamp: "11 months"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-7.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/7.mp4",
  videoChannelImg: "../assets/images/all/channel-1.jpg",
  videoTitle: " Marvel Studios' Thor: Love and Thunder",
  videoChannelName: "Marvel Entertainment",
  videoViews: "12.5M",
  videoTimeStamp: "2 months"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-8.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/5.mp4",
  videoChannelImg: "../assets/images/all/channel-8.jpg",
  videoTitle: "THE GRAY MAN | Official Trailer | Netflix",
  videoChannelName: " Netflix",
  videoViews: "6.5M",
  videoTimeStamp: "21 hours"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-9.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/9.mp4",
  videoChannelImg: "../assets/images/all/channel-9.jpg",
  videoTitle: "MISSION IMPOSSIBLE 7 DEAD RECKONING Part 1 Trailer (2023)",
  videoChannelName: "ONE Media",
  videoViews: "1.7M",
  videoTimeStamp: "1 weeks"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-10.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/10.mp4",
  videoChannelImg: "../assets/images/all/channel-10.jpg",
  videoTitle: "   Phone, keys... Google Wallet | Google",
  videoChannelName: " Google",
  videoViews: "301K",
  videoTimeStamp: "15 days"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-11.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/11.mp4",
  videoChannelImg: "../assets/images/all/channel-11.jpg",
  videoTitle: " What will happen if you plank every day for 1 minute",
  videoChannelName: "Body Hub",
  videoViews: "17M",
  videoTimeStamp: "2 years"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-12.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/12.mp4",
  videoChannelImg: "../assets/images/all/channel-12.jpg",
  videoTitle: " The Inquisitor - Official Reveal Trailer",
  videoChannelName: "IGN",
  videoViews: "246K",
  videoTimeStamp: "2 weeks"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-13.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/13.mp4",
  videoChannelImg: "../assets/images/all/channel-13.jpg",
  videoTitle: "iPhone 13 mini 7 Months Later - 3 Reasons to Buy One NOW!!",
  videoChannelName: "JSL Review",
  videoViews: " 7.9K",
  videoTimeStamp: "1weeks"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-14.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/14.mp4",
  videoChannelImg: "../assets/images/all/channel-14.jpg",
  videoTitle: "Hailey Bieber Gasped When She Saw Emma's Look | Met Gala 2022 With Emma Chamberlain | Vogue",
  videoChannelName: "Vogue",
  videoViews: "5.6M",
  videoTimeStamp: "2 weeks"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-15.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/15.mp4",
  videoChannelImg: "../assets/images/all/channel-15.jpg",
  videoTitle: "Uncharted | Car Wash I 2022 TUCSON | Hyundai",
  videoChannelName: "  Hyundai Worldwide",
  videoViews: "1.4M",
  videoTimeStamp: "3 months"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-16.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/16.mp4",
  videoChannelImg: "../assets/images/all/channel-16.jpg",
  videoTitle: " Sergio Perez Drives F1 Car Through New York City",
  videoChannelName: "red bull",
  videoViews: "1.2M",
  videoTimeStamp: " 7 days"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-17.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/17.mp4",
  videoChannelImg: "../assets/images/all/channel-17.jpg",
  videoTitle: "British Airways safety video - director's cut",
  videoChannelName: " British Airways",
  videoViews: "21M ",
  videoTimeStamp: "4 years"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-18.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/18.mp4",
  videoChannelImg: "../assets/images/all/channel-18.jpg",
  videoTitle: " Jimmie Johnson and Fernando Alonso car swap",
  videoChannelName: "McLaren",
  videoViews: "4.9M",
  videoTimeStamp: "3 yearss"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-19.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/19.mp4",
  videoChannelImg: "../assets/images/all/channel-19.jpg",
  videoTitle: "THE BOYS – Season 3 Official Trailer | ",
  videoChannelName: "Prime Video",
  videoViews: "4.5M ",
  videoTimeStamp: "8 days"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-20.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/20.mp4",
  videoChannelImg: "../assets/images/all/channel-20.jpg",
  videoTitle: " The new BMW 3 Series",
  videoChannelName: " BMW",
  videoViews: " 359K",
  videoTimeStamp: "2 weeks"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-21.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/21.mp4",
  videoChannelImg: "../assets/images/all/channel-21.jpg",
  videoTitle: "Formula 1 Car v Tesla Model S | DRAG RACE ",
  videoChannelName: " Driven Media",
  videoViews: "1.2M ",
  videoTimeStamp: "10 months"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-22.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/22.mp4",
  videoChannelImg: "../assets/images/all/channel-22.jpg",
  videoTitle: " How Chefs In The NBA Bubble Make 4,000 Meals A Week",
  videoChannelName: "Business Insider",
  videoViews: "11M ",
  videoTimeStamp: "1 year"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-25.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/25.mp4",
  videoChannelImg: "../assets/images/all/channel-25.jpg",
  videoTitle: "  Cha Cha Real Smooth — Official Trailer | Apple TV+ ",
  videoChannelName: "  Apple TV",
  videoViews: "3.4M",
  videoTimeStamp: "12 days"
}, {
  videoThumbnail: "./assets/images/all/thumbnail-24.jpg",
  videoTime: "2:34",
  video: "./assets/videos/all/24.mp4",
  videoChannelImg: "../assets/images/all/channel-24.jpg",
  videoTitle: " One Direction - Night Changes",
  videoChannelName: " One Direction",
  videoViews: "521M",
  videoTimeStamp: "7 years"
}];
videoArray.sort(function () {
  return 0.5 - Math.random();
});
window.addEventListener("DOMContentLoaded", createVideo); // ============== Rendering Videos ==================

var videosGird = document.querySelector(".videos-grid");

function createVideo() {
  videoArray.forEach(function (item) {
    var video = document.createRange().createContextualFragment("\n    <div class=\"video\">\n    <div class=\"video__main-box\">\n      <div class=\"video__thumbnail-box\">\n        <img class=\"video__thumbnail\" src=\"".concat(item.videoThumbnail, "\">\n        <video class='video__video'  src=\"").concat(item.video, "\"></video>\n        <span class=\"video__duration\">1:03</span>\n      </img>\n    </div>\n    <div class=\"video__info\">\n      <img class=\"video__channel-img\" src=\"").concat(item.videoChannelImg, "\" alt=\"\">        \n      <div class=\"video__description\">\n      <h4 class=\" video__title\">\n        ").concat(item.videoTitle, "\n      </h4>\n      <p class=\"video__channel-name\">\n        ").concat(item.videoChannelName, "\n        <span class=\"material-symbols-outlined video__channel-verified\"> check_circle </span>\n      </p> \n      <p class=\"video__footer\">\n        <span class=\"video__views\"> ").concat(item.videoViews, " views | </span> \n        <span class=\"video__time-stamp\"> ").concat(item.videoTimeStamp, " ago </span></p> \n      </div>\n      <button class=\"options-btn\">\n        <span class=\"material-symbols-outlined\"> more_vert </span>\n      </button>\n    </div>\n    <div class=\"video__btns btns-active\">\n      <button  class=\"video__btn\">\n        \n        <svg\n  viewBox=\"0 0 24 24\"\n  preserveAspectRatio=\"xMidYMid meet\"\n  focusable=\"false\"\n  class=\"style-scope yt-icon\"\n>\n  <g class=\"style-scope yt-icon\">\n    <path\n      d=\"M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z\"\n      class=\"style-scope yt-icon\"\n    ></path>\n  </g>\n           </svg>  \n      <span class=\"video__btn-name\">watch-later</span>  </button>\n      <button class=\"video__btn\"> <span class=\"material-symbols-outlined video__btn-icon\">\n        playlist_play\n        </span> <span> add to queue</span></button>\n    </div>\n    </div>\n  </div>"));
    videosGird.appendChild(video);
  });
} // ============== Nav toggle Functionality ==================


var appDrawer = document.querySelector(".app-drawer-wrapper");
var navToggler = document.querySelector(".nav-toggler");
var appMini = document.querySelector(".app-mini");
navToggler.addEventListener("click", function () {
  appDrawer.classList.toggle("app-drawer-not-active");
  appMini.classList.toggle("app-mini-active");
});
window.addEventListener("resize", function () {
  window.innerWidth <= 1330 ? appDrawer.classList.add("app-drawer-not-active") : appDrawer.classList.remove("app-drawer-not-active");
  window.innerWidth <= 680 ? appMini.classList.add("app-mini-not-active") : appMini.classList.remove("app-mini-not-active");

  if (window.innerWidth <= 1330) {
    navToggler.addEventListener("focus", function () {
      return appDrawer.classList.remove("app-drawer-not-active");
    });
    navToggler.addEventListener("blur", function () {
      return appDrawer.classList.add("app-drawer-not-active");
    });
  }
}); // ============== Tags slider ==================

var leftArrow = document.querySelector("#arrow-left");
var rightArrow = document.querySelector("#arrow-right");
var slider = document.querySelector(".tags-list");
var sliderIndex = parseInt(getComputedStyle(slider).getPropertyValue("--slider-index"));
rightArrow.addEventListener("click", function () {
  slider.style.setProperty("--slider-index", ++sliderIndex);
  console.log(sliderIndex);
  checkSliderIndex();
});
leftArrow.addEventListener("click", function () {
  slider.style.setProperty("--slider-index", --sliderIndex);
  console.log(sliderIndex);
  checkSliderIndex();
});

function checkSliderIndex() {
  sliderIndex >= 1 ? leftArrow.classList.remove("arrow-hide") : leftArrow.classList.add("arrow-hide");
} // ============= VIDEO PLAY ON HOVER ================


setTimeout(function () {
  // const videos = document.querySelectorAll(".video__video");
  var thumbnails = document.querySelectorAll(".video__thumbnail");
  thumbnails.forEach(function (thumbnail) {
    thumbnail.addEventListener("mouseenter", function () {
      thumbnail.muted = true;
      thumbnail.nextElementSibling.play();
    });
    thumbnail.addEventListener("mouseleave", function () {
      thumbnail.nextElementSibling.pause();
      thumbnail.nextElementSibling.currentTime = 0;
    });
  });
  console.log("loaded");
}, 15000);
//# sourceMappingURL=script.js.map