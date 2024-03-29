/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react';
import { StyleSheetManager } from 'styled-components';

// eslint-disable-next-line react/prop-types
function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null);

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHeadElem = iframe.contentDocument.head;
    setIframeRef(iframeHeadElem);
  }, []);

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
    )
  );
}

function withStyledComponentsRendered(Comp) {
  return (props) => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  );
}

export default withStyledComponentsRendered;
