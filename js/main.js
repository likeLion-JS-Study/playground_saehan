/* eslint-disable functional/immutable-data */
/* eslint-disable no-unused-vars */
import { getNode, addClass, removeClass } from "../client/lib/index.js";

const element = document.documentElement;
element.dataset.theme = "theme-light";

const themeBtn = getNode(".theme-btn");
const wrapper = getNode(".wrapper");
const toDoInput = getNode("#checkInput");
const addTodoBtn = getNode(".addTodo");
const todoUl = getNode(".todoList");
const action = getNode(".action");
const clearButton = getNode(".clear");
const filterBox = getNode("filters");

// Event Handler Function

// 빈 컨테이너 생성

function emptyCreation() {
  const empty = document.createElement("div");
  empty.className = "empty-container";
  empty.textContent = "기록된 할 일이 존재하지 않습니다.";

  return empty;
}

// 화면 전환 아이콘 토글형식으로 만들기
function toggleTheme() {
  const themeIcon = themeBtn.querySelector("img");

  if (themeBtn.classList.contains("light")) {
    themeBtn.classList.remove("light");
    themeBtn.classList.add("dark");
    document.querySelector("body").style.backgroundImage =
      "url(../images/bg-desktop-dark.jpg)";
    document.querySelector("body").style.backgroundColor = "#171823";
    document.querySelector("#todoForm").style.backgroundColor = "#393a4b";
    document.querySelector("#checkInput").style.backgroundColor = "#393a4b";
    document.querySelector(".action").style.backgroundColor = "#393a4b";
    document.querySelector(".left-text").style.color = "#ffffff";
    document.querySelector(".all").style.color = "#ffffff";
    document.querySelector(".active").style.color = "#ffffff";
    document.querySelector(".completed-btn").style.color = "#ffffff";
    document.querySelector(".clear").style.color = "#ffffff";
    themeIcon.src = "./images/icon-sun.svg";
    themeIcon.alt = "moon svg";
  } else {
    themeBtn.classList.remove("dark");
    themeBtn.classList.add("light");
    document.querySelector("body").style.backgroundImage =
      "url(../images/bg-desktop-light.jpg)";
    document.querySelector("body").style.backgroundColor = "#ffffff";
    document.querySelector("#todoForm").style.backgroundColor = "#ffffff";
    document.querySelector("#checkInput").style.backgroundColor = "#ffffff";
    document.querySelector(".action").style.backgroundColor = "#ffffff";
    document.querySelector(".left-text").style.color = "#393a4b";
    document.querySelector(".all").style.color = "#393a4b";
    document.querySelector(".active").style.color = "#393a4b";
    document.querySelector(".completed-btn").style.color = "#393a4b";
    document.querySelector(".clear").style.color = "#393a4b";
    themeIcon.src = "./images/icon-moon.svg";
    themeIcon.alt = "sun svg";
  }
}
themeBtn.addEventListener("click", toggleTheme);

function todoGenerator(text) {
  const todoItem = document.createElement("div");
  todoItem.className = "todo-item";
  todoItem.draggable = true;
  todoItem.innerHTML = /* html */ `
                      <label class="check-label">
                          <input type="checkbox">
                          <span class="check-round"></span>
                      </label>
                      <li class="todo">${text}</li>
                      <button class="btn delete"><img src="./images/icon-cross.svg" alt="cross svg"></button>
  `;

  const label = todoItem.querySelector("label");
  const li = todoItem.querySelector("li");
  const button = todoItem.querySelector("button");

  return [todoItem, label, li, button];
}
