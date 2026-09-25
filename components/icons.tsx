import type { ReactNode } from 'react';
import type { IconName } from '@/content';

type IconProps = {
  className?: string;
};

function Svg({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className ?? 'h-6 w-6'}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  );
}

/** One line-icon family for the whole site (DESIGN.md §5.7), keyed by `IconName`. */
const paths: Record<IconName, ReactNode> = {
  home: <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4.5v-6h-5v6H5a1 1 0 0 1-1-1z" />,
  key: (
    <>
      <circle cx="8" cy="12" r="3.5" />
      <path d="M11.5 12H21M18 12v3M15 12v2.5" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17" />
      <path d="M3 21h18M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M11 21v-3h2v3" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="1" />
      <path d="M9 7.5V5.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2M3 12.5h18" />
    </>
  ),
  'file-text': (
    <>
      <path d="M6 3h8l4 4v14a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v4h4M8 12h8M8 16h8" />
    </>
  ),
  scale: (
    <>
      <path d="M12 4v16M7 20h10M12 6l-5 2M12 6l5 2" />
      <path d="M3.5 15a3.5 3.5 0 0 0 7 0L7 8.5zM13.5 15a3.5 3.5 0 0 0 7 0L17 8.5z" />
    </>
  ),
  handshake: (
    <>
      <path d="M3 11h3.5l2.2 2.2a1.2 1.2 0 0 0 1.7 0L12 11.6l1.6 1.6a1.2 1.2 0 0 0 1.7 0L17.5 11H21" />
      <path d="M3 11V8.5L6.5 7l3 1.5h3L16 7l3.5 1.5V11M7 13.5l2.3 2.3a1.2 1.2 0 0 0 1.7 0l.5-.5.5.5a1.2 1.2 0 0 0 1.7 0L16 13.5" />
      <path d="M6 16.5 7.5 18a1.2 1.2 0 0 0 1.7 0M18 16.5 16.5 18a1.2 1.2 0 0 1-1.7 0" />
    </>
  ),
  shield: <path d="M12 3.5 19 6v5.5c0 4.3-2.8 7.7-7 9.5-4.2-1.8-7-5.2-7-9.5V6z" />,
  users: (
    <>
      <circle cx="9" cy="8.5" r="3" />
      <path d="M3.5 20v-1.5A4.5 4.5 0 0 1 8 14h2a4.5 4.5 0 0 1 4.5 4.5V20" />
      <circle cx="16.5" cy="9.5" r="2.5" />
      <path d="M16 14h.5a4 4 0 0 1 4 4V20" />
    </>
  ),
  pen: (
    <>
      <path d="M4 20l4.5-1.2L19 8.3a1.8 1.8 0 0 0 0-2.5l-.8-.8a1.8 1.8 0 0 0-2.5 0L5.2 15.5z" />
      <path d="M14.5 7l2.5 2.5M4 20l2-3 1 1z" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5S14.2 18.2 12 20.5c-2.2-2.3-3.3-5.1-3.3-8.5S9.8 5.8 12 3.5z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
};

export function ServiceIcon({ name, className }: { name: IconName } & IconProps) {
  return <Svg className={className}>{paths[name]}</Svg>;
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 21s-6.5-5.4-6.5-10.2a6.5 6.5 0 1 1 13 0C18.5 15.6 12 21 12 21z" />
      <circle cx="12" cy="10.5" r="2.5" />
    </Svg>
  );
}
