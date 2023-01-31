import React from 'react';
import 'twin.macro';

export default function Spacer({ hide }) {
  if (hide) return '';

  return <div tw="pt-24 md:pt-32" />;
}
