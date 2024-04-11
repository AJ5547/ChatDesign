const people = [
  { name: "Benjamin", status: "online", newOnline: false },
  { name: "Emily", status: "offline", newOnline: false },
  { name: "Alexander", status: "online", newOnline: false },
  { name: "Sophia", status: "offline", newOnline: false },
  { name: "Christopher", status: "online", newOnline: true },
  { name: "Olivia", status: "offline", newOnline: false },
  { name: "William", status: "online", newOnline: false },
  { name: "Charlotte", status: "offline", newOnline: false },
  { name: "Jacob", status: "online", newOnline: false },
  { name: "Emma", status: "offline", newOnline: false },
  { name: "Michael", status: "online", newOnline: false },
  { name: "Ava", status: "offline", newOnline: false },
  { name: "Matthew", status: "online", newOnline: true },
  { name: "Samuel", status: "offline", newOnline: false },
  { name: "Isabel", status: "online", newOnline: true },
];
// TODO filter array to show people who are online, and then display that

function showOnline() {
  var peopleContainer = document.querySelector(".peopleContainer");
  people.forEach((people) => {
    if (people.status === "online") {
      peopleContainer.innerHTML += `
			<div class="personOnline bg-primary-700 text-white" onclick="error()">
				<p> ${people.name}</p>
				<p class="onlineCircle"> </p>
			</div>`;
    }
    //  else {
    //   peopleContainer.innerHTML += `
    // 	<div class="personOffline bg-primary-700 text-white">
    // 		<p> ${people.name}</p>
    // 		<p class="offlineCircle"> </p>
    // 	</div>`;
    // }
  });
}
function error() {
  alert("This feature is not available yet");
}
function showToast() {
  var toastContainer = document.querySelector(".toastContainer");
  toastContainer.style.visibility = "visible";
  toastContainer.style.animation = "fadein 0.7s, fadeout 0.7s 4.5s forwards";
  people.forEach((people) => {
    if (people.newOnline) {
      toastContainer.innerHTML += `
      <div id="toast" class="toast text-white bg-secondary-600" role="status" aria-live="polite">
      <p>${people.name} is online</p>
      <span class="close" onclick="closeToast()">x </span>
    </div>`;
    }
  });
}

document.addEventListener("DOMContentLoaded", function () {
  showToast();
  showOnline();
});

function closeToast() {
  var toastContainer = document.getElementsByClassName("toastContainer");
  toastContainer.style.visibility = "hidden";
}

function submitMessage() {
  var message = document.getElementById("chatReply").value;
  var messageInput = document.getElementById("chatReply");
  if (message === "") {
    console.log("Please enter a message");
    messageInput.style.border = "2px solid red";
  } else {
    console.log(message);
    //   Github Copilot
    document.getElementById("chatReply").value = "";
  }
}
