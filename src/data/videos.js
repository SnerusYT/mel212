// src/data/videos.js
// Import your video thumbnails and files
import papillon1 from '../assets/videos/merter_papillon.mov';
import papillonThumbnail from '../assets/images/mertert_papillon_4.jpg';
import princess1 from '../assets/videos/mertert_princess_twirl.mov';
import princess2 from '../assets/images/thumbnail_princess.jpg';
export const videos = [
  {
    id: 1,
    title: "Nosso primeiro Date",
    description: "Um jardim cheio de borboletas",
    thumbnail: papillonThumbnail,
    videoSrc: papillon1,
  },
  {
    id: 2,
    title: "A minha Princesa",
    description: "Ufffff que princesa é esta ?",
    thumbnail: princess2,
    videoSrc: princess1,
  },
  // Add more videos...
];