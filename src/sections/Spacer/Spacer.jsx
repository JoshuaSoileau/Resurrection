import React from 'react';
import 'twin.macro';

export default function Spacer({ anchor, hide }) {
  if (hide) return '';

  return <div id={anchor} tw="pt-24 md:pt-32" />;
}
