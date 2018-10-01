import * as React from 'react';
import styled from 'styled-components';

const Title = styled.h3`
  margin: 0;
  font-size: 1.8rem;
`;

const Text = styled.p`
  margin: 0;
  text-align: left;
  padding: 16px;
`;

const AboutSite: React.SFC<React.HTMLAttributes<HTMLElement>> = ({ style }) => (
  <section style={style}>
    <Title>おせち.jpとは</Title>
    <Text>
      おせち.jpは複数のおせち販売サイトで販売されているおせちを一括で見ることができるサービスです。
      定番の和風おせちからちょっと変わった洋風おせちまで様々な種類のおせちを簡単にさがすことができます。
    </Text>
  </section>
);

export default AboutSite;
