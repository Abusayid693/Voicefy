import { Dropdown } from "carbon-components-react";

const CustomDropdown: React.FC<{
  onChangeEvent: any;
  label: string;
  title: string;
  items: [any];
  key: string ;
}> = ({ onChangeEvent, label, title, items, key }) => {
  return (
    <Dropdown
      ariaLabel="Dropdown"
      id="carbon-dropdown-example"
      // @ts-ignore
      disabled={items.length === 0}
      defaultValue={'title'}
      items={items}
      key={key}
      label={label}
      titleText={title}
      style={{ width: "200px" }}
      onChange={onChangeEvent}
    />
  );
};

export default CustomDropdown;
