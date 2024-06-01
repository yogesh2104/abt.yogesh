type Expression = "angry" | "happy" | "neutral" | "sad" | "surprised";

export function getColorForExpression(expression:string) {
  const expressionToColor = {
    angry: "red",
    happy: "orange",
    neutral: "zinc",
    sad: "blue",
    surprised: "green"
  };

  return expressionToColor[expression as Expression] || "zinc";
}
  