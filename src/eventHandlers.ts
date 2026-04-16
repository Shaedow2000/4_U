const messages: string[] = [
  "You know",
  "I always wanted to tell you something",
  "But I didin't know how...",
  "I just... reeeeeeally",
  "love you <3",
];

const redirect_to_GH: Function = (): void => {
  document.getElementById("github")?.addEventListener("click", () => {
    location.href = "https://github.com/Shaedow2000/4_U";
  });
};

const screen_tap: Function = (message_count: number): void => {
  if (message_count === messages.length - 1) {
    document.getElementById("center")?.classList.add("animate-show");
    document
      .querySelectorAll(".petal")
      .forEach((element: Element): void =>
        element.classList.add("animate-bloom"),
      );
  } else if (message_count >= messages.length) {
    return;
  }

  const messages_div = document.getElementById(
    "messages-div",
  ) as HTMLDivElement;

  messages_div.innerHTML = "";

  // for (let i = 0; i < messages[message_count].length; i++) {
  //   messages_div.innerHTML += messages[message_count][i];
  // }

  let i: number = 0;

  let write_message_interval: number = setInterval((): void => {
    if (i === messages[message_count].length - 1) {
      clearInterval(write_message_interval);
    }

    messages_div.innerHTML += messages[message_count][i];
    i++;
  }, 100);
};

export { redirect_to_GH, screen_tap };
