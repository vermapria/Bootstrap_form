document.addEventListener("DOMContentLoaded", function () {
  let userSlider = document.getElementById("userSlider");
  let userCount = document.getElementById("userCount");

  userSlider.addEventListener("input", function () {
    let value = parseInt(userSlider.value);
    userCount.textContent = value;
    highlightPricingPlan(value);
  });

  function highlightPricingPlan(users) {
    let plans = document.querySelectorAll(".card.box-shadow");

    for (let i = 0; i < plans.length; i++) {
      plans[i].classList.remove("border-primary");
    }

    if (users >= 0 && users < 10) {
      plans[0].classList.add("border-primary");
    } else if (users >= 10 && users <= 20) {
      plans[1].classList.add("border-primary");
    } else {
      plans[2].classList.add("border-primary");
    }
  }
});

js;
