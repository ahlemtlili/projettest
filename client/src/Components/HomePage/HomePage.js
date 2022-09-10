import React from 'react';
import { Carousel, Toast } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import 'animate.css';
import './HomeStyle.css';

const HomePage = () => {
  return (
    <div className='HomePage'>
      <Carousel>
        <Carousel.Item interval={3000}>
          <img
            className='d-block'
            src='https://thumbs.dreamstime.com/b/%C3%A9tudiant-africain-focalis%C3%A9-regardant-le-livre-de-participation-d-ordinateur-portable-faisant-la-recherche-jeune-femme-affaires-144185369.jpg'
            alt='etudiant'
          />
          <Carousel.Caption className='tips'>
            <h2 className='animate__animated animate__fadeInDownBig textcarossel'>
              Vous etes un etudiant ?!
            </h2>
            <p>
              <h3 className='animate__animated animate__fadeInLeft  animate__delay-2s textcarossel'>
                Vous devez :
              </h3>
              <li>
                <h5 className='animate__animated animate__fadeInUp  animate__delay-3s textcarossel'>
                  Avoir une attitude positive envers leur étude.
                </h5>
              </li>
              <li>
                <h5 className='animate__animated animate__fadeInUp  animate__delay-3s textcarossel'>
                  Etre axé sur les objectifs.
                </h5>
              </li>
              <li>
                <h5 className='animate__animated animate__fadeInUp  animate__delay-3s textcarossel'>
                  Avoir la capacité de bien gérer son temps.
                </h5>
              </li>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className='d-block'
            src='https://moimonavenircom.b-cdn.net/wp-content/uploads/enseignant-au-secondaire-760x507.jpg'
            alt='enseignant'
          />

          <Carousel.Caption className='tips'>
            <h2 className='animate__animated animate__fadeInDownBig textcarossel'>
              Vous etes un enseignant ?!
            </h2>
            <p>
              <h3 className='animate__animated animate__fadeInLeft  animate__delay-2s textcarossel'>
                Avez-vous les caractéristiques :
              </h3>
              <li>
                <h5 className='animate__animated animate__fadeInUp  animate__delay-3s textcarossel'>
                  La maîtrise du matière.
                </h5>
              </li>
              <li>
                <h5 className='animate__animated animate__fadeInUp  animate__delay-3s textcarossel'>
                  La maîtrise des compétences pédagogiques.
                </h5>
              </li>
              <li>
                <h5 className='animate__animated animate__fadeInUp  animate__delay-3s textcarossel'>
                  La confiance en soi.
                </h5>
              </li>
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='motivation'>
        <Toast>
          <Toast.Header>
            <img
              src='holder.js/20x20?text=%20'
              className='rounded me-2'
              alt=''
            />
            <strong
              className='me-auto'
              style={{ color: 'orange', textTransform: 'uppercase' }}>
              Actualités
            </strong>
          </Toast.Header>
          <Toast.Body className='toastHome'>
            <p> We are working on that.</p>
          </Toast.Body>
        </Toast>
        <div>
          <ReactPlayer
            controls='true'
            width='420px'
            height='200px'
            url='https://https://www.youtube.com/watch?v=6dCIdVzpxJs'
          />
        </div>
      </div>

      

   
    </div>
  );
};

export default HomePage;
