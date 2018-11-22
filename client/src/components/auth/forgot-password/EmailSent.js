import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../layout/Navbar';

 function EmailSent() {
  return (
    <div>
      <Navbar />
      <div class="forgot-password">
        <section class="section profile-section">
          <div class="container">
          
            <div class="row">
              <div>
                <h2>Un email vous a été envoyé !</h2>
                <Link to="/">
                  <h5 className="btn-link">Retourner à l'acceuil</h5>
                </Link>
              </div>
            </div>

          </div>
        </section>    
      </div>
    </div>

  )
}

export default EmailSent;
