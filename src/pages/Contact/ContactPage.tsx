import "./ContactPage.css";

import ContactHero from "../../components/contact/ContactHero/ContactHero";
import ContactInfo from "../../components/contact/ContactInfo/ContactInfo";
import ContactMap from "../../components/contact/ContactMap/ContactMap";
import ContactForm from "../../components/contact/ContactForm/ContactForm";
import Testimonials from "../../components/contact/Testimonials/Testimonials";
import ServiceStats from "../../components/contact/ServiceStats/ServiceStats";

import { contactData } from "../../data/contactData";

import Container from "../../components/common/Container/Container";

function ContactPage() {

  return (

    <main className="contact-page">

      <ContactHero />

      <section className="contact-page__content">

        <Container>

          {/* ===============================
              INFORMASI KONTAK
          =============================== */}

          <ContactInfo
            address={contactData.address}
            phone={contactData.phone}
            email={contactData.email}
            website={contactData.website}
            officeHours={contactData.officeHours}
          />

          {/* ===============================
              FORM KRITIK & SARAN
          =============================== */}

          <ContactForm />

          {/* ===============================
              STATISTIK PELAYANAN
          =============================== */}

          <ServiceStats />

          {/* ===============================
              TESTIMONI MASYARAKAT
          =============================== */}

          <Testimonials />

          {/* ===============================
              GOOGLE MAPS
          =============================== */}

          <ContactMap
            embed={contactData.map.embed}
            latitude={contactData.map.latitude}
            longitude={contactData.map.longitude}
            showMap={contactData.map.show}
          />

        </Container>

      </section>

    </main>

  );

}

export default ContactPage;