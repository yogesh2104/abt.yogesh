"use client";

import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

import { Style } from "@/lib/styles";
import { Theme, CssVars, themes } from "@/lib/themes";

type Config = {
  style: Style["name"];
  theme: Theme["name"];
  cssVars: {
    light: Partial<CssVars["light"]>;
    dark: Partial<CssVars["dark"]>;
  };
};

const configAtom = atomWithStorage<Config>("config", {
  style: "default",
  theme: "orange",
  cssVars: {
    light: themes.find((theme) => theme.name === "orange")?.cssVars
      .light as Partial<CssVars["light"]>,
    dark: themes.find((theme) => theme.name === "orange")?.cssVars
      .dark as Partial<CssVars["dark"]>,
  },
});

export function useConfig() {
  return useAtom(configAtom);
}
