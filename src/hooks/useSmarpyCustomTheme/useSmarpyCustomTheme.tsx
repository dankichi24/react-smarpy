"use client";
import {
  useInsertionEffect,
  useMemo,
} from "react";
import smarpyStyleUtility from "../../utilities/smarpyStyleUtility";
import SmarpyCssVariable from "../../common/models/SmarpyCssVariable";

const elementId = "smarpy-css-variable-style";

const canUseDom =
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined";

export default function useSmarpyCustomTheme(
  cssVariableSetting?: SmarpyCssVariable
) {
  if (!cssVariableSetting) {
    return;
  }

  if (!canUseDom) {
    const smarpyCssVariableStyle = (
      <style id={elementId}>
        {smarpyStyleUtility.getSmarpyCssVariableStyles(cssVariableSetting)}
      </style>
    );

    return smarpyCssVariableStyle;
  }

  const smarpyStyles = useMemo(
    () => smarpyStyleUtility.getSmarpyCssVariableStyles(cssVariableSetting),
    [cssVariableSetting]
  );

  useInsertionEffect(() => {
    const currentSmarpyStyleElement = document.getElementById(elementId);
    if (currentSmarpyStyleElement) {
      currentSmarpyStyleElement.remove();
    }
    const styleElement = document.createElement("style");
    styleElement.id = elementId;
    styleElement.innerHTML = smarpyStyles;
    document.head.appendChild(styleElement);
  }, [smarpyStyles]);

  return undefined;
}
