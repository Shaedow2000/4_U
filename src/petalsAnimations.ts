const animatePetals = (): void => {
  const petalsAnimation = Array.from(
    { length: 12 },
    (_: any, i: number): string => `
    .petal:nth-child(${i + 1}) {
      --rot: ${i * 30}deg;
      animation-delay: ${(i + 1) * 0.2}s
    }
    `,
  ).join("");

  const styleTag = document.createElement("style");
  styleTag.textContent = petalsAnimation;
  document.head.appendChild(styleTag);

  return;
};

export { animatePetals };
