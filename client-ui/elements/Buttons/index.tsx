import {
  CloudDataOps32,
  PauseFilled32,
  PlayFilledAlt32
} from '@carbon/icons-react';
import {Button} from 'carbon-components-react';

const CarbonIconButton: React.FC<{
  hanldeClickEvent?: any;
  status?: boolean;
}> = ({hanldeClickEvent, status = false}) => {
  return (
    <Button
      hasIconOnly
      renderIcon={status ? PlayFilledAlt32 : PauseFilled32}
      tooltipAlignment="center"
      tooltipPosition="bottom"
      iconDescription="Play demo voice"
      kind="primary"
      style={{width: 50, height: 50}}
    />
  );
};

const CarbonPrimaryButton: React.FC<{
  title?: string;
  placeholder?: string;
}> = () => {
  return <Button renderIcon={CloudDataOps32}>Button</Button>;
};

export {CarbonIconButton, CarbonPrimaryButton};
