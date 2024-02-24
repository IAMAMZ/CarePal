import './Home.css'

export default function Home() {
  return (
    <div className="home-page">
      <div className='start-section'>
        <div className='headline'>Welcome to CarePal - the only Companion you need!</div>
        <div className='subheading'>Our mission is to provide personalized care and support for elderly individuals, ensuring their well-being and comfort.</div>
        <div className='section-buttons'>
        <button className='get-started'>Get Started</button>
        <a className='learn-more'>Learn More →</a>
        </div>
      </div>
      <div className='features'>
        <div className='key-features'>Key Features</div>
        <div className='feature-description'>Discover how our voice assistant chatbot can assist you in managing your health effectively.</div>
        <div className='all-features'>
          <div className='feature-1'>
            <div className='feature-1-title'>Voice-Activated Chatbot</div>
            <div className='feature-1-content'>Interact with the chatbot using your voice, making it easy and convenient for seniors.</div>
          </div>
          <div className='feature-2'>
            <div className='feature-2-title'>Medication Tracking</div>
            <div className='feature-2-content'>Keep a record of your medications by simply answering the chatbot's questions.</div>
          </div>
          <div className='feature-3'>
            <div className='feature-3-title'>Easy Monitoring</div>
            <div className='feature-3-content'>You can keep track of your loved ones' mental and physical health and share responses with caregivers or healthcare providers at the click of a button.</div>
          </div>
          <div className='feature-4'>
            <div className='feature-4-title'>User-Friendly Interface</div>
            <div className='feature-4-content'>Simplified design for seamless navigation, ensuring a stress-free experience for seniors.</div>
          </div>
        </div>
        </div>
    </div>
  );
}
