const thisYearTxt = document.querySelector(".this-year")
const thisYear = new Date().getFullYear()
const dayTxt = document.querySelector(".day")
// const monthTxt = document.querySelector(".month")
const hourTxt = document.querySelector(".hour")
const minuteTxt = document.querySelector(".minute")
const secondTxt = document.querySelector(".second")

// display current yearto the website
thisYearTxt.innerText = thisYear

// count down to target date
const targetDate = new Date(`dec 30, ${thisYear} 00:00:00`).getTime()
setInterval(() => {
  // getcurrent date
  const now = new Date().getTime()
  // distance between now and target date
  const distance = targetDate - now

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element
  dayTxt.innerText = `${days} days`
  hourTxt.innerText = `${hours} hours`
  minuteTxt.innerText = `${minutes} minutes`
  secondTxt.innerText = `${seconds} s`
}, 1000)
