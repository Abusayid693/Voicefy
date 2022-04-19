import { Dropdown } from "carbon-components-react";
import styled, { css } from "styled-components";

export const Styles = styled.div`
  ${({ theme }) => css`
  
  width: 200px; !important;
  
  .bx--dropdown{
    background-color: ${theme.colors.black[100]};

    &:hover{
      background-color: ${theme.colors.black[200]};
    }
  }

  .bx--list-box{
    max-height: 3rem;
    height: 3rem;
  }

  .bx--list-box__field{
    border: 1px solid ${theme.colors.white[100]};
  }

  .bx--list-box__field[disabled]{
      opacity: 0.5;
  }

  .bx--list-box__menu{
    background-color: ${theme.colors.black.primary};
    

    &-item__option{
    color: ${theme.colors.white[100]};
    border-top-color: ${theme.colors.black.primary} !important;
    }

    &-item{
      &:hover{
        background-color: ${theme.colors.black.secondary};
        .bx--list-box__menu-item__option {
          color: ${theme.colors.white[100]};
        }
      }
    }

  }
  .bx--list-box__label{
    color: ${theme.colors.white[100]};
  }
  [name="chevron--down"]{
    fill: ${theme.colors.white[100]};
  }
  `}
`;

const CustomDropdown: React.FC<{
  onChangeEvent: any;
  label: string;
  title: string;
  items: [any];
  key: string;
}> = ({ onChangeEvent, label, title, items, key }) => {
  return (
    <Styles>
      <Dropdown
        ariaLabel="Dropdown"
        id="carbon-dropdown-example"
        // @ts-ignore
        disabled={items.length === 0}
        defaultValue={"title"}
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
