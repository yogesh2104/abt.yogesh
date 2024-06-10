"use client";

import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { Theme, CssVars, themes } from "@/lib/themes";

type Config = {
  theme: Theme["name"];
  cssVars: {
    light: Partial<CssVars["light"]>;
    dark: Partial<CssVars["dark"]>;
  };
};

const configAtom = atomWithStorage<Config>("config", {
  theme: "yellow",
  cssVars: {
    light: themes.find((theme) => theme.name === "yellow")?.cssVars
      .light as Partial<CssVars["light"]>,
    dark: themes.find((theme) => theme.name === "yellow")?.cssVars
      .dark as Partial<CssVars["dark"]>,
  },
});

export function useConfig() {
  return useAtom(configAtom);
}
