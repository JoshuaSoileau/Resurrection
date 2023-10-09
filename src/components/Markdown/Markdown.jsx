import React from 'react';
import ReactMarkdown from 'react-markdown';

// eslint-disable-next-line react/prop-types
export default function Markdown({ content, isAdmin }) {
  return isAdmin ? (
    <ReactMarkdown>{content}</ReactMarkdown>
  ) : (
    <article dangerouslySetInnerHTML={{ __html: content }}></article>
  );
}
