"use client";
import { useInsertionEffect, useMemo } from "react";
import { SmarpyColorSchemeContext } from "../../contexts";
import smarpyStyleUtility from "../../utilities/smarpyStyleUtility";
import { Smaroot } from "../Smaroot";
import "./Smarpy.scss";
import SmarpyProps from "./SmarpyProps";

export default function Smarpy(props: SmarpyProps) {
  const assignedProps = { ...props };
  delete assignedProps["cssVariableSetting"];

  const elementId = "smarpy-css-variable-style";

  const smarpyStyles = useMemo(
    () =>
      smarpyStyleUtility.getSmarpyCssVariableStyles(props.cssVariableSetting),
    [props.cssVariableSetting]
  );

  useInsertionEffect(() => {
    const currentSmarpyStyleElement = document.head.querySelector(
      `#${elementId}`
    );
    if (currentSmarpyStyleElement) {
      currentSmarpyStyleElement.remove();
    }
    const styleElement = document.createElement("style");
    styleElement.id = elementId;
    styleElement.innerHTML = smarpyStyles;
    document.head.appendChild(styleElement);
  }, [smarpyStyles]);

  return (
    <SmarpyColorSchemeContext.Provider
      value={assignedProps.colorScheme ? assignedProps.colorScheme : "light"}
    >
      <Smaroot {...assignedProps} />
    </SmarpyColorSchemeContext.Provider>
  );
}
