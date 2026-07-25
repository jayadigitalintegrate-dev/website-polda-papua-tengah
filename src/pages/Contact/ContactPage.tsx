import "./ContactPage.css";

import ContactHero from "../../components/contact/ContactHero/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo/ContactInfo";
import ContactMap from "../../components/contact/ContactMap/ContactMap";
import ContactForm from "../../components/contact/ContactForm/ContactForm";

import { contactData } from "../../data/contactData";


function ContactPage() {

  return (

    <main className="contact-page">


      <ContactHero />


      <section className="contact-page__content">


        <div className="container">


          <div className="contact-page__grid">


            <div className="contact-page__left">


              <ContactInfo

                address={contactData.address}

                phone={contactData.phone}

                email={contactData.email}

                website={contactData.website}

                officeHours={contactData.officeHours}

              />



              <ContactMap

                embed={contactData.mapEmbed}

              />


            </div>



            <div className="contact-page__right">


              <ContactForm />


            </div>


          </div>


        </div>


      </section>


    </main>

  );

}


export default ContactPage;