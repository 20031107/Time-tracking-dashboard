const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const workHours = document.getElementById('workhrs');
const workWeek = document.getElementById('workweek');
const playHours = document.getElementById('playhrs');
const playWeek = document.getElementById('playweek');
const studyHours = document.getElementById('studyhrs');
const studyWeek = document.getElementById('studyweek');
const exerciseHours= document.getElementById('exercisehrs');
const exerciseWeek = document.getElementById('exerciseweek');
const socialHours = document.getElementById('socialhrs');
const socialWeek= document.getElementById('socialweek');
const careHours= document.getElementById('carehrs');
const careWeek= document.getElementById('careweek');

//forWork

function forWorkDaily(data) {
    if (data[0].title === 'Work') {
      workHours.innerText = `${data[0].timeframes.daily.previous}hrs`;
      workWeek.innerText = `Yesterday -${data[0].timeframes.daily.previous} hrs`
    }
  }
  
  function forWorkWeekly(data) {
    if (data[0].title === 'Work') {
      workHours.innerText = `${data[0].timeframes.weekly.previous}hrs`;
      workWeek.innerText = ` Last Week -${data[0].timeframes.weekly.previous} hrs`;
    }
  }

    
  function forWorkMonthly(data) {
    if (data[0].title === 'Work') {
      workHours.innerText = `${data[0].timeframes.monthly.previous}hrs`;
      workWeek.innerText = ` Last Month -${data[0].timeframes.monthly.previous} hrs`;
    }
  }

  //for Play

  function forPlayDaily(data) {
    if (data[1].title === 'Play') {
      playHours.innerText = `${data[1].timeframes.daily.previous}hrs`;
      playWeek.innerText = `Yesterday - ${data[1].timeframes.daily.previous} hrs`
    }
  }
  
  function forPlayWeekly(data) {
    if (data[1].title === 'Play') {
      playHours.innerText = `${data[1].timeframes.weekly.previous}hrs`;
      playWeek.innerText = ` Last Week - ${data[1].timeframes.weekly.previous} hrs`;
    }
  }

    
  function forPlayMonthly(data) {
    if (data[1].title === 'Play') {
      playHours.innerText = `${data[1].timeframes.monthly.previous}hrs`;
      playWeek.innerText = ` Last Month - ${data[1].timeframes.monthly.previous} hrs`;
    }
  }

    //for Study

    function forStudyDaily(data) {
      if (data[2].title === 'Study') {
        studyHours.innerText = `${data[2].timeframes.daily.previous}hr`;
        studyWeek.innerText = `Yesterday - ${data[2].timeframes.daily.previous} hr`
      }
    }
    
    function forStudyWeekly(data) {
      if (data[2].title === 'Study') {
        studyHours.innerText = `${data[2].timeframes.weekly.previous} hrs`;
        studyWeek.innerText = ` Last Week -${data[2].timeframes.weekly.previous} hrs`;
      }
    }
  
      
    function forStudyMonthly(data) {
      if (data[2].title === 'Study') {
        studyHours.innerText = `${data[2].timeframes.monthly.previous} hrs`;
        studyWeek.innerText = ` Last Month -${data[2].timeframes.monthly.previous} hrs`;
      }
    }

    // for exercise

    
    function forExerciseDaily(data) {
      if (data[3].title === 'Exercise') {
        exerciseHours.innerText = `${data[3].timeframes.daily.previous}hr`;
        exerciseWeek.innerText = `Yesterday - ${data[3].timeframes.daily.previous} hr`
      }
    }
    
    function forExerciseWeekly(data) {
      if (data[3].title === 'Exercise') {
        exerciseHours.innerText = `${data[3].timeframes.weekly.previous}hrs`;
        exerciseWeek.innerText = ` Last Week - ${data[3].timeframes.weekly.previous} hrs`;
      }
    }
  
      
    function forExerciseMonthly(data) {
      if (data[3].title === 'Exercise') {
        exerciseHours.innerText = `${data[3].timeframes.monthly.previous}hrs`;
        exerciseWeek.innerText = ` Last Month - ${data[3].timeframes.monthly.previous} hrs`;
      }
    }
  
    // for social

      
    function forSocialDaily(data) {
      if (data[4].title === 'Social') {
        socialHours.innerText = `${data[4].timeframes.daily.previous}hrs`;
        socialWeek.innerText = `Yesterday - ${data[4].timeframes.daily.previous} hrs`
      }
    }
    
    function forSocialWeekly(data) {
      if (data[4].title === 'Social') {
        socialHours.innerText = `${data[4].timeframes.weekly.previous}hrs`;
        socialWeek.innerText = ` Last Week - ${data[4].timeframes.weekly.previous} hrs`;
      }
    }
  
      
    function forSocialMonthly(data) {
      if (data[4].title === 'Social') {
        socialHours.innerText = `${data[4].timeframes.monthly.previous}hrs`;
        socialWeek.innerText = ` Last Month - ${data[4].timeframes.monthly.previous} hrs`;
      }
    }

    function forCareDaily(data) {
      if (data[5].title === 'Self Care') {
        careHours.innerText = `${data[5].timeframes.daily.previous}hr`;
        careWeek.innerText = `Yesterday - ${data[5].timeframes.daily.previous} hr`
      }
    }
    
    function forCareWeekly(data) {
      if (data[5].title === 'Self Care') {
        careHours.innerText = `${data[5].timeframes.weekly.previous}hrs`;
        careWeek.innerText = ` Last Week - ${data[5].timeframes.weekly.previous} hrs`;
      }
    }
  
      
    function forCareMonthly(data) {
      if (data[5].title === 'Self Care') {
        careHours.innerText = `${data[5].timeframes.monthly.previous}hrs`;
        careWeek.innerText = ` Last Month - ${data[5].timeframes.monthly.previous} hrs`;
      }
    }





  
  fetch('./data.json')
    .then((response) => response.json())
    .then((data) => {
      daily.addEventListener('click', () => {
        forWorkDaily(data);
        forPlayDaily(data);
        forStudyDaily(data);
        forExerciseDaily(data);
        forSocialDaily(data);
        forCareDaily(data);
      });
      weekly.addEventListener('click', () => {
        forWorkWeekly(data);
        forPlayWeekly(data);
        forStudyWeekly(data);
        forExerciseWeekly(data)
        forSocialWeekly(data);
        forCareWeekly(data);
      });
      monthly.addEventListener('click', () => {
        forWorkMonthly(data);
        forPlayMonthly(data);
        forStudyMonthly(data);
        forExerciseMonthly(data);
        forSocialMonthly(data);
        forCareMonthly(data);
      });
    });

      
      // i am still learning with javascript this is probably some long unreuseable code but im glad it worked.. looking forward to better ways to make my codes more reuseable. THANK YOU!

















