export interface ContactData {

  heroTitle: string;

  heroDescription: string;

  address: string;

  phone: string[];

  email: string[];

  website: string;

  officeHours: string;


  map: {

    embed: string;

    latitude: number;

    longitude: number;

    show: boolean;

  };


  whatsapp: string;

  emergencyCall: string;

  status: "published" | "draft";

}



export const contactData: ContactData = {

  heroTitle:
    "Hubungi Polda Papua Tengah",


  heroDescription:
    "Informasi kontak resmi dan layanan komunikasi masyarakat Polda Papua Tengah.",


  address:
    "Jl. Merdeka, Papua Tengah, Indonesia",


  phone: [
    "(0967) 000000",
    "Call Center 110"
  ],


  email: [
    "humas@poldapapuatengah.go.id"
  ],


  website:
    "https://poldapapuatengah.go.id",


  officeHours:
    "Senin - Jumat 08.00 - 16.00 WIT",


 map: {

    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37892.06156170076!2d135.45362569409068!3d-3.371602351650871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x681fa300481799d3%3A0xda89dec72fd65cdf!2sKantor%20POLDA%20Papua%20Tengah%20(sementara)!5e0!3m2!1sid!2sid!4v1785847796509!5m2!1sid!2sid",

   latitude: -3.371602,

longitude: 135.453626,

    show:
      true,

},


  whatsapp:
    "",


  emergencyCall:
    "110",


  status:
    "published"

};

