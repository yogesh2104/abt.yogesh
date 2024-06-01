"use client";

import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

type faceExpressionAtomConfig = {
  expression: String;
};

const faceExpressionAtom = atomWithStorage<faceExpressionAtomConfig>("faceExpression", {
  expression:"neutral"
});

export function useExpression() {
  return useAtom(faceExpressionAtom);
}
