fetch("data.json")
  .then(response => response.json())
  .then(data => {
      console.log(data);
      displayFactories(data);
  });
  function displayFactories(data){
  let table = document.getElementById("factoryTable");

  data.forEach(factory => {
    let row = table.insertRow();

    row.insertCell(0).innerText = factory.factory_name;
    row.insertCell(1).innerText = factory.location;
    row.insertCell(2).innerText = factory.pollution_level;
    row.insertCell(3).innerText = factory.risk;
  });
}
function updateDate() {

const today = new Date();

const options = {
weekday: "long",
year: "numeric",
month: "long",
day: "numeric"
};

document.getElementById("date").innerText =
today.toLocaleDateString("en-US", options);

}

updateDate();
setInterval(updateDate, 1000);