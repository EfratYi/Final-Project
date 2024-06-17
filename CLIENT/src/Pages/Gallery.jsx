import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../css/public.css';  // Make sure the path is correct based on your folder structure

function Gallery() {
    const [photos, setPhotos] = useState([]);
    const [isAddModalOpen, setAddModalOpen] = useState(false);
    const [newPhotoData, setNewPhotoData] = useState({ title: '', thumbnailUrl: '' });
    const [openConfirmationWindow, setOpenConfirmationWindow] = useState(false);
    const [idDelPhoto, setIdDelPhoto] = useState(0);
    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/gallery`)
            .then((res) => res.json())
            .then((data) => {
                setPhotos([...data]);
            })
            .catch((error) => console.error('Error fetching photos:', error));
    }, []);

    const handleAddClick = () => {
        setAddModalOpen(true);
    };

    const handleSaveAdd = () => {
        fetch('http://localhost:3000/photos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                albumId: params.albumId,
                id: '',
                title: newPhotoData.title,
                url: '',
                thumbnailUrl: newPhotoData.thumbnailUrl
            }),
        })
            .then(response => response.json())
            .then(newPhoto => {
                setPhotos([...photos, newPhoto]);
            })
            .catch(error => console.error('Error adding photo:', error));
        setAddModalOpen(false);
    };

    const handleCloseModal = () => {
        setAddModalOpen(false);
    };

    const handleDeletePhoto = () => {
        fetch(`http://localhost:3000/gallery/${idDelPhoto}`, {
            method: 'DELETE'
        })
            .then((res) => res.json())
            .then((data) => {
                setPhotos([...data]);
                setOpenConfirmationWindow(false);
            })
            .catch((error) => console.error('Error fetching photos:', error));
    };

    const photoElements = photos.map((photo) => (
        <div key={photo.id} className="photo-tile">
          <div className="photo-info">
            <img src={photo.imageUrl} onDoubleClick={() => {setOpenConfirmationWindow(true); setIdDelPhoto(photo.id);}}/>
          </div>
        </div>
      ));

    return (
        <div>
            <div>
                <h1>גלריה</h1>
                <button onClick={handleAddClick}>הוספת תמונה</button>
            </div>
            {photoElements}
            {openConfirmationWindow && (
                <div className="modal">
                    <div className="confirmation-text">Do you really want to delete this photo?</div>
                    <div className="button-container">
                        <button className="cancel-button" onClick={() => setOpenConfirmationWindow(false)}>Cancel</button>
                        <button className="confirmation-button" onClick={handleDeletePhoto}>Delete</button>
                    </div>
                </div>
            )}
            {isAddModalOpen && (
                <div className='modal'>
                    <h2>Add New Photo</h2>
                    <label><strong>Thumbnail URL:</strong></label>
                    <input
                        type="text"
                        value={newPhotoData.thumbnailUrl}
                        onChange={e => setNewPhotoData({ ...newPhotoData, thumbnailUrl: e.target.value })}
                    />
                    <label><strong>Title:</strong></label>
                    <input
                        type="text"
                        value={newPhotoData.title}
                        onChange={e => setNewPhotoData({ ...newPhotoData, title: e.target.value })}
                    />
                    <button className="save-button" onClick={handleSaveAdd}>Save</button>
                    <button className="cancel-button" onClick={handleCloseModal}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export default Gallery;
