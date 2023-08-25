const id = document.querySelector("#username");
const idCheck = document.querySelector("#idCheck");
const password = document.querySelector("#password");
const pwCheck = document.querySelector("#pwCheck");

const signUp = document.querySelector("#next");

id.addEventListener("click", function () {
  const regExp = /^[0-9A-Za-z]{8,32}$/;

  if (regExp.test(id.value)) {
    signUp.style.background = "rgba(0, 0, 0, 0.69)";
    signUp.removeAttribute("disabled");
    idCheck.style.color = "green";
    idCheck.innerHTML = "사용가능";
  } else {
    signUp.style.backgroundColor = "grey";
    signUp.setAttribute("disabled", true);
    id.focus();
    idCheck.style.color = "red";
    idCheck.innerHTML = "사용불가(특수문자 사용불가)";
  }
});

password.addEventListener("click", function () {
  const regExp = /^[0-9A-Za-z]{1}[0-9A-Za-z]{7,15}$/;

  if (regExp.test(password.value)) {
    signUp.style.background = "rgba(0, 0, 0, 0.69)";
    signUp.removeAttribute("disabled");
    pwCheck.style.color = "green";
    pwCheck.innerHTML = "사용가능";
  } else {
    signUp.setAttribute("disabled", true);
    signUp.style.backgroundColor = "grey";
    password.focus();
    pwCheck.style.color = "red";
    pwCheck.innerHTML =
      "사용불가(첫번째 글자는 영문자, 숫자여야 하며, 7자리 이상 15자리 이하";
  }
});
