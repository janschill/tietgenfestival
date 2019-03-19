import { Fragment, Component } from 'react';
import Head from 'next/head';
import { BannerSection } from '../components/sections/BannerSection';
import { AboutSection } from '../components/sections/AboutSection';
import { Fragment, Component } from 'react';
import { BannerSection } from '../components/sections/BannerSection';
import ArtistsSection from '../components/sections/ArtistsSection/ArtistsSection';
import { ActivitiesSection } from '../components/sections/ActivitiesSection/ActivitiesSection';
import { AboutSection } from '../components/sections/AboutSection';
import Menu from '../components/Menu';
import Modal from '../components/Modal';

export default class Index extends Component {
  state = {
    modalData: null,
    modalVisible: false,
  };

  setModalData = modalData => {
    this.setState({
      modalData,
      modalVisible: true,
    });
  };

  setModalVisible = modalVisible => {
    this.setState({ modalVisible });
  };

  render() {
    return (
      <Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="The official site for the annual festival at the Tietgen Residence hall!"
          />
          <title>Tietgen Festival</title>
          <link rel="icon" href="/static/favicon.png" sizes="32x32" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,700"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <script
            async
            defer
            src="https://cdn-ticket.livebackend.com/prod/45/embed/877.js?ver=pmgr1r"
          />
        </Head>

        <Menu />
        <BannerSection />
        <ArtistsSection setModalData={this.setModalData} />
        <ActivitiesSection />
        <AboutSection />

        <Modal
          visible={this.state.modalVisible}
          setModalVisible={this.setModalVisible}
          modalData={this.state.modalData}
        />

        <style jsx global>{`
          /* TypoPRO Bebas Neue Regular */
          @import url('https://cdn.jsdelivr.net/npm/@typopro/web-bebas-neue@3.7.5/TypoPRO-BebasNeue-Regular.css');
          html,
          body {
            margin: 0;
          }
          body {
            font-family: 'Roboto', sans-serif;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: 'TypoPRO Bebas Neue', 'Roboto', sans-serif;
            user-select: none;
          }
        `}</style>
      </Fragment>
    );
  }
}
