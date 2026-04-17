const messages: string[] = [
  "You know",
  "I always wanted to tell you something",
  "But I didin't know how...",
  "I just... reeeeeeally",
  "love you <3",
];

const last_msg: string = "Do you? :)";

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
    document.getElementById("tap-screen-message")?.classList.add("hidden");

    let j: number = 0;

    let last_msg_div: Element = document.getElementById(
      "last-msg",
    ) as HTMLDivElement;

    setTimeout(() => {
      let write_last_message_interval: number = setInterval((): void => {
        if (j === last_msg.length - 1) {
          clearInterval(write_last_message_interval);
        }

        last_msg_div.innerHTML += last_msg[j];
        j++;
      }, 125);
    }, 2200);
  } else if (message_count >= messages.length) {
    return;
  }

  const messages_div = document.getElementById(
    "messages-div",
  ) as HTMLDivElement;

  messages_div.innerHTML = "";

  let i: number = 0;

  let write_message_interval: number = setInterval((): void => {
    if (i === messages[message_count].length - 1) {
      clearInterval(write_message_interval);
    }

    messages_div.innerHTML += messages[message_count][i];
    i++;
  }, 100);
};

const center_click: Function = (center: HTMLDivElement): void => {
  setTimeout((): void => center.classList.remove("animate-jump"), 350);
  center.classList.add("animate-jump");
};

const petal_click: Function = (): void => {
  let petals: NodeListOf<HTMLDivElement> = document.querySelectorAll(".petal");

  petals.forEach((petal: HTMLDivElement): void => {
    petal.addEventListener("click", (): void => {
      petal.classList.add("animate-move");
      setTimeout((): void => petal.classList.remove("animate-move"), 350);
    });
  });
};

export { redirect_to_GH, screen_tap, center_click, petal_click };
