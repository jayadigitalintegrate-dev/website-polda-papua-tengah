import "./ContactPage.css";

import ContactHero from "../../components/contact/ContactHero/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo/ContactInfo";
import ContactMap from "../../components/contact/ContactMap/ContactMap";
import ContactForm from "../../components/contact/ContactForm/ContactForm";

import { contactData } from "../../data/contactData";
import Container from "../../components/common/Container/Container";


function ContactPage() {

  return (

    <main className="contact-page">


      <ContactHero />


      <section className="contact-page__content">


        <Container>


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

                embed={contactData.map.embed}

                latitude={contactData.map.latitude}

                longitude={contactData.map.longitude}

                showMap={contactData.map.show}

              />


            </div>



            <div className="contact-page__right">


              <ContactForm />


            </div>


          </div>


        </Container>


      </section>


    </main>

  );

}


export default ContactPage;
