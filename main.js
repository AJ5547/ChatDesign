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

function closeToast() {
  var toastContainer = document.querySelector(".toastContainer");
  toastContainer.style.visibility = "hidden";
  // toastContainer.style.animation = "fadeout 0.7s 4.5s forwards";
}

// TODO filter array, people online first, then people offline
function showOnline() {
  var peopleContainer = document.querySelector(".peopleContainer");
  const onlinePeople = people.filter((people) => people.status === "online");
  const offlinePeople = people.filter((people) => people.status === "offline");
  onlinePeople.forEach((people) => {
    console.log(people);
    if (people.status === "online") {
      peopleContainer.innerHTML += `
			<div class="personOnline bg-sushi-500" onclick="error()">
				<p> ${people.name}</p>
			</div>`;
    }
  });
  people.forEach((people) => {
    if (people.status === "offline") {
      peopleContainer.innerHTML += `
  <div class="personOffline bg-sushi-200" onclick="error()">
    <p> ${people.name}</p>
  </div>`;
    }
  });
}
function error() {
  closeToast();
  var mainArea = document.querySelector(".mainContent");
  Object.assign(mainArea.style, {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  mainArea.innerHTML = ` <div class="errorContainer">
  <h2 class="text-3xl"> Error: 404 </h2>
  <p class="text-2xl"> This page cannot be found! </p>
  <a class="text-tertiary-default text-2xl underline" href="index.html"> Go back to the homepage </a>
   </div>`;
}
function showToast() {
  var toastContainer = document.querySelector(".toastContainer");
  Object.assign(toastContainer.style, {
    visibility: "visible",
    animation: "fadein 0.7s, fadeout 0.7s 4.5s forwards",
  });
  people.forEach((people) => {
    if (people.newOnline) {
      toastContainer.innerHTML += `
      <div id="toast" class="toast text-elephant-900 bg-rose-300" role="status" aria-live="polite">
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

function submitMessage() {
  var message = document.getElementById("chatReply").value;
  var messageInput = document.getElementById("chatReply");
  var required = document.querySelector(".requiredContainer");
  if (message === "") {
    messageInput.style.border = "2px solid red";
    messageInput.placeholder = "Please enter a message";
    required.innerHTML =
      '<p id="required" class="text-red-600"> Please Enter a message</p>';
  } else {
    var chatContainer = document.querySelector(".chatContainer");
    required.innerHTML = "";
    chatContainer.innerHTML += `<div class="chatMessage bg-rose-400 text-black myMessage"> ${message} </div>`;
    // console.log(message);
    messageInput.style.border = "none";
    messageInput.placeholder = "Send a message";
    document.getElementById("chatReply").value = "";
    chatContainer.innerHTML += `<div class="flex items-end"> <span class="material-symbols-outlined md-36">
    account_circle
    </span><p class="chatMessage bg-rose-500 text-black replyMessage"> Hi there! </p><div>`;
  }
}
