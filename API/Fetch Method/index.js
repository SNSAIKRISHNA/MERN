//(https://dog.ceo/api/breeds/image/random)

//Fetch Method Example and .then() Example
//
fetch("https://dog.ceo/api/breeds/image/random")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const imageElement = document.createElement("img");
    imageElement.src = data.message;
    imageElement.alt = "Random Dog Image";

    const imgContainer = document.getElementById("img-container");
    imgContainer.appendChild(imageElement);
  })
  .catch((error) => {
    console.error("Error fetching the dog image:", error);
  })
  .finally(() => {
    console.log("Fetch attempt finished.");
  });

// Using Async/Await
async function fetchDogImage() {
  const result = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await result.json();
  console.log(data);
}
fetchDogImage();

