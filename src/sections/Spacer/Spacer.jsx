import 'twin.macro';

import React from 'react';

export default function Spacer({ anchor, hide }) {
  if (hide) return '';

  return <div id={anchor} tw="pt-24 md:pt-32" />;
}
