import React from 'react';
import { RouteComponentProps } from '@reach/router';
import styled from '@src/styles/styled-components';
import Heading from '@src/components/atoms/Heading';
import SiteMapCategory from '@src/components/organisms/SiteMapCategory';
import SingleContentPageTemplate from '@src/components/templates/SingleContentPageTemplate';
import { MenuType } from '@src/enums';
import { APP_NAME, ROUTE_PATHS } from '@src/constants';

export type SiteMapPageProps = RouteComponentProps<{}>;

const StyledHeading = styled(Heading)(({ theme }) => ({
  borderBottom: `1px solid #dedede`,
  padding: theme.spacing(2),
}));

const StyledSiteMapCategory = styled(SiteMapCategory)({
  margin: `0 auto`,
  '&:not(:last-of-type)': {
    borderBottom: `1px solid #dedede`,
  },
});

const categoryKeyList = ['ja', 'we', 'ch'] as const;

const SiteMapsPage = ({ navigate }: SiteMapPageProps) => {
  const onClickback = () => {
    if (navigate) {
      navigate(ROUTE_PATHS.ROOT);
    }
  };

  return (
    <SingleContentPageTemplate
      title={`${APP_NAME} - サイトマップ -`}
      description={`サイトマップ。おせち.jpではいろいろなおせち販売サイトのおせちを比較することができます。定番のおせちや少し変わったおせちまで簡単に条件を指定して探せます。2020年のおせちはおせち.jpでお好みのおせちを探してはいかがでしょうか。`}
      keywords={[
        `おせち`,
        `2020年のおせち`,
        `おすすめのおせち`,
        `2020`,
        `おせちの通販`,
        `今年のおせち`,
        `おせちの食べ方`,
      ]}
      currentMenuType={MenuType.All}
      onClickBack={onClickback}
    >
      <article>
        <StyledHeading level={2}>サイトマップ</StyledHeading>
        {categoryKeyList.map(cc => (
          <StyledSiteMapCategory key={cc} categoryKey={cc} />
        ))}
      </article>
    </SingleContentPageTemplate>
  );
};

export default SiteMapsPage;
