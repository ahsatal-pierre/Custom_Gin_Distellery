//DOMContentLoaded to make it all load before running, else it would run before loading some assets inside the buttons and spit errors.

let solutionArray = [];

document.addEventListener("DOMContentLoaded", function () {
  var acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");

      // panel = nextSibling from button (content box)

      var panel = this.nextElementSibling;
      //if onclick acc[i]'s css style is maxHeigth indicating its open, and has active class then turn it to null i.e close, else open.
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  }
  //Click me title  brings to button and adds class active
  let h1Acc = document.getElementById("h1Acc");
  let firstButtonClick = document.getElementById("box1");
  let accordionBox = document.querySelector(".accordionBox");
  let resultDiv = document.getElementById("result");

  h1Acc.onclick = function () {
    solutionArray = [];
    firstButtonClick.classList.toggle("active");
    h1Acc.innerHTML = "<h4>Do it again</h4>";
    h1Acc.classList.add("dp-none");
    resultDiv.classList.add("dp-none");
    accordionBox.classList.toggle("dp-none");

    //gives panel firstbuttonclick is prevsibling
    var firstSelection = firstButtonClick.nextElementSibling;

    if (firstSelection.style.maxHeight) {
      firstSelection.style.maxHeight = null;
    } else {
      firstSelection.style.maxHeight = firstSelection.scrollHeight + "px";
    }
  };
  // iterate through all images, onclick toggle previous button class inactive
  let picc = document.getElementsByClassName("accImage");
  for (let i = 0; i < picc.length; i++) {
    picc[i].style.cursor = "pointer";
    picc[i].addEventListener("click", function (event) {
      solutionArray.push(event.target.id);
      console.log(solutionArray);
      // call solution if all answered ; display solution and hide quiz
      if (solutionArray.length === 5) {
        accordionBox.classList.toggle("dp-none");
        resultDiv.classList.toggle("dp-none");
        h1Acc.classList.toggle("dp-none");
        solution();
      }

      let currentButton = this.parentElement.previousElementSibling;
      currentButton.classList.toggle("active");

      // close current panel
      var panel = this.parentElement;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }

      //open next button
      currentButton.nextElementSibling.classList.toggle("active");

      //open next panel
      var nextPanel =
        currentButton.nextElementSibling.nextElementSibling.nextElementSibling;

      if (nextPanel.style.maxHeight) {
        nextPanel.style.maxHeight = null;
      } else {
        nextPanel.style.maxHeight = nextPanel.scrollHeight + "px";
      }
    });
  }

  const ginTypes = [
    {
      nr: 1,
      name: "Flat Liner",
      ingrediants: ["neutral", "low", "fruity", "simple", "none"],
      caregory: "bad",
      catchphrase:
        "Please try some adult drinks first. This should never happen again.",
    },
    {
      nr: 2,
      name: "Over the Top",
      ingrediants: ["flavoured", "low", "spicy & herbal", "complex", "none"],
      caregory: "okay",
      catchphrase:
        "Please try some adult drinks first. This should never happen again.",
    },
    {
      nr: 3,
      name: "Always Yes",
      ingrediants: ["neutral", "low", "rooty", "simple", "none"],
      caregory: "okay",
      catchphrase: "Fits in every situation, like bad breath.",
    },
    {
      nr: 4,
      name: "No idea, but yes!",
      ingrediants: ["flavoured", "medium", "fruity", "simple", "barrel aged"],
      caregory: "",
      catchphrase: "Never tasted something like this before, but cool.",
    },
    {
      nr: 5,
      name: "Spicy Desert Monkey",
      ingrediants: ["neutral", "low", "spicy & herbal", "complex", "none"],
      caregory: "good",
      catchphrase: "It's like a party of every spice in the world at once.",
    },
    {
      nr: 6,
      name: "Heavy Metal",
      ingrediants: ["flavoured", "strong", "rooty", "complex", "none"],
      caregory: "okay",
      catchphrase:
        "Can't stand this for long, but when I survive it, I level up",
    },
    {
      nr: 7,
      name: "Flower Lover",
      ingrediants: ["neutral", "medium", "spicy & herbal", "simple", "none"],
      caregory: "okay",
      catchphrase: "Did you ever eat a flower before? You don't need anymore.",
    },
    {
      nr: 8,
      name: "Hell of a Gin",
      ingrediants: ["flavoured", "strong", "rooty", "complex", "barrel aged"],
      caregory: "bad",
      catchphrase: "Holy Moly! It's like Heavy Metal, without happy ending.",
    },
    {
      nr: 9,
      name: "Best choise out of one",
      ingrediants: [
        "neutral",
        "low",
        "spicy & herbal",
        "simple",
        "barrel aged",
      ],
      caregory: "bad",
      catchphrase:
        "Consider to choose something else. Did you try drinking bleach? ",
    },
    {
      nr: 10,
      name: "/*too old*/",
      ingrediants: ["flavoured", "medium", "spicy & herbal", "simple", "none"],
      caregory: "bad",
      catchphrase: "This Gin taste like something Queen Mom would drink.",
    },
    {
      nr: 11,
      name: "Bubble Gum",
      ingrediants: ["neutral", "strong", "fruity", "complex", "none"],
      caregory: "bad",
      catchphrase:
        "You know this candy with a special taste, you swear to god to never eat again? It's like this.",
    },
    {
      nr: 12,
      name: "Gods Ambrosia",
      ingrediants: [
        "flavoured",
        "medium",
        "spicy & herbal",
        "complex",
        "barrel aged",
      ],
      caregory: "good",
      catchphrase:
        "With your golden tongue and depp knowledge you have proven to be a heavenly good.",
    },
    {
      nr: 13,
      name: "Could be Vodka",
      ingrediants: ["neutral", "low", "spicy & herbal", "simple", "none"],
      caregory: "bad",
      catchphrase: "Did you realy try? I mean, come on...",
    },
    {
      nr: 14,
      name: "Normal Gin",
      ingrediants: ["neutral", "medium", "rooty", "simple", "none"],
      caregory: "okay",
      catchphrase: "BORING! Please try again. And again.",
    },
    {
      nr: 15,
      name: "What is this?",
      ingrediants: ["flavoured", "medium", "rooty", "simple", "barrel aged"],
      caregory: "bad",
      catchphrase: "You can drink it, but try first please!",
    },
    {
      nr: 16,
      name: "Going to be extinct",
      ingrediants: ["", "", "", "", ""],
      caregory: "no way",
      catchphrase:
        "I'm not happy with it, but someone has to tell you: you are bad at this.",
    },
  ];

  function solution() {
    function arrayMatch(selectedArray, ginTypeArray) {
      let arr = []; // Array to contain match elements
      for (var i = 0; i < selectedArray.length; ++i) {
        for (var j = 0; j < ginTypeArray.length; ++j) {
          if (selectedArray[i] == ginTypeArray[j]) {
            // If element is in both the arrays
            arr.push(selectedArray[i]); // Push to arr array
          }
        }
      }
      return arr; // Return the arr elements
    }

    let matches = {};
    for (let i = 0; i < ginTypes.length; i++) {
      matches[`${ginTypes[i].nr}`] = arrayMatch(
        solutionArray,
        ginTypes[i].ingrediants
      );
    }

    let bestMatch = [0, []];
    for (match in matches) {
      if (matches[match].length > bestMatch[1].length) {
        bestMatch[0] = match - 1;
        bestMatch[1] = matches[match];
      }
    }
    if (bestMatch[1].length < 5) {
      ginTypes[15].ingrediants = solutionArray;
      bestMatch[0] = 15;
    }

    const ginTitle = document.getElementById("result-title");
    const ginImg = document.getElementById("result-image");
    const ginCategory = document.getElementById("result-category");
    const ingr1 = document.getElementById("ingr1");
    const ingr2 = document.getElementById("ingr2");
    const ingr3 = document.getElementById("ingr3");
    const ingr4 = document.getElementById("ingr4");
    const ingr5 = document.getElementById("ingr5");
    const ginCatch = document.getElementById("result-catchphrase");
    ginTitle.innerHTML = ginTypes[bestMatch[0]].name;
    ginCategory.innerHTML = ginTypes[bestMatch[0]].caregory;
    ginCatch.innerHTML = ginTypes[bestMatch[0]].catchphrase;
    ingr1.innerHTML = "Alcohol Type: " + ginTypes[bestMatch[0]].ingrediants[0];
    ingr2.innerHTML = "Juniper Berrys: " + ginTypes[bestMatch[0]].ingrediants[1];
    ingr3.innerHTML = "Body Flavour: " + ginTypes[bestMatch[0]].ingrediants[2];
    ingr4.innerHTML = "Complexcity: " + ginTypes[bestMatch[0]].ingrediants[3];
    ingr5.innerHTML = "Aged: " + ginTypes[bestMatch[0]].ingrediants[4];
  }
});

// iterate through all images, onclick toggle previous button class inactive
// let picc = document.getElementsByClassName("accImage");
// for (let i = 0; i < picc.length; i++) {
//   picc[i].addEventListener("click", function () {
//     let currentButton =
//       this.parentElement.parentElement.previousElementSibling;
//     currentButton.classList.toggle("active");

// this.nextElementSibling.classList.toggle("active");

// go to next step

//add an event listener for the option / when clicked store something in a variable
// close this collapsible and open next one

// document.addEventListener("DOMContentLoaded", function () {
//   console.log("test log");
//   var elems = document.querySelectorAll(".collapsible");
//   var instances = M.Collapsible.init(elems, {
//     inDuration: 400,
//     outDuration: 250,
//   });
// });
