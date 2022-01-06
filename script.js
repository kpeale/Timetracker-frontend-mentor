// enable strict mode
"use strict";
// write variables you will use throughout file
const daily = document.querySelector(".section__body-containerdivp");
const weekly = document.querySelector(".section__body-containerdivp2");
const monthly = document.querySelector(".section__body-containerdivp3");
const workCurrent = document.querySelector(".work-current");
const workPrevious = document.querySelector(".work-previous");
const playCurrent = document.querySelector(".play-current");
const playPrevious = document.querySelector(".play-previous");
const studyCurrent = document.querySelector(".study-current");
const studyPrevious = document.querySelector(".study-previous");
const exerciseCurrent = document.querySelector(".exercise-current");
const exercisePrevious = document.querySelector(".exercise-previous");
const socialCurrent = document.querySelector(".social-current");
const socialPrevious = document.querySelector(".social-previous");
const selfcareCurrent = document.querySelector(".selfcare-current");
const selfcarePrevious = document.querySelector(".selfcare-previous");
// fetch
fetch("./data.json")
  .then(function (resp) {
    return resp.json();
  })
  .then(function (data) {
    console.log(data);
    const [work, play, study, exercise, social, selfcare] = data;
    console.log(work.timeframes);
    // work
    const {
      daily: { current: todayWork, previous: yesterdayWork },
    } = work.timeframes;
    console.log(todayWork, yesterdayWork);
    // play
    const {
      daily: { current: todayPlay, previous: yesterdayPlay },
    } = play.timeframes;
    console.log(todayPlay, yesterdayPlay);
    // study
    const {
      daily: { current: todayStudy, previous: yesterdayStudy },
    } = study.timeframes;
    console.log(todayStudy, yesterdayStudy);
    // exercise
    const {
      daily: { current: todayExercise, previous: yesterdayExercise },
    } = exercise.timeframes;
    console.log(todayExercise, yesterdayExercise);
    // social
    const {
      daily: { current: todaySocial, previous: yesterdaySocial },
    } = social.timeframes;
    console.log(todaySocial, yesterdaySocial);
    // selfcare
    const {
      daily: { current: todaySelfcare, previous: yesterdaySelfcare },
    } = selfcare.timeframes;
    console.log(todaySelfcare, yesterdaySelfcare);

    //  write event handler for click in daily
    daily.addEventListener("click", function () {
      // write code for javascript reading from json file
      // work

      workCurrent.textContent = `${todayWork} hrs`;
      workPrevious.textContent = `Yesterday - ${yesterdayWork} hrs`;
      // play
      playCurrent.textContent = `${todayPlay} hr`;
      playPrevious.textContent = `Yesterday - ${yesterdayPlay} hrs`;
      // study
      studyCurrent.textContent = `${todayStudy} hr`;
      studyPrevious.textContent = `Yesterday - ${yesterdayStudy} hrs`;
      // exercise
      exerciseCurrent.textContent = `${todayExercise} hr`;
      exercisePrevious.textContent = `Yesterday - ${yesterdayExercise} hr`;
      // social
      socialCurrent.textContent = `${todaySocial} hr`;
      socialPrevious.textContent = `Yesterday - ${yesterdaySocial} hr`;
      // selfcare
      selfcareCurrent.textContent = `${todaySelfcare} hr`;
      selfcarePrevious.textContent = `Yesterday - ${yesterdaySelfcare} hr`;
    });

    // destructuring weekly data
    // work for weekly
    const {
      daily: {},
      weekly: { current: thisWeekWork, previous: lastWeekWork },
    } = work.timeframes;
    console.log(thisWeekWork);
    // play for weekly
    const {
      daily: {},
      weekly: { current: thisWeekPlay, previous: lastWeekPlay },
    } = play.timeframes;
    // play for study
    const {
      daily: {},
      weekly: { current: thisWeekStudy, previous: lastWeekStudy },
    } = study.timeframes;
    // play for exercise
    const {
      daily: {},
      weekly: { current: thisWeekExercise, previous: lastWeekExercise },
    } = exercise.timeframes;
    // play for social
    const {
      daily: {},
      weekly: { current: thisWeekSocial, previous: lastWeekSocial },
    } = social.timeframes;
    // play for selfcare
    const {
      daily: {},
      weekly: { current: thisWeekSelfcare, previous: lastWeekSelfcare },
    } = selfcare.timeframes;
    // eventhandler for weekly
    weekly.addEventListener("click", function () {
      workCurrent.textContent = `${thisWeekWork} hrs`;
      workPrevious.textContent = `Last week - ${lastWeekWork} hrs`;
      // play
      playCurrent.textContent = `${thisWeekPlay} hrs`;
      playPrevious.textContent = `Last week - ${lastWeekPlay} hrs`;
      // study
      studyCurrent.textContent = `${thisWeekStudy} hrs`;
      studyPrevious.textContent = `Last week - ${lastWeekStudy} hrs`;
      // exercise
      exerciseCurrent.textContent = `${thisWeekExercise} hrs`;
      exercisePrevious.textContent = `Last week - ${lastWeekExercise} hrs`;
      // social
      socialCurrent.textContent = `${thisWeekSocial} hrs`;
      socialPrevious.textContent = `Last week - ${lastWeekSocial} hrs`;
      // selfcare
      selfcareCurrent.textContent = `${thisWeekSelfcare} hrs`;
      selfcarePrevious.textContent = `Last week - ${lastWeekSelfcare} hrs`;
    });

    // destructuring for monthly
    // month for work
    const {
      daily: {},
      weekly: {},
      monthly: { current: thisMonthWork, previous: lastMonthWork },
    } = work.timeframes;
    // month for play
    const {
      daily: {},
      weekly: {},
      monthly: { current: thisMonthPlay, previous: lastMonthPlay },
    } = play.timeframes;
    // month for study
    const {
      daily: {},
      weekly: {},
      monthly: { current: thisMonthStudy, previous: lastMonthStudy },
    } = study.timeframes;
    // month for exercise
    const {
      daily: {},
      weekly: {},
      monthly: { current: thisMonthExercise, previous: lastMonthExercise },
    } = exercise.timeframes;
    // month for social
    const {
      daily: {},
      weekly: {},
      monthly: { current: thisMonthSocial, previous: lastMonthSocial },
    } = social.timeframes;
    // month for selfcare
    const {
      daily: {},
      weekly: {},
      monthly: { current: thisMonthSelfcare, previous: lastMonthSelfcare },
    } = selfcare.timeframes;

    // eventhandler for monthly
    monthly.addEventListener("click", function () {
      workCurrent.textContent = `${thisMonthWork} hrs`;
      workPrevious.textContent = `Last week - ${lastMonthWork} hrs`;
      // play
      playCurrent.textContent = `${thisMonthPlay} hrs`;
      playPrevious.textContent = `Last week - ${lastMonthPlay} hrs`;
      // study
      studyCurrent.textContent = `${thisMonthStudy} hrs`;
      studyPrevious.textContent = `Last week - ${lastMonthStudy} hrs`;
      // exercise
      exerciseCurrent.textContent = `${thisMonthExercise} hrs`;
      exercisePrevious.textContent = `Last week - ${lastMonthExercise} hrs`;
      // social
      socialCurrent.textContent = `${thisMonthSocial} hrs`;
      socialPrevious.textContent = `Last week - ${lastMonthSocial} hrs`;
      // selfcare
      selfcareCurrent.textContent = `${thisMonthSelfcare} hrs`;
      selfcarePrevious.textContent = `Last week - ${lastMonthSelfcare} hrs`;
    });
  });
