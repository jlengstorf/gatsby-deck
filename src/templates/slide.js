import React from 'react';
import styled from 'react-emotion';

const Slide = styled('div')`
  background: red;
`;

export default ({ children }) => (
  <Slide data-id="custom-mdx-slide-layout">{children}</Slide>
);
