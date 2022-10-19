import React from 'react';

export default function Spacer({ hide }) {
  if (hide) return '';

  return <div className="pt-24 md:pt-32" />;
}
