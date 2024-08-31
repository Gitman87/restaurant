import "./styles/style.css";
import changeTab from "./tabs.js";
import { wheelSpinner } from './menu.js';

document.addEventListener('DOMContentLoaded', () => {
  
  window.tabRadioInputLibrary = { changeTab };

  // Function to add the event listener to the spin button
  function setupLackingElements() {
    const spinButton = document.querySelector('#spin-button');

    // reasignig in elements wont load with changeTab function
    wheelSpinner.wheelImage = document.querySelector('#wheel');
    wheelSpinner.resultPara = document.querySelector('#result-para');
    wheelSpinner.recipePara = document.querySelector('#recipe-para');

    if (spinButton) {
      spinButton.addEventListener('click', () => wheelSpinner.spin());
    } else {
      console.error('Spin button not found, checking again after 100ms');
      // retry after a short delay 
      setTimeout(setupLackingElements, 100);
    }
  }

  
  setupLackingElements();

  //  tab change
  document.querySelectorAll('.tab-input').forEach((tab) => {
    tab.addEventListener('change', () => {
      setTimeout(setupLackingElements, 100);
    });
  });
});
