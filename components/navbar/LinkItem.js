import NextLink from 'next/link';
import { Link, useColorModeValue } from '@chakra-ui/react';

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const hoverBg = useColorModeValue('pink.600', 'whiteAlpha.900');
  const hoverColor = useColorModeValue('white', 'black');
  const color = useColorModeValue('pink.700', 'white');
  return (
    <NextLink href={href} passHref>
      <Link
        _hover={
          !active && {
            bg: hoverBg,
            color: hoverColor
          }
        }
        p={2}
        border={active && '2px solid'}
        color={color}
        borderRadius={10}>
        {children}
      </Link>
    </NextLink>
  );
};

export default LinkItem;
