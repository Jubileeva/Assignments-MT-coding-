let theme = document.documentElement;
// console.log(theme);
let btns = document.querySelectorAll(".btn");
// console.log(btns);

/*btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    let btnClass = e.currentTarget.classList;
    if(btnClass.contains("btn1")){
      theme.style.setProperty("--theme-color", "rgb(244, 151, 11)")
    }
  })
})*/

btns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    let btnClass = e.currentTarget.classList;
    if(btnClass.contains("btn1")){
      theme.style.setProperty("--theme-color", "rgb(244, 151, 11)")
    }
    else if(btnClass.contains("btn2")){
      theme.style.setProperty("--theme-color", "rgb(11, 108, 50)")
    }
    else if(btnClass.contains("btn3")){
      theme.style.setProperty("--theme-color", "rgb(185, 58, 143)")
    }
    else{
      theme.style.setProperty("--theme-color", "rgb(8, 8, 95)")
    }
  })
})

