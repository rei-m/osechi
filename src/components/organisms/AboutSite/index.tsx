import * as React from 'react';
import styled from '@src/styles/styled-components';

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
  <React.Fragment>
    <section style={style}>
      <Title>おせち.jpとは</Title>
      <Text>
        おせち.jpはいろいろなおせち販売サイトのおせちを一括で見ることができるサービスです。
        定番のおせちや少し変わったおせちまで簡単にご利用人数や値段を指定して探すことができます。
        お好みにあったおせちを探して新年のお祝いを迎えてはいかがでしょうか。
      </Text>
    </section>
    <section style={style}>
      <Title>おせちの由来</Title>
      <Text>
        お正月に食べる「おせち」とはどんな意味があるのでしょうか？
        もともとは「御節供（おせちく）」と呼ばれ、正月に限らず季節の節目の行事で神様へのお供え物として出されていました。
        この行事が庶民に広まり、形を変えて、一年の節目の一番大切なお正月に振る舞われる料理として「おせち」として定着しました。
      </Text>
    </section>
    <section style={style}>
      <Title>おせちの意味</Title>
      <Text>
        おせちは地方やしきたりによって様々な種類がありますが、基本は重箱で提供されます。これは「めでたさを重ねる」という意味で縁起をかついだものになっています。
        料理についても、黒豆は「マメに働けるように」という長寿と健康を、数の子はその卵の多さから子孫繁栄を、といったように、ひとつひとつ意味が込められており、
        新年のはじまりを祝い、また一年息災にすごせますようにと願いが込められています。おせちをつまみながら、その意味を調べてみるのもおもしろいのではないでしょうか。
      </Text>
    </section>
  </React.Fragment>
);

export default AboutSite;
