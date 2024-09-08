"use client";

import { useAtom } from "jotai";
import { atom } from "jotai";
import { Theme, CssVars, themes } from "@/lib/themes";

type Config = {
  theme: Theme["name"];
  cssVars: {
    light: Partial<CssVars["light"]>;
    dark: Partial<CssVars["dark"]>;
  };
};

const configAtom = atom<Config>({
  theme: "green",
  cssVars: {
    light: themes.find((theme) => theme.name === "green")?.cssVars
      .light as Partial<CssVars["light"]>,
    dark: themes.find((theme) => theme.name === "green")?.cssVars
      .dark as Partial<CssVars["dark"]>,
  },
});

export function useConfig() {
  return useAtom(configAtom);
}
