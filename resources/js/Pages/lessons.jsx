import React from 'react';
import '../../css/lessons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faFlask } from '@fortawesome/free-solid-svg-icons';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';

import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function TutoringWebsite() {
  return (
    <div className="container">
      <h1>Private lessons and tutors for hundreds of subjects</h1>
      <p>We have tutors for hundreds of subjects, languages, disciplines, technical and artistic specialties... and for all levels!</p>
      
      <div className="sections">
        <section>
          <FontAwesomeIcon icon={faGlobe} style={{ fontSize: '3em', color: 'blue' }} />
          <h2>Language lessons</h2>
          <ul>
            <li>English tutors</li>
            <li>French tutors</li>
            <li>Italian tutors</li>
            <li>Arabic tutors</li>
            <li>Spanish tutors</li>
            <li>German tutors</li>
            <li>Japanese tutors</li>
            <li>Chinese tutors</li>
            <li>Online English lessons</li>
            <li>French online</li>
            <li>German online</li>
          </ul>
        </section>
        
        <section>
          <FontAwesomeIcon icon={faFlask} style={{ fontSize: '3em', color: 'orange' }} />
          <h2>Science lessons</h2>
          <ul>
            <li>Maths tutors</li>
            <li>Physics tutors</li>
            <li>Chemistry tutors</li>
            <li>Algebra tutors</li>
            <li>Biology tutors</li>
            <li>Statistics tutors</li>
            <li>Maths and physics tutors</li>
            <li>Online Maths lessons</li>
            <li>Online physics lessons</li>
            <li>Online chemistry lessons</li>
          </ul>
        </section>
        
        <section>
          <FontAwesomeIcon icon={faBookOpen} style={{ fontSize: '3em', color: 'red' }} />
          <h2>Tuition for school students and Exam preparation</h2>
          <ul>
            <li>Tuition</li>
            <li>Primary school</li>
            <li>Secondary school</li>
            <li>GCSE</li>
            <li>A Level</li>
            <li>University</li>
            <li>Online tuition</li>
            <li>IELTS tutors</li>
          </ul>
        </section>
      </div>

      <div className="additional-section">
        <h2>Why search for a tutor on MySwaye3?</h2>
        <p>There are many reasons why finding a tutor with us is the safest and most reliable option.</p>
        
        <section>
          <FontAwesomeIcon icon={faUsers} style={{ fontSize: '3em', color: 'blue' }} />
          <h3>The leader in Europe</h3>
          <p>We are one of the largest tutoring platforms, with more than 200,000 tutors in the UK.</p>
        </section>
        
        <section>
          <FontAwesomeIcon icon={faClock} style={{ fontSize: '3em', color: 'green' }} />
          <h3>Experience</h3>
          <p>Since 2007 we have helped thousands of students to find the perfect tutor.</p>
        </section>
        
        <section>
          <FontAwesomeIcon icon={faStar} style={{ fontSize: '3em', color: 'gold' }} />
          <h3>Fantastic reviews</h3>
          <p>Our students and tutors are our best ambassadors.</p>
        </section>
      </div>
    </div>
  );
}

export default TutoringWebsite;
