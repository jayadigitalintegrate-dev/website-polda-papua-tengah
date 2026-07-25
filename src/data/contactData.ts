export interface ContactData {

  heroTitle: string;

  heroDescription: string;


  address: string;

  phone: string[];

  email: string[];

  website: string;

  officeHours: string;


  mapEmbed: string;

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


  mapEmbed:
    ""

};