"use strict";
import { v4 as uuidv4 } from "uuid";

//uuidv4
!function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.uuidv4=r()}}(function(){return function r(e,n,t){function o(f,u){if(!n[f]){if(!e[f]){var a="function"==typeof require&&require;if(!u&&a)return a(f,!0);if(i)return i(f,!0);var d=new Error("Cannot find module '"+f+"'");throw d.code="MODULE_NOT_FOUND",d}var p=n[f]={exports:{}};e[f][0].call(p.exports,function(r){var n=e[f][1][r];return o(n?n:r)},p,p.exports,r,e,n,t)}return n[f].exports}for(var i="function"==typeof require&&require,f=0;f<t.length;f++)o(t[f]);return o}({1:[function(r,e,n){function t(r,e){var n=e||0,t=o;return t[r[n++]]+t[r[n++]]+t[r[n++]]+t[r[n++]]+"-"+t[r[n++]]+t[r[n++]]+"-"+t[r[n++]]+t[r[n++]]+"-"+t[r[n++]]+t[r[n++]]+"-"+t[r[n++]]+t[r[n++]]+t[r[n++]]+t[r[n++]]+t[r[n++]]+t[r[n++]]}for(var o=[],i=0;i<256;++i)o[i]=(i+256).toString(16).substr(1);e.exports=t},{}],2:[function(r,e,n){var t="undefined"!=typeof crypto&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&msCrypto.getRandomValues.bind(msCrypto);if(t){var o=new Uint8Array(16);e.exports=function(){return t(o),o}}else{var i=new Array(16);e.exports=function(){for(var r,e=0;e<16;e++)0===(3&e)&&(r=4294967296*Math.random()),i[e]=r>>>((3&e)<<3)&255;return i}}},{}],3:[function(r,e,n){function t(r,e,n){var t=e&&n||0;"string"==typeof r&&(e="binary"===r?new Array(16):null,r=null),r=r||{};var f=r.random||(r.rng||o)();if(f[6]=15&f[6]|64,f[8]=63&f[8]|128,e)for(var u=0;u<16;++u)e[t+u]=f[u];return e||i(f)}var o=r("./lib/rng"),i=r("./lib/bytesToUuid");e.exports=t},{"./lib/bytesToUuid":1,"./lib/rng":2}]},{},[3])(3)});

//id.js
!function(r){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=r();else if("function"==typeof define&&define.amd)define([],r);else{var e;e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,e.uuidv4=r()}}(function(){return function r(e,n,t){function o(f,u){if(!n[f]){if(!e[f]){var a="function"==typeof require&&require;if(!u&&a)return a(f,!0);if(i)return i(f,!0);var d=new Error("Cannot find module '"+f+"'");throw d.code="MODULE_NOT_FOUND",d}var p=n[f]={exports:{}};e[f][0].call(p.exports,function(r){var n=e[f][1][r];return o(n?n:r)},p,p.exports,r,e,n,t)}return n[f].exports}for(var i="function"==typeof require&&require,f=0;f<t.length;f++)o(t[f]);return o}({1:[function(r,e,n){function t(r,e){var n=e||0,t=o;return t[r[n++]]+t[r[n++]]+t[r[n++]]+t[r[n++]]+"-"+t[r[n++]]+t[r[n++]]+"-"+t[r[n++]]+t[r[n++]]+"-"+t[r[n++]]+t[r[n++]]+"-"+t[r[n++]]+t[r[n++]]+t[r[n++]]+t[r[n++]]+t[r[n++]]+t[r[n++]]}for(var o=[],i=0;i<256;++i)o[i]=(i+256).toString(16).substr(1);e.exports=t},{}],2:[function(r,e,n){var t="undefined"!=typeof crypto&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&msCrypto.getRandomValues.bind(msCrypto);if(t){var o=new Uint8Array(16);e.exports=function(){return t(o),o}}else{var i=new Array(16);e.exports=function(){for(var r,e=0;e<16;e++)0===(3&e)&&(r=4294967296*Math.random()),i[e]=r>>>((3&e)<<3)&255;return i}}},{}],3:[function(r,e,n){function t(r,e,n){var t=e&&n||0;"string"==typeof r&&(e="binary"===r?new Array(16):null,r=null),r=r||{};var f=r.random||(r.rng||o)();if(f[6]=15&f[6]|64,f[8]=63&f[8]|128,e)for(var u=0;u<16;++u)e[t+u]=f[u];return e||i(f)}var o=r("./lib/rng"),i=r("./lib/bytesToUuid");e.exports=t},{"./lib/bytesToUuid":1,"./lib/rng":2}]},{},[3])(3)});

//get items from localstorage

const getFromLocalStorage = function () {
  const todosjson = localStorage.getItem("todos");

  if (todosjson !== null) {
    return JSON.parse(todosjson);
  } else {
    return [];
  }
  // try{
  // 	return todosjson ? JSON.parse(todosjson): []

  // }
  // catch(e){
  // 	return []
  // }
};

//save todos to localStorage

const saveTodosToLocalStorage = function (todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
};
// debugger

// function for remove todos button
const removetodo = function (id) {
  const findex = todos.findIndex(function (todo) {
    return todo.id === id;
  });
  if (findex > -1) {
    todos.splice(findex, 1);
  }
};

// toggle the vlaue of completed for the give n todos

const toggletodo = function (id) {
  const todo = todos.find(function (todo) {
    return todo.id === id;
  });

  if (todo !== undefined) {
    todo.status = !todo.status;
  }
};
// Render TOodos

const rendertodo = function (todos, filters) {
  const todoEl = document.querySelector("#todos");
  const filteredtodos = todos.filter(function (todo) {
    const searchText = todo.title
      .toLowerCase()
      .includes(filters.searchtext.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.status;
    return searchText && hideCompletedMatch;
  });
  const incompletetodos = filteredtodos.filter(function (todo) {
    return !todo.status;
  });
  todoEl.innerHTML = "";
  const summ = generateSummeryDom(incompletetodos);
  todoEl.appendChild(summ);

  if (filteredtodos.length > 0) {
    filteredtodos.forEach(function (todo) {
      const pp = generateTodoDom(todo);
      todoEl.appendChild(pp);
    });
  } else {
    const emptymsg = document.createElement("p");
    emptymsg.classList.add("empty-message");
    emptymsg.textContent = "Todo list not found!";
    todoEl.appendChild(emptymsg);
  }
  // localStorage.clear()
};

// get the dom element for an individual note

const generateTodoDom = function (todo) {
  const wrap = document.createElement("label");
  const container = document.createElement("div");

  const checkx = document.createElement("input");
  const p = document.createElement("span");
  const removebutton = document.createElement("button");

  //setup todo checkbox
  checkx.setAttribute("type", "checkbox");
  checkx.checked = todo.status;
  container.appendChild(checkx);

  checkx.addEventListener("change", function () {
    toggletodo(todo.id);
    saveTodosToLocalStorage(todos);
    rendertodo(todos, filters);
  });

  //setup todos text
  p.textContent = todo.title;
  container.appendChild(p);

  //setup container

  wrap.classList.add("list-item");
  container.classList.add("list-item__container");
  wrap.appendChild(container);

  //setup removeButton
  removebutton.textContent = "Delete";
  removebutton.classList.add("button", "button--text");
  wrap.appendChild(removebutton);
  removebutton.addEventListener("click", function () {
    removetodo(todo.id);
    saveTodosToLocalStorage(todos);
    rendertodo(todos, filters);
  });
  return wrap;
};

// get the dom elements for list summery

const generateSummeryDom = function (incompletetodos) {
  const summery = document.createElement("h3");
  summery.classList.add("list-title",'text-red-600',);
  if (incompletetodos.length === 1) {
    summery.textContent = `${incompletetodos.length} todo left to complete`;
  } else {
    summery.textContent = `${incompletetodos.length} todos left to complete`;
  }

  return summery;
};





const todos = getFromLocalStorage()

const filters = {
	searchtext: '',
	hideCompleted: false
}
rendertodo(todos, filters)

document.querySelector('#searchtext').addEventListener('input', function (e) {
	filters.searchtext = e.target.value
	rendertodo(todos, filters)
})

// document.querySelector('#delete').addEventListener('click',function(){
// 	document.querySelectorAll('.note').forEach(function(note){
// 		note.remove()
// 	})
// })

document.querySelector('#new-todo').addEventListener('submit', function (e) {
	e.preventDefault()
	const title = e.target.elements.text.value.trim()
	if (title) {
	todos.push({
		id: uuidv4(),
		title, // this is es6 shorthand property it search for the variable title and write its value in after = "value ' place//title: e.target.elements.text.value,
		status: false
	})
	
		saveTodosToLocalStorage(todos)
		rendertodo(todos, filters)
		e.target.elements.text.value = ''
}

})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
	filters.hideCompleted = e.target.checked
	rendertodo(todos, filters)
})
