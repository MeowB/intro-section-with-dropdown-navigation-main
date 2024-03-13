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
  if (featureItems.classList.contains("show")) {
    featureItems.style.visibility = "visible";
	setTimeout(() => {
		featureItems.style.opacity = 1
	}, 0)
  } else {
    featureItems.style.visibility = "hidden";
	setTimeout(() => {
		featureItems.style.opacity = 0
	}, 0)
  }
});

companyBtn.addEventListener("click", () => {
	companyItems.classList.toggle("show");
	if (companyItems.classList.contains("show")) {
	  companyItems.style.visibility = "visible";
	  setTimeout(() => {
		  companyItems.style.opacity = 1
	  }, 0)
	} else {
	  companyItems.style.visibility = "hidden";
	  setTimeout(() => {
		  companyItems.style.opacity = 0
	  }, 0)
	}
  });
  
// Dropdown Menus end