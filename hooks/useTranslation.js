import { useMemo } from 'react';
import useNextTranslation from 'next-translate/useTranslation';

/*
	This wrapper hook is so the translations persist through the page animations.
	Otherwise the route is considered different and next-translate will change 
  the translation file before the animation has finished.
*/

export default function useTranslation(namespace, options) {
  const { t, lang } = useNextTranslation(namespace, options);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const T = useMemo(() => t, [lang]);
  return { t: T, lang };
}
