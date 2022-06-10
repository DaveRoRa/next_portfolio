import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  const colorScheme = useColorModeValue('purple', 'orange');
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);
  return (
    <IconButton
      aria-label='Toggle theme'
      colorScheme={colorScheme}
      icon={icon}
      onClick={toggleColorMode}
    />
  );
};

export default ThemeToggleButton;
