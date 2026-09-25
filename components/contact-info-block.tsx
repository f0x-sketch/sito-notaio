import type { ReactNode } from 'react';
import type { ContactInfo, UiStrings } from '@/content';
import { addressLines, telHref } from '@/lib/format';

type ContactInfoBlockProps = {
  contact: ContactInfo;
  labels: UiStrings['contactLabels'];
};

type Channel = {
  key: string;
  label: string;
  value: ReactNode;
  /** When set, the whole row becomes the link (DESIGN.md §5.10). */
  href?: string;
  /** `heading-3` for short actionable values, `body` for long plain values. */
  emphasis?: 'strong' | 'plain';
};

/**
 * ContactInfoBlock — classic institutional.
 * Formal grid of channels with serif labels and classical rhythm.
 * A channel that is not configured is omitted entirely.
 */
export function ContactInfoBlock({ contact, labels }: ContactInfoBlockProps) {
  const channels: Channel[] = [];

  if (contact.phone) {
    channels.push({
      key: 'phone',
      label: labels.phone,
      value: contact.phone,
      href: telHref(contact.phone),
      emphasis: 'strong',
    });
  }
  if (contact.email) {
    channels.push({
      key: 'email',
      label: labels.email,
      value: contact.email,
      href: `mailto:${contact.email}`,
      emphasis: 'strong',
    });
  }
  if (contact.pec) {
    channels.push({
      key: 'pec',
      label: labels.pec,
      value: contact.pec,
      href: `mailto:${contact.pec}`,
      emphasis: 'strong',
    });
  }
  channels.push({
    key: 'address',
    label: labels.address,
    emphasis: 'plain',
    value: (
      <span className="not-italic">
        {addressLines(contact.address).map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </span>
    ),
  });
  if (contact.officeHours.length > 0) {
    channels.push({
      key: 'hours',
      label: labels.officeHours,
      emphasis: 'plain',
      value: (
        <span>
          {contact.officeHours.map((slot) => (
            <span key={`${slot.days}-${slot.hours}`} className="block tabular-nums">
              {slot.days}: {slot.hours}
              {slot.note ? <span className="type-caption text-text-muted"> ({slot.note})</span> : null}
            </span>
          ))}
        </span>
      ),
    });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {channels.map((channel) => {
        const rowClassName = `flex min-h-16 flex-col justify-center gap-1.5 border-t border-border py-5 md:pr-8 ${
          channel.href ? 'group rounded-xs hover:bg-primary-tint' : ''
        }`;
        const body = (
          <>
            <span className="type-label text-accent">{channel.label}</span>
            <span
              className={`break-words ${
                channel.emphasis === 'strong'
                  ? 'type-heading-3 tabular-nums group-hover:text-primary group-hover:underline group-hover:underline-offset-4'
                  : 'type-body'
              }`}
            >
              {channel.value}
            </span>
          </>
        );
        return channel.href ? (
          <a key={channel.key} href={channel.href} className={rowClassName}>
            {body}
          </a>
        ) : (
          <div key={channel.key} className={rowClassName}>
            {body}
          </div>
        );
      })}
    </div>
  );
}
