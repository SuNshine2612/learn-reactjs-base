import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {

    const listAlbum = [
        {
            id: 1,
            name: 'Chilout',
            urlImage: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/1/2/8/4128331703314f9031d83f40bb5c64cd.jpg'
        },
        {
            id: 2,
            name: 'Giai Điệu Chữa Lành',
            urlImage: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/c/e/b/9cebed464b13fe24a38c356007d98a15.jpg'
        },
        {
            id: 3,
            name: 'Guitar Accoustic',
            urlImage: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/5/8/b/d/58bd83e11474c024007e0dd0bb15b0a3.jpg'
        }
    ];

    return (
        <div>
            <h3>Có Thể Bạn Sẽ Thích Đấy</h3>
            <AlbumList albumList={listAlbum} />
        </div>
    );
}

export default AlbumFeature;