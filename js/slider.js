let reviews=document.querySelectorAll(".review__item"),buttonPrev=document.querySelector(".review__prev"),buttonNext=document.querySelector(".review__next"),number=0;buttonNext.addEventListener("click",(()=>{number<reviews.length-1&&(reviews[number].classList.add("review__item--hidden"),reviews[number+1].classList.remove("review__item--hidden"),number+=1,number===reviews.length-1?buttonNext.setAttribute("disabled","disabled"):buttonPrev.removeAttribute("disabled","disabled"))})),buttonPrev.addEventListener("click",(()=>{number>0&&(reviews[number].classList.add("review__item--hidden"),reviews[number-1].classList.remove("review__item--hidden"),number-=1,0===number?buttonPrev.setAttribute("disabled","disabled"):buttonNext.removeAttribute("disabled","disabled"))}));