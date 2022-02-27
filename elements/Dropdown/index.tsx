import { Dropdown } from "carbon-components-react";

const CustomDropdown: React.FC<{
  onChangeEvent: any;
  label: string;
  title: string;
}> = ({ onChangeEvent, label, title }) => {
  return (
    <Dropdown
      ariaLabel="Dropdown"
      id="carbon-dropdown-example"
      items={["ff"]}
      label={label}
      titleText={title}
      style={{ width: "200px" }}
      onChange={onChangeEvent}
    />
  );
};

export default CustomDropdown;
