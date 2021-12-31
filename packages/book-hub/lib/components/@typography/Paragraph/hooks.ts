import { RefObject, useEffect, useRef, useState } from 'react';

interface IEllipsisConfig {
  rows?: 1 | 5;
  expandable?: boolean;
}
export type TParagraphEllipsis = IEllipsisConfig | boolean;

const getLineClampClassName = (rows: IEllipsisConfig['rows']): string => {
  if (rows === 5) return 'line-clamp-5';
  else return 'line-clamp-1';
};

const getEllipsisConfig = (params: TParagraphEllipsis): IEllipsisConfig => {
  const defaultConfig: IEllipsisConfig = { rows: 1, expandable: false };
  if (typeof params === 'object') {
    return { ...defaultConfig, expandable: true, ...params };
  } else return defaultConfig;
};

interface IUseEllipsis {
  isActive: boolean;
  expanded: boolean;
  onExpand: () => void;
  lineClampClassName: string;
  paragraphRef: RefObject<HTMLParagraphElement>;
}

// 120 is max height for 16px font and line clamp 5 lines
// if another value used the current implementation should be refactored
const useEllipsis = (ellipsis: TParagraphEllipsis): IUseEllipsis => {
  const [expanded, setExpanded] = useState(false);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const [config, setConfig] = useState(getEllipsisConfig(ellipsis));

  useEffect(() => {
    if (config.rows !== 1) {
      setConfig(config => ({
        ...config,
        expandable: Number(paragraphRef.current?.scrollHeight) > 120,
      }));
    }
  }, [config.rows]);

  return {
    expanded,
    paragraphRef,
    isActive: ellipsis && Boolean(config.expandable),
    onExpand: () => setExpanded(expanded => !expanded),
    lineClampClassName: ellipsis && !expanded ? getLineClampClassName(config.rows) : '',
  };
};

const hooks = {
  useEllipsis,
};

export default hooks;
