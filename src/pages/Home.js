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
        <link rel="icon" type="image/x-icon" href="./src/projectlogo.ico" />
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
      <div className='pricing'>
        <div className='price-headline'>PRICING</div>
        <div className='price-tagline'>Choose Your Plan</div>
        <div className='price-subline'>Select the perfect plan that suits your needs</div>
        <div className='price-tiers'>
          <div className='tier-1'>
            <div className='tier-1-heading'>Free</div>
            <div className='tier-1-desc'>Our Free plan allows you to access basic features for no cost.</div>
            <div className='tier-1-price'>Free</div>
            <ul className='tier-1-benefits'>
              <div>✔ Unlimited question responses</div>
              <div>✔ Access to voice assistant chatbot</div>
              <div>✔ Option to see sentiment analysis of your loved ones' responses</div>
              <div>✔ Timely check up on your loved ones</div>
              <div>✔ Reminders for your loved one's medicines and hospital check ups</div>
            </ul>
          </div>
          <div className='tier-2'>
            <div className='tier-2-heading'>Premium</div>
            <div className='tier-2-desc'>Get the ultimate experience by upgrading to our Premium plan specially tailored for you.</div>
            <div className='tier-2-price'>$55/month</div>
            <ul className='tier-2-benefits'>
              <div>✔ All features of FREE plan</div>
              <div>✔ Priority customer support</div>
              <div>✔ Option to share sentiment analysis reports to caregivers or PSWs</div>
              <div>✔ Personalize AI companionship and entertainment</div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
