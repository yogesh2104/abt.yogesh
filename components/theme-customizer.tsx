"use client";

import * as React from "react";
import { CheckIcon } from "lucide-react"
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useConfig } from "@/hook/use-config";
import { themes } from "@/lib/themes";

export function ThemeCustomizer() {
  const [config, setConfig] = useConfig();
  const { resolvedTheme: mode } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center space-x-2">
      <div className="flex">
        <div className="mr-2 items-center space-x-0.5 flex">
          {mounted && (
            <>
              {["zinc", "rose", "blue", "green", "orange"].map((color) => {
                const theme = themes.find((theme) => theme.name === color);
                const isActive = config.theme === color;

                if (!theme) {
                  return null;
                }

                return (
                  <button
                    key={color}
                    onClick={() =>
                      setConfig({
                        theme: theme.name,
                        cssVars: theme.cssVars as any,
                        style: "default",
                      })
                    }
                    className={cn(
                      "flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs",
                      isActive
                        ? "border-[--theme-primary]"
                        : "border-transparent"
                    )}
                    style={
                      {
                        "--theme-primary": `hsl(${
                          theme?.activeColor[
                            mode === "dark" ? "dark" : "light"
                          ]
                        })`,
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className={cn(
                        "flex h-6 w-6 items-center justify-center rounded-full bg-[--theme-primary]"
                      )}
                    >
                      {isActive && (
                        <CheckIcon className="w-4 h-4 text-white" />
                      )}
                    </span>
                    <span className="sr-only">{theme.label}</span>
                  </button>   
                );
              })}
            </>
          ) }
        </div>
      </div>
    </div>
  );
}

