import React from 'react';
import '../../css/becomeTutor.css'; // CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faWallet } from '@fortawesome/free-solid-svg-icons'
import { faMoneyCheckDollar } from '@fortawesome/free-solid-svg-icons'
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'

const BeTutor = () => {
  return (
    <div>
      <div className="image-page">
        <div className="card">
          <div className="card-content">
            <h2>Become a private Tutor</h2>
            <p>Are you knowledgeable in a particular subject? Share your expertise by becoming a tutor! Help others learn and grow.</p>
            <p>Find students to teach by posting an ad on FindTutors</p>
            <button className="post-ad-btn">Post Your Ad for Free</button>
          </div>
        </div>
      </div>
      <div className="how-it-works-container">
        <h2>How does it work?</h2>
        <div className="how-it-works">
          <div className="step">
            <h3>1. Post your ad for free now</h3>
            <p>Post your ad for free and complete your private tutor profile. It'll only take you a couple of minutes.</p>
          </div>
          <div className="step">
            <h3>2. Receive requests</h3>
            <p>Students can contact you through our instant messaging and book a lesson.</p>
          </div>
          <div className="step">
            <h3>3. Start teaching</h3>
            <p>Set up lessons with your students and start tutoring.</p>
          </div>
        </div>
      </div>
      <div className="why-advertise-container">
        <h2>Why advertise?</h2>
        <div className="ad-reasons">
          <div className="ad-reason">
            <div className="icon-title">
              <FontAwesomeIcon icon={faGift} className="big-icon" />
              <h3>It's free</h3>
            </div>
            <p>Create your profile on FindTutors - it's completely free.</p>
          </div>
          <div className="ad-reason">
            <div className="icon-title">
              <FontAwesomeIcon icon={faSackDollar} className="big-icon" />
              <h3>Earn money</h3>
            </div>
            <p>Earn money by teaching the subjects or languages you're proficient in.</p>
          </div>
          <div className="ad-reason">
            <div className="icon-title">
              <FontAwesomeIcon icon={faWallet} className="big-icon" />
              <h3>No commission</h3>
            </div>
            <p>We don't charge any commission, you keep 100% of your earnings.</p>
          </div>
          <div className="ad-reason">
            <div className="icon-title">
              <FontAwesomeIcon icon={faMoneyCheckDollar} className="big-icon" />
              <h3>You name the price</h3>
            </div>
            <p>Choose the price of your lessons, say whether you commute and how much you charge for it.</p>
          </div>
          <div className="ad-reason">
            <div className="icon-title">
              <FontAwesomeIcon icon={faPhoneVolume} className="big-icon" />
              <h3>Show your phone number</h3>
            </div>
            <p>Verify your profile so that students can contact you.</p>
          </div>
          <div className="ad-reason">
            <div className="icon-title">
              <FontAwesomeIcon icon={faBook} className="big-icon" />
              <h3>Students in your city</h3>
            </div>
            <p>Every day thousands of tutors find students in their city.</p>
          </div>
        </div>
        <div className="faq-container">
        <h2>FAQ</h2>
        <div className="faq">
          <div className="faq-item">
            <h3>How can students contact me?</h3>
            <p>Once you've posted your first ad, students can contact you through a contact form. We'll notify you by email and you'll be able to keep in touch with your students through our messaging system. You can verify your phone number so that they can call you directly.</p>
          </div>
          <div className="faq-item">
            <h3>What price should I set?</h3>
            <p>There are many factors to consider when pricing your lessons. Your experience, availability, whether you commute, etc. We recommend having a look at the average price report for private lessons.</p>
          </div>
          <div className="faq-item">
          <h3>How do I advertise?</h3>
            <p>Registering with FindTutors is simple and only takes a few minutes. Post your first ad, complete your profile with your personal details, a presentation, photo and location.

          What su</p>
          </div>
          <div className="faq-item">
          <h3>What subjects can I teach?</h3>
            <p>Any subject, language or discipline in which you're an expert, proficient or can help your students, for example: English, French, German, maths, physics, computer science, programming, lessons for school students, lessons for university students, training for companies...</p>
          </div>
          <div className="faq-item">
          <h3>Do I have to pay a commission?</h3>
            <p>None. Everything you earn in your lessons is all for you.</p>
          </div>
          <div className="faq-item">
          <h3>I'm studying... can I tutor?</h3>
            <p>If you're a university student your profile will be very popular among primary, secondary and GCSE students, especially for support/refresher lessons or help with homework, usually for these subjects: maths, English, languages...
And, depending on what you're studying, you can also give lessons to other university students or adults.</p>
          </div>
          <div className="faq-item">
          <h3>How can I get reviews?</h3>
            <p>As you know, reviews are key when a student is looking for their perfect tutor. If you want reviews, you can send a request through your personal area so that your students and former students can give you a review. You can also ask for reviews through social media!</p>
          </div>
          <div className="faq-item">
          <h3>Should I offer a free first lesson?</h3>
            <p>We recommend doing it, for that first contact between tutor and student. You can get to know each other and plan your future lessons. It gives the new student more confidence in you.

Post your ad for free now</p>
          </div>
          <div className="button-container">
        <button className="post-ad-btn">Post Your Ad for Free</button>
      </div>
        </div>
        
      </div>
    </div>
      </div>

   
  );
}

export default BeTutor;
