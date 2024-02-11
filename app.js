let input1 = document.getElementById("inputOne");
let input2 = document.getElementById("inputTwo");
let input3 = document.getElementById("inputThree");
let input4 = document.getElementById("inputFour");
let buttonToggle = document.getElementById("buttonT");
let questionC = document.getElementById("questionCounter");
let ADtext = document.getElementById("Adtext");
let Bone = document.getElementById("Bone");
let Btwo = document.getElementById("Btwo");
let Bthree = document.getElementById("Bthree");
let Bfour = document.getElementById("Bfour");
let buttonC = document.getElementById("buttonC");
let quesyionP = document.getElementById("questionP");
let counter = 0;
let currentE = 0;
let TotalScore = 0;
let progress = document.querySelector(".progress-bar");
let ExamScoreR = document.getElementById("examScore");
let ExamScore = document.getElementById("background");
localStorage.setItem('Tscore' , JSON.stringify(TotalScore))
function exam1() {
  if (
    (input1.checked && input2.checked) ||
    (input3.checked && input4.checked) ||
    (input1.checked && input4.checked) ||
    (input2.checked && input3.checked) ||
    (input2.checked && input4.checked) ||
    (input1.checked && input3.checked) ||
    (input1.checked && input2.checked && input3.checked) ||
    (input4.checked && input3.checked && input2.checked) ||
    (input1.checked && input2.checked && input4.checked) ||
    (input4.checked && input3.checked && input1.checked) ||
    (input1.checked && input2.checked && input3.checked && input4.checked)
  ) {
    ADtext.textContent = " pick one option";
  } else {
    if (input1.checked || input2.checked || input3.checked || input4.checked) {
      counter++;
      buttonToggle.style.display = "none";
      buttonC.style.display = "block";
      if (counter === 1) {
        if (input1.checked) {
          currentE = currentE + 10;
          TotalScore = TotalScore + 10;
          localStorage.setItem('Tscore' , JSON.stringify(TotalScore))
          ADtext.textContent = "The Correct option was number 1";
          Bone.style.border = "solid 2px green";
          quesyionP.textContent =
            "Fuga consectetur corrupti excepturi rerum, doloribus similique quia! Deleniti!";
          questionC.textContent = "question 2 out of 10";
          progress.style.width = "10%";
        } else {
          ADtext.textContent = "The Correct option was number 1";
          Bone.style.border = "solid 2px green";
          quesyionP.textContent =
            "Fuga consectetur corrupti excepturi rerum, doloribus similique quia! Deleniti!";
          questionC.textContent = "question 2 out of 10";
          progress.style.width = "10%";
        }
      }
      if (counter === 2) {
        if (input2.checked) {
          currentE = currentE + 10;
          TotalScore = TotalScore + 10;
          localStorage.setItem('Tscore' , JSON.stringify(TotalScore))
          ADtext.textContent = "The Correct option was number 2";
          Btwo.style.border = "solid 2px green";
          quesyionP.textContent =
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, accusantium, omnis suscipit eius molestiae rem perspiciatis itaque sit dolor volu ?";
          questionC.textContent = "question 3 out of 10";
          progress.style.width = "20%";
        } else {
          ADtext.textContent = "The Correct option was number 2";
          Btwo.style.border = "solid 2px green";
          quesyionP.textContent =
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, accusantium, omnis suscipit eius molestiae rem perspiciatis itaque sit dolor volu ?";
          questionC.textContent = "question 3 out of 10";
          progress.style.width = "20%";
        }
      }
      if (counter === 3) {
        if (input3.checked) {
          currentE = currentE + 10;
          TotalScore = TotalScore + 10;
          localStorage.setItem('Tscore' , JSON.stringify(TotalScore))
          ADtext.textContent = "The Correct option was number 3";
          Bthree.style.border = "solid 2px green";
          quesyionP.textContent =
            "Fuga consectetur corrupti excepturi rerum, doloribus similique quia! Deleniti!";
          questionC.textContent = "question 4 out of 10";
          progress.style.width = "30%";
        } else {
          ADtext.textContent = "The Correct option was number 3";
          Bthree.style.border = "solid 2px green";
          quesyionP.textContent =
            "Fuga consectetur corrupti excepturi rerum, doloribus similique quia! Deleniti!";
          questionC.textContent = "question 4 out of 10";
          progress.style.width = "30%";
        }
      }
      if (counter === 4) {
        if (input4.checked) {
          currentE = currentE + 10;
          TotalScore = TotalScore + 10;
          localStorage.setItem('Tscore' , JSON.stringify(TotalScore))
          ADtext.textContent = "The Correct option was number 4";
          Bfour.style.border = "solid 2px green";
          quesyionP.textContent =
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, accusantium, omnis suscipit eius molestiae rem perspiciatis itaque sit dolor volu ?";
          questionC.textContent = "question 5 out of 10";
          progress.style.width = "40%";
        } else {
          ADtext.textContent = "The Correct option was number 4";
          Bfour.style.border = "solid 2px green";
          quesyionP.textContent =
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, accusantium, omnis suscipit eius molestiae rem perspiciatis itaque sit dolor volu ?";
          questionC.textContent = "question 5 out of 10";
          progress.style.width = "40%";
        }
      }
      if (counter === 5) {
        if (input1.checked) {
          currentE = currentE + 10;
          TotalScore = TotalScore + 10;
          localStorage.setItem('Tscore' , JSON.stringify(TotalScore))
          ADtext.textContent = "The Correct option was number 1";
          Bone.style.border = "solid 2px green";
          quesyionP.textContent =
            "Fuga consectetur corrupti excepturi rerum, doloribus similique quia! Deleniti!";
          questionC.textContent = "question 6 out of 10";
          progress.style.width = "50%";
        } else {
          ADtext.textContent = "The Correct option was number 1";
          Bone.style.border = "solid 2px green";
          quesyionP.textContent =
            "Fuga consectetur corrupti excepturi rerum, doloribus similique quia! Deleniti!";
          questionC.textContent = "question 6 out of 10";
          progress.style.width = "50%";
        }
      }
      if (counter === 6) {
        if (input2.checked) {
          currentE = currentE + 10;
          TotalScore = TotalScore + 10;
          localStorage.setItem('Tscore' , JSON.stringify(TotalScore))
          ADtext.textContent = "The Correct option was number 2";
          Btwo.style.border = "solid 2px green";
          quesyionP.textContent =
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, accusantium, omnis suscipit eius molestiae rem perspiciatis itaque sit dolor volu ?";
          questionC.textContent = "question 7 out of 10";
          progress.style.width = "60%";
        } else {
          ADtext.textContent = "The Correct option was number 2";
          Btwo.style.border = "solid 2px green";
          quesyionP.textContent =
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, accusantium, omnis suscipit eius molestiae rem perspiciatis itaque sit dolor volu ?!";
          questionC.textContent = "question 7 out of 10";
          progress.style.width = "60%";
        }
      }
      if (counter === 7) {
        if (input3.checked) {
          currentE = currentE + 10;
          TotalScore = TotalScore + 10;
          localStorage.setItem('Tscore' , JSON.stringify(TotalScore))
          ADtext.textContent = "The Correct option was number 3";
          Bthree.style.border = "solid 2px green";
          quesyionP.textContent =
            "Fuga consectetur corrupti excepturi rerum, doloribus similique quia! Deleniti!";
          questionC.textContent = "question 8 out of 10";
          progress.style.width = "70%";
        } else {
          ADtext.textContent = "The Correct option was number 3";
          Bthree.style.border = "solid 2px green";
          quesyionP.textContent =
            "Fuga consectetur corrupti excepturi rerum, doloribus similique quia! Deleniti!";
          questionC.textContent = "question 8 out of 10";
          progress.style.width = "70%";
        }
      }
      if (counter === 8) {
        if (input4.checked) {
          currentE = currentE + 10;
          TotalScore = TotalScore + 10;
          localStorage.setItem('Tscore' , JSON.stringify(TotalScore))
          ADtext.textContent = "The Correct option was number 4";
          Bfour.style.border = "solid 2px green";
          quesyionP.textContent =
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, accusantium, omnis suscipit eius molestiae rem perspiciatis itaque sit dolor volu ?";
          questionC.textContent = "question 9 out of 10";
          progress.style.width = "80%";
        } else {
          ADtext.textContent = "The Correct option was number 4";
          Bfour.style.border = "solid 2px green";
          quesyionP.textContent =
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, accusantium, omnis suscipit eius molestiae rem perspiciatis itaque sit dolor volu ?";
          questionC.textContent = "question 9 out of 10";
          progress.style.width = "80%";
        }
      }
      if (counter === 9) {
        if (input1.checked) {
          currentE = currentE + 10;
          TotalScore = TotalScore + 10;
          localStorage.setItem('Tscore' , JSON.stringify(TotalScore))
          ADtext.textContent = "The Correct option was number 1";
          Bone.style.border = "solid 2px green";
          quesyionP.textContent =
            "Fuga consectetur corrupti excepturi rerum, doloribus similique quia! Deleniti!";
          questionC.textContent = "question 10 out of 10";
          progress.style.width = "90%";
        } else {
          ADtext.textContent = "The Correct option was number 1";
          Bone.style.border = "solid 2px green";
          quesyionP.textContent =
            "Fuga consectetur corrupti excepturi rerum, doloribus similique quia! Deleniti!";
          questionC.textContent = "question 10 out of 10";
          progress.style.width = "90%";
        }
      }
      if (counter === 10) {
        if (input2.checked) {
          currentE = currentE + 10;
          TotalScore = TotalScore + 10;
          localStorage.setItem('Tscore' , JSON.stringify(TotalScore))
          ADtext.textContent = "The Correct option was number 2";
          Btwo.style.border = "solid 2px green";
          quesyionP.textContent =
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, accusantium, omnis suscipit eius molestiae rem perspiciatis itaque sit dolor volu ?";
          questionC.textContent = "question 10 out of 10";
          progress.style.width = "100%";
        } else {
          ADtext.textContent = "The Correct option was number 2";
          Btwo.style.border = "solid 2px green";
          quesyionP.textContent =
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, accusantium, omnis suscipit eius molestiae rem perspiciatis itaque sit dolor volu ?";
          questionC.textContent = "question 10 out of 10";
          progress.style.width = "100%";
        }
      }
      if (counter === 11) {
        ExamScore.style.display = "flex";
        ExamScoreR.textContent = currentE;
      }
    } else {
      ADtext.textContent = "at least pick one option ";
    }
  }
}
function Continue() {
  ADtext.textContent = "";
  input1.checked = false;
  input2.checked = false;
  input3.checked = false;
  input4.checked = false;
  buttonToggle.style.display = "block";
  buttonC.style.display = "none";
  Bone.style.border = "none";
  Btwo.style.border = "none";
  Bthree.style.border = "none";
  Bfour.style.border = "none";
}
