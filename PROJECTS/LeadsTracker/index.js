let myleeds = [];
const inpurEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const inputBtn = document.getElementById("save-btn");
const deleteBtn = document.getElementById("delete-btn");

const leedsFromLocal = JSON.parse(localStorage.getItem("myleeds"));

if (leedsFromLocal) {
  myleeds = leedsFromLocal;
  render(myleeds);
}

function render(leads) {
  let listItem = "";
  console.log(listItem);
  for (i = 0; i < leads.length; i++) {
    listItem += `
    <li>
           <a target= '_blank' href= "${leads[i]}">
                ${leads[i]} 
            </a>
    </li>`;
  }
  ulEl.innerHTML = listItem;
}

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myleeds = [];
  render(myleeds);
});

inputBtn.addEventListener("click", function () {
  myleeds.push(inpurEl.value);
  inpurEl.value = "";

  localStorage.setItem("myleeds", JSON.stringify(myleeds));
  console.log(localStorage.getItem("myleeds"));
  render(myleeds);
});
