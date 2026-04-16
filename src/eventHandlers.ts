const redirect_to_GH: Function = (): void => {
  document.getElementById("github")?.addEventListener("click", () => {
    location.href = "https://github.com/Shaedow2000/4_U";
  });
};

const screen_tap: Function = (message_count: number): void => {
  const messages_div = document.getElementById(
    "messages-div",
  ) as HTMLDivElement;

  const messages: string[] = [
    "You know",
    "I always wanted to tell you something",
    "But I didin't know how...",
    "I reeeeeeally",
    "love you <3",
  ];

  messages_div.innerHTML = "";

  for (let i = 0; i < messages[message_count].length; i++) {
    messages_div.innerHTML += messages[message_count][i];
  }
};

export { redirect_to_GH, screen_tap };
