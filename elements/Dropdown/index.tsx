import { Dropdown } from "carbon-components-react";
import styled, { css } from "styled-components";

export const Styles = styled.div`
  ${({ theme }) => css`
  
  width: 200px; !important;

  .bx--dropdown{
    background-color: ${theme.colors.black[100]};
    border: 1px solid ${theme.colors.white[100]};
    border-radius: 8px;

    &:hover{
      background-color: ${theme.colors.black[200]} !important;
    }
  }

  .bx--list-box__label{
    color: ${theme.colors.white[100]};
  }

  `}
  
`;


const CustomDropdown: React.FC<{
  onChangeEvent: any;
  label: string;
  title: string;
  items: [any];
  key: string ;
}> = ({ onChangeEvent, label, title, items, key }) => {
  return (
    <Styles>
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
      onChange={onChangeEvent}
    />
    </Styles>
  );
};

export default CustomDropdown;
