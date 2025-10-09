import BaseComponentProps from "../../common/models/BaseComponentProps";

function getUtilityClassNames(props: BaseComponentProps): string[] {
  const assignedClassNames: string[] = [];

  if (props.fore) {
    props.fore.fontSize &&
      assignedClassNames.push(`is-font-size-${props.fore.fontSize}`);
    props.fore.fontWeight &&
      assignedClassNames.push(`is-font-weight-${props.fore.fontWeight}`);
    props.fore.isItalic && assignedClassNames.push(`is-italic`);
  }

  return assignedClassNames;
}

const classNameUtility = {
  getUtilityClassNames,
};

export default classNameUtility;
