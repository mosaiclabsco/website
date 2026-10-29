// Official Mosaic mark geometry (public/brand/icon.svg), split into its four pieces.
export const markPieces = [
  { key: "blue", fill: "#1464C0", d: "M24,24L76,24C102.51,24,124,45.49,124,72L124,124L24,124Z", box: "24 24 100 100" },
  { key: "coral", fill: "#EF6545", d: "M226,74A50,50,0,1,1,126,74A50,50,0,1,1,226,74Z", box: "126 24 100 100" },
  { key: "yellow", fill: "#F4B942", d: "M24,128L76,128C102.51,128,124,149.49,124,176L124,228L72,228C45.49,228,24,206.51,24,180Z", box: "24 128 100 100" },
  { key: "teal", fill: "#0B9E8A", d: "M128,128L180,128C206.51,128,228,149.49,228,176L228,228L176,228C149.49,228,128,206.51,128,180Z", box: "128 128 100 100" },
] as const;

export const palette = markPieces.map((p) => p.fill);
