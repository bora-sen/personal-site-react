import React from 'react'
import { PhotoCollage, PhotoFooter, PhotoHeader } from './components'

function Photos() {
  const allPhotos = [
    'photos-folder/photo1.jpeg',
    'photos-folder/photo2.jpeg',
    'photos-folder/photo3.jpeg',
    'photos-folder/photo4.jpeg',
    'photos-folder/photo5.jpeg',
    'photos-folder/photo6.jpeg',
    'photos-folder/photo7.jpeg',
    'photos-folder/photo8.jpeg',
    'photos-folder/photo9.jpeg',
    'photos-folder/photo10.jpeg',
    'photos-folder/photo11.jpeg',
    'photos-folder/photo12.jpeg',
    'photos-folder/photo13.jpeg',
    'photos-folder/photo14.jpeg',
    'photos-folder/photo15.jpeg',
    'photos-folder/photo16.jpeg',
    'photos-folder/photo17.jpeg',
  ]


  return (
    <>
        <PhotoHeader />

        <div className='flex flex-wrap justify-center'>
          {
          allPhotos.map((photo,index) => {
            return (
              <PhotoCollage key={index} photo={photo}/>
            )
          }
          )}


        </div>

        <PhotoFooter />
    </>
  )
}

export default Photos