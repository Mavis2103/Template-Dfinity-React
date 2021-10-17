import { frontend } from "../../declarations/frontend";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with frontend actor, calling the greet method
  const greeting = await frontend.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
