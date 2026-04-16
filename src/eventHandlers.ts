const redirect_to_GH: Function = (): void => {
  document.getElementById("github")?.addEventListener("click", () => {
    location.href = "https://github.com/Shaedow2000/4_U";
  });
};

const screen_tap: Function = (): void => {
  document.getElementById("screen")?.addEventListener("click", (): void => {
    console.log("clicked");
  });
};

export { redirect_to_GH, screen_tap };
