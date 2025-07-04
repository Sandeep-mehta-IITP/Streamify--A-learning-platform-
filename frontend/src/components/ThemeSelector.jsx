import React from "react";
import { useThemeStore } from "../utils/useThemeStore";
import { PaletteIcon } from "lucide-react";
import { THEMES } from "../constants";

const ThemeSelector = () => {
  const { theme, setTheme } = useThemeStore();
  return (
    <div className="dropdown dropdown-end">
      {/*----DROPDOWN TRIGGER-----*/}
      <button tabIndex={0} className="btn btn-ghost btn-circle">
        <PaletteIcon className="size-5" />
      </button>

      <div
        tabIndex={0}
        className="dropdown-content mt-2 p-1 shadow-2xl bg-base-200 backdrop-blur-lg rounded-2xl w-56 border border-base-content/10 max-h-80 overflow-y-auto"
      >
        <div className="space-y-1">
          {THEMES.map((item) => (
            <button
              key={item.name}
              className={`w-full px-4 py-3 rounded-xl flex items-center gap-3 transition-colors
                ${
                  theme === item.name
                    ? "bg-primary/10 text-primary"
                    : "hover:bg-base-content/5"
                }`}
              onClick={() => setTheme(item.name)}
            >
              <PaletteIcon className="size-4" />
              <span className="text-sm font-medium">{item.label}</span>

              {/*-----THEME PREVIEW COLORS--------*/}
              <div className="ml-auto flex gap-1">
                {item.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className="size-2 rounded-full"
                    style={{ backgroundColor: color }}
                  ></span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeSelector;
