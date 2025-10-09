"use client";
import { createContext } from "react";
import { ColorScheme } from "../../common/literalTypes";

const SmarpyColorSchemeContext = createContext<ColorScheme>("light");

export default SmarpyColorSchemeContext;
