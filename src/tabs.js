import home from './home';
import menu from './menu'
import about from './about'



export default function changeTab() {
  const mainContent=document.querySelector('#inner-content');
  const selectedValue = document.querySelector(".tab-input:checked").value;

  if (selectedValue === "option-home") {
    console.log("Home selected");
    mainContent.innerHTML= home;
  } else if (selectedValue === "option-menu") {
    console.log("Menu selected");
    mainContent.innerHTML= menu;
  } else if (selectedValue === "option-about") {
    console.log("About  selected");
    mainContent.innerHTML= about;
  }

  
}
