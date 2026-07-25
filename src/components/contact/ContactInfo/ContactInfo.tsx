import "./ContactInfo.css";


interface ContactInfoProps {

  address:string;

  phone:string[];

  email:string[];

  website:string;

  officeHours:string;

}


export default function ContactInfo({

  address,

  phone,

  email,

  website,

  officeHours

}:ContactInfoProps){


  return (

    <section className="contact-info">


      <div className="contact-info__container">


        <div className="contact-info__grid">


          <div className="contact-info__card">

            <span>
              📍
            </span>

            <h3>
              Alamat
            </h3>

            <p>
              {address}
            </p>

          </div>



          <div className="contact-info__card">

            <span>
              ☎
            </span>

            <h3>
              Telepon
            </h3>

            {
              phone.map((item,index)=>(
                <p key={index}>
                  {item}
                </p>
              ))
            }

          </div>




          <div className="contact-info__card">

            <span>
              ✉
            </span>

            <h3>
              Email
            </h3>

            {
              email.map((item,index)=>(
                <p key={index}>
                  {item}
                </p>
              ))
            }

          </div>




          <div className="contact-info__card">

            <span>
              🌐
            </span>

            <h3>
              Website
            </h3>

            <p>
              {website}
            </p>

          </div>



          <div className="contact-info__card">

            <span>
              🕒
            </span>

            <h3>
              Jam Pelayanan
            </h3>

            <p>
              {officeHours}
            </p>

          </div>


        </div>


      </div>


    </section>

  );

}