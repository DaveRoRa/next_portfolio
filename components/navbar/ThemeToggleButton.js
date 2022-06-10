import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';
import { AnimatePresence, motion } from 'framer-motion';

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode();
  const colorScheme = useColorModeValue('purple', 'orange');
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: 'inline-block' }}
        key={useColorModeValue('light', 'dark')}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.2 }}>
        <IconButton
          aria-label='Toggle theme'
          colorScheme={colorScheme}
          icon={icon}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default ThemeToggleButton;
