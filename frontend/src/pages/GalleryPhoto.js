
import React from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import EncartBlanc from '../components/Encart/EncartBlanc';
import Footer from '../components/Footer/Footer';

export default class GalleryPhoto extends React.Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }


  render() {
    const photos = [
      /* { src: 'react-baron/dummy/11.jpg', width: 3, height: 2 },
          { src: 'react-baron/dummy/12.jpg', width: 3, height: 2 },
          { src: 'react-baron/dummy/4.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/5.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/6.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/7.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/8.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/9.jpg',   width: 3, height: 2 },

          { src: 'react-baron/dummy/8.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/9.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/8.jpg',   width: 3, height: 2 },
          { src: 'react-baron/dummy/9.jpg',   width: 3, height: 2 },

          { src: 'react-baron/dummy/10.jpg', width: 3, height: 2 } */
      { src: 'react-baron/dummy/large-gallery/13.jpg', width: 3, height: 2 },
      { src: 'react-baron/dummy/large-gallery/14.jpg', width: 3, height: 2 },
      { src: 'react-baron/dummy/large-gallery/15.jpg', width: 3, height: 2 },
      { src: 'react-baron/dummy/large-gallery/16.jpg', width: 3, height: 2 },
      { src: 'react-baron/dummy/large-gallery/17.jpg', width: 3, height: 2 },
    ];


    return (
      <div className="slide-img bg-img">
        <EncartBlanc
          text1="See What’s NeWs"
          text2="Latests Photos"
        />


        <div className="gallery-photo">


          <Gallery photos={photos} direction="column" columns={4} onClick={this.openLightbox} />
          <Lightbox
            images={photos}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
          />

        </div>
        <Footer />
      </div>
    );
  }
}
