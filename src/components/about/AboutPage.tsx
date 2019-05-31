import React from 'react';
import Page from '../page/Page';
import PageBanner from '../page/PageBanner';
import PageSidebar from '../page/PageSidebar';
import PageSection from '../page/PageSection';
import WelcomeSection from './WelcomeSection';
import HistorySection from './HistorySection';
import HistorySectionMore from './HistorySectionMore';
import WhatWeBelieveSection from './WhatWeBelieveSection';
import WhatWeBelieveSectionMore from './WhatWeBelieveSectionMore';
import WhatsOnSection from './WhatsOnSection';
import FAQSection from './FAQSection';
import './AboutPage.scss'



interface IAboutPageProps {

}

interface IAboutPageState {
  title?: string;
  currentBannerImage?: string;
  bannerMobilePosition?: string;
  currentSection?: number;
}


class AboutPage extends React.Component<IAboutPageProps, IAboutPageState> {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleSectionChange = (bannerImage, title, bannerMobilePosition) => {
    this.setState({
      currentBannerImage: bannerImage,
      title: title,
      bannerMobilePosition: bannerMobilePosition
    })
  }

  render() {
    return (
      <Page>
        <PageBanner title={this.state.title} imageUrl={this.state.currentBannerImage} bannerMobilePosition={this.state.bannerMobilePosition} titleColour="white" />
        <PageSidebar onSectionChange={this.handleSectionChange} currentSection={this.state.currentSection}>

          <PageSection
            linkTitle="About Us"
            bannerImageUrl="/img/about_us.jpg"
            url="/about"
            bannerMobilePosition="right">
            <WelcomeSection />
          </PageSection>

          <PageSection
            linkTitle="History"
            bannerTitle="HOW IT ALL BEGAN"
            bannerImageUrl="/img/history.jpg"
            url="/about/history"
            bannerMobilePosition="right">
            <HistorySection />
            <HistorySectionMore />
          </PageSection>

          <PageSection
            linkTitle="What We Believe"
            bannerImageUrl="/img/what_we_believe.png"
            url="/about/what-we-believe"
            bannerMobilePosition="center">
            <WhatWeBelieveSection />
            <WhatWeBelieveSectionMore />
          </PageSection>

          <PageSection
            linkTitle="What's On"
            bannerImageUrl="/img/about_us.jpg"
            url="/about/whats-on"
            bannerMobilePosition="center">
            <WhatsOnSection />
          </PageSection>

          <PageSection
            linkTitle="FAQ"
            bannerImageUrl="/img/about_us.jpg"
            url="/about/faq"
            bannerMobilePosition="right">
            <FAQSection />
          </PageSection>

        </PageSidebar>
      </Page>
    )
  }

}

export default AboutPage;
