import _ from 'lodash';
import {useEffect, useRef, useState} from 'react';

export const windowExists = typeof window !== 'undefined';

const buildThresholdArray = () => Array.from(Array(100).keys(), i => i / 100);

interface UseIntersectProps {
  root?: null | HTMLElement;
  rootMargin?: string;
  threshold?: number | number[];
}

export const useIntersect = (options?: UseIntersectProps) => {
  const {
    root = null,
    rootMargin = '100% 0px -15% 0px',
    threshold = buildThresholdArray(),
  } = options || {};

  const [entry, updateEntry] = useState<null | IntersectionObserverEntry>(null);
  const [node, setNode] = useState(null);

  const observer = useRef(
    windowExists
      ? new window.IntersectionObserver(([entry]) => updateEntry(entry), {
          root,
          rootMargin,
          threshold,
        })
      : null,
  );

  useEffect(
    () => {
      const {current: currentObserver} = observer;
      currentObserver.disconnect();

      if (node) currentObserver.observe(node);

      return () => currentObserver.disconnect();
    },
    [node],
  );

  return {setNode, entry};
};
