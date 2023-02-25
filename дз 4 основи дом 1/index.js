'use strict';
/*1. Задача на селектори:*/

//- для елементу з текстом 'Навігація по DOM дереву'
const domNavTitle = document.getElementById('header-two');

// - для першого елементу <section>
const firstSectionElement = document.querySelector('p') // отримали тільки перший параграф бо це просто  querySelector а не querySelectorAll

//- для елементу списку з текстом 'Пункт 5'
const pointFive = document.querySelectorAll('li')[4];

//- для елементу з класом 'hatredLevelBlock'
const hatredLevelBlockElement = document.getElementsByClassName('.hatred-level-block');






