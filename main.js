const featureBtn = document.querySelector("#features-btn");
const featureItems = document.querySelector("#features-items");
const companyBtn = document.querySelector("#company-btn");
const companyItems = document.querySelector("#company-items");
const xMark = document.querySelector("#x-mark")
const hamburger = document.querySelector("#hamburger")


hamburger.addEventListener("click", () => {
	const sliderMenu = document.querySelector(".wrapper")

	sliderMenu.style.display = "inline"
})

xMark.addEventListener("click", () => {
	const sliderMenu = document.querySelector(".wrapper")

	sliderMenu.style.display = "none"
})

// Dropdown Menus start

featureBtn.addEventListener("click", () => {
  featureItems.classList.toggle("show");
  const featuresArrow = document.querySelector("#features-btn img");
  console.log()
  if (featureItems.classList.contains("show")) {
    featureItems.style.visibility = "visible";
	featuresArrow.src = "./images/icon-arrow-up.svg"
	setTimeout(() => {
		featureItems.style.opacity = 1
	}, 0)
  } else {
    featureItems.style.visibility = "hidden";
	featuresArrow.src = "./images/icon-arrow-down.svg"
	setTimeout(() => {
		featureItems.style.opacity = 0
	}, 0)
  }
});

companyBtn.addEventListener("click", () => {
	companyItems.classList.toggle("show");
	const companyArrow = document.querySelector("#company-btn img");
	if (companyItems.classList.contains("show")) {
	  companyItems.style.visibility = "visible";
	  companyArrow.src = "./images/icon-arrow-up.svg"
	  setTimeout(() => {
		  companyItems.style.opacity = 1
	  }, 0)
	} else {
	  companyItems.style.visibility = "hidden";
	  companyArrow.src = "./images/icon-arrow-down.svg"
	  setTimeout(() => {
		  companyItems.style.opacity = 0
	  }, 0)
	}
  });
  
// Dropdown Menus end