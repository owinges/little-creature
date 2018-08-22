import React, { Component } from 'react';

import PortfolioList from '../components/PortfolioList';
import PortfolioModal from '../components/PortfolioModal';
import '../styles/portfolio.css';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            imageUrl: '',
            images: [
                {
                    key: "image1",
                    url: "http://68.media.tumblr.com/c485700e545a7cd6be6ae1429cfae6ba/tumblr_orx89qcJ7O1t2khgpo1_1280.png"
                },
                {
                    key: "image2",
                    url: "http://68.media.tumblr.com/91f0f129e14a27ee5bb38f2ebc881d47/tumblr_oquuareTBV1t2khgpo1_1280.png"
                },
                {
                    key: "image3",
                    url: "https://68.media.tumblr.com/657a031b702b35846491af910790034f/tumblr_ofoztzPbtQ1t2khgpo1_500.gif"
                },
                {
                    key: "image4",
                    url: "http://68.media.tumblr.com/daf5ff46e978352ec06ba7f188eb544a/tumblr_of8ypyDH4T1t2khgpo1_1280.png"
                },
                {
                    key: "image5",
                    url: "http://68.media.tumblr.com/e7802b432808e0416fa80dec3e5f1f17/tumblr_oagk9tse3h1t2khgpo1_1280.gif"
                },
                {
                    key: "image6",
                    url: "http://68.media.tumblr.com/cb9fd2e9683a6f48b171934e9cf714a0/tumblr_oaepchYzbS1t2khgpo1_1280.gif"
                },
                {
                    key: "image7",
                    url: "https://68.media.tumblr.com/a889d46a6e28d4371923de12cc61bfda/tumblr_p1i991LgBb1t2khgpo1_1280.png"
                },
                {
                    key: "image8",
                    url: "https://68.media.tumblr.com/345d624ea27d3afe9ddb8970fabf0ff8/tumblr_o6zwyj4EM01t2khgpo1_1280.png"
                },
                {
                    key: "image9",
                    url: "https://68.media.tumblr.com/5cd41d4c9c37791c0664ddb694a2ce2c/tumblr_o46mrmlqjF1t2khgpo1_1280.png"
                },
                {
                    key: "image10",
                    url: "https://68.media.tumblr.com/c51d294524d6774e0493bdff664996d0/tumblr_njjcy7rdcG1t2khgpo1_1280.gif"
                }
            ]
        };
    }

    handleOpenModal = imageUrl => {
        this.setState({
            isModalOpen: true,
            imageUrl
        });
    }

    handleCloseModal = () => {
        this.setState({ isModalOpen: false });
    }

    render() {
        const { images, imageUrl, isModalOpen } = this.state;

        return (
            <div class="container-fluid">
                <div class="row no-gutters">
                    <PortfolioList
                        images={images}
                        onOpenModal={this.handleOpenModal}
                    />
                </div>
                <PortfolioModal
                    isOpen={isModalOpen}
                    onCloseModal={this.handleCloseModal}
                    imageUrl={imageUrl}
                />
                {/* DIMMER DIV */}
                <div className={isModalOpen ? 'backdrop' : ''}></div>
                {/* DIMMER DIV */}
            </div>
        );
    }
}