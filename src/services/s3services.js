const imageUrls = {};

export const getImagesFromS3 = async () => {

   //HOME
   imageUrls.hnkD = 'https://webhb.s3.us-east-2.amazonaws.com/Home/desktop/hnk-desktop.png';
   imageUrls.rappiD = 'https://webhb.s3.us-east-2.amazonaws.com/Home/desktop/rappi-home-desktop.png';
   imageUrls.img2 = 'https://webhb.s3.us-east-2.amazonaws.com/Home/img-2.png';
   imageUrls.img2D = 'https://webhb.s3.us-east-2.amazonaws.com/Home/desktop/img-our-services-desktop.png';
   imageUrls.workParallax = 'https://webhb.s3.us-east-2.amazonaws.com/Home/work-parallax.svg';
   imageUrls.union = 'https://webhb.s3.us-east-2.amazonaws.com/Home/union.svg';
   imageUrls.groupwwd = 'https://webhb.s3.us-east-2.amazonaws.com/Home/img-proyectos.png';
   imageUrls.groupwwdD = 'https://webhb.s3.us-east-2.amazonaws.com/Home/desktop/group-services-desktop.png';
   imageUrls.hnk = 'https://webhb.s3.us-east-2.amazonaws.com/Home/hnk-home-mobile.png';
   imageUrls.umana = 'https://webhb.s3.us-east-2.amazonaws.com/Home/umana-home-mobile.png';
   imageUrls.teclab = 'https://webhb.s3.us-east-2.amazonaws.com/Home/teclab-home-mobile.png';
   imageUrls.rappi = 'https://webhb.s3.us-east-2.amazonaws.com/Home/rappi-home-mobile.png';
   imageUrls.umanaD = 'https://webhb.s3.us-east-2.amazonaws.com/Home/desktop/umana-desktop.png';
   imageUrls.teclabD = 'https://webhb.s3.us-east-2.amazonaws.com/Home/desktop/teclab-desktop.png';
   imageUrls.arrowbtn = 'https://webhb.s3.us-east-2.amazonaws.com/Home/arrow-btn.svg';
   imageUrls.title = 'https://webhb.s3.us-east-2.amazonaws.com/Home/title-contacto.svg';
   imageUrls.titleD = 'https://webhb.s3.us-east-2.amazonaws.com/Home/title-contact-desktop.png';


   //CONTACT
   imageUrls.contactGif = 'https://webhb.s3.us-east-2.amazonaws.com/Contact/contact.gif'


   return imageUrls;
};

   export const getImageUrl = (imageName) => {
   // Retorna la URL de la imagen solicitada
   return imageUrls[imageName] || null;
};