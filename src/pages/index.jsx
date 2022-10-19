import React, { Component } from 'react';
import { map } from 'awaity/esm';

import content from '../content/pages/home.md';
import Builder from '../components/builder/Builder';
import convertMarkdownToHtml from '../utils/convertMarkdownToHtml';

export default class Home extends Component {
  render() {
    const { sections } = this.props;
    return sections.map(({ type, ...props }) => {
      return <Builder type={type} {...props} />;
    });
  }
}

export async function getStaticProps({ params }) {
  const { attributes } = content;
  let { sections } = attributes || {};

  sections = await map(
    sections,
    async (section) => await convertMarkdownToHtml(section)
  );

  return {
    props: {
      sections,
    },
  };
}
