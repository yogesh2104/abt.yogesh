type Expression = "angry" | "happy" | "neutral" | "sad" | "surprised";

/**
 * Angry --> Red is often associated with strong emotions such as anger, and aggression.
 * Happy --> Yellow is commonly linked to happiness, cheerfulness, and energy.
 * Neutral --> Neutral colors like gray or beige are associated with neutrality, balance, and calmness. "Neutral" color can specifically be used for a neutral expression.
 * Sad --> Blue is often associated with sadness, calm, and melancholy.
 * Surprised --> Orange or Violet can represent mystery and surprise, while orange can signify excitement and shock.
 */
// export function getColorForExpression(expression:string) {
//   const expressionToColor = {
//     angry: "red",
//     happy: "Yellow",
//     neutral: "neutral",
//     sad: "blue",
//     surprised: "violet"
//   };

//   return expressionToColor[expression as Expression] || "zinc";
// }

/**
 * Returns the color associated with a given expression.
 *
 * The function maps expressions to colors based on psychological and cultural associations:
 * - Angry: Red is often associated with strong emotions such as anger and aggression.
 * - Happy: Yellow is commonly linked to happiness, cheerfulness, and energy.
 * - Neutral: Neutral colors like gray or beige are associated with neutrality, balance, and calmness.
 * - Sad: Blue is often associated with sadness, calm, and melancholy.
 * - Surprised: Orange or Violet can represent mystery and surprise, while orange can signify excitement and shock.
 *
 * @param {Expression} expression - The expression to get the color for. It can be one of "angry", "happy", "neutral", "sad", or "surprised".
 * @returns {string} The color associated with the given expression.
 */
export function getColorForExpression(expression: Expression): string {
  const expressionToColor: Record<Expression, string> = {
    angry: "red",
    happy: "yellow",
    neutral: "neutral",
    sad: "blue",
    surprised: "violet"
  };

  return expressionToColor[expression]
}

  