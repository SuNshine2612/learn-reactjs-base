import React from 'react';
import PropTypes from 'prop-types';
import AlbumItem from '../AlbumItem';
import './styles.scss';

AlbumList.propTypes = {
    albumList: PropTypes.array.isRequired,
};



function AlbumList({ albumList }) {
    return (
        <ul className='album__list'>
            {albumList.map(item => (
                <li key={item.id}>
                    <AlbumItem album={item} />
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;