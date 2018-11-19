import React from 'react';
import ImageGallery from 'react-image-gallery';

class Gallery extends React.Component {

    render() {

        const images = [
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69e63/XiAjNBWW5Bs.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69e63/XiAjNBWW5Bs.jpg',
            },
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69e00/G7JpP9FLKUQ.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69e00/G7JpP9FLKUQ.jpg'
            },
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69e1b/Okwgm2Q6GKs.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69e1b/Okwgm2Q6GKs.jpg'
            },
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69e51/vUZUtP2MHJM.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69e51/vUZUtP2MHJM.jpg'
            },
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69e5a/lCRi8FCeq18.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69e5a/lCRi8FCeq18.jpg'
            },
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69e2d/LsfNYU-C6fQ.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69e2d/LsfNYU-C6fQ.jpg'
            },
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69e36/T2V-u47AUwo.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69e36/T2V-u47AUwo.jpg'
            },
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69e6c/MCsOcGJ9Qso.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69e6c/MCsOcGJ9Qso.jpg'
            },
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69e48/4wVeQ1cB-OE.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69e48/4wVeQ1cB-OE.jpg'
            },
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69e09/vKptlTltftc.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69e09/vKptlTltftc.jpg'
            },
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69df7/0UI9WNCJkE0.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69df7/0UI9WNCJkE0.jpg'
            },
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69e12/Uh8MUf2dOow.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69e12/Uh8MUf2dOow.jpg'
            },
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69e24/QxZkOCA106k.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69e24/QxZkOCA106k.jpg'
            },
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69e3f/M6L_o70hw1A.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69e3f/M6L_o70hw1A.jpg'
            },
            {
                original: 'https://pp.userapi.com/c847019/v847019948/69dee/aw3CDmIhqSw.jpg',
                thumbnail: 'https://pp.userapi.com/c847019/v847019948/69dee/aw3CDmIhqSw.jpg'
            },

        ]

        return (
            <ImageGallery items={images} />
        );
    }

}

export default Gallery;
