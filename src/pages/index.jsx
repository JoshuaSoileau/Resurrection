import React, { Component } from 'react';

import content from '../content/pages/home.md';
import Builder from '../components/builder/Builder';

export default class Home extends Component {
  render() {
    const { attributes } = content;
    const { sections } = attributes || {};

    return sections.map(({ type, ...props }) => {
      return <Builder type={type} {...props} />;
    });
  }
}
