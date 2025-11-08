let myleeds = [];
const inpurEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("save-btn");

inputBtn.addEventListener("click", function () {
  myleeds.push(inpurEl.value);
  inpurEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItem = "";
  console.log(listItem);
  for (i = 0; i < myleeds.length; i++) {
   
    listItem += `
    <li>
           <a target= '_blank' href= "${myleeds[i]}">
                ${myleeds[i]} 
            </a>
    </li>`;

    console.log(listItem);
  }
  ulEl.innerHTML = listItem;
}
