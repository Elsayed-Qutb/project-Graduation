import React from 'react'
import "./contact.css"

export default function Contact() {
  return (
    <div> <section className="contact-section2">
      <div className="contact-header2">
        <h1>Contact Us</h1>
        <p>Have questions? We're here to help. Reach out to our support team anytime.</p>
      </div>

      <div className="contact-content2">
        <div className="contact-form-card2">
          <h2 className="form-title2">Send us a Message</h2>



          <div className="contact-info-cards2">

            <div className="info-card2">
              <div className="icon-circle2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path
                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                  </path>
                </svg>
              </div>
              <div className="info-text2">
                <span className="info-label2">Call Us</span>
                <span className="info-value2">1800-123-4567</span>
              </div>
            </div>

            <div className="info-card2">
              <div className="icon-circle2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path
                    d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z">
                  </path>
                </svg>
              </div>
              <div className="info-text2">
                <span className="info-label2">Live Chat</span>
                <a href="#" className="info-action2">Start Chat</a>
              </div>
            </div>


            <div className="info-card2">
              <div className="icon-circle2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z">
                  </path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <div className="info-text2">
                <span className="info-label2">Email Us</span>
                <span className="info-value2">support@medicare.in</span>
              </div>
            </div>


            <div className="info-card2">
              <div className="icon-circle2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div className="info-text2">
                <span className="info-label2">Head Office</span>
                <span className="info-value2">123 Health Ave, Medical City, NY 10001</span>
              </div>
            </div>


            <div className="info-card2">
              <div className="icon-circle2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <div className="info-text2">
                <span className="info-label2">Partner with Us</span>
                <button className="partner-btn2">Become a Partner</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
