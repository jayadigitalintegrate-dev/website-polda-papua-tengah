export interface ContactSocial {
  platform: string;
  url: string;
  icon: string;
}


export interface ContactData {

  title: string;

  description: string;

  address: string;

  phone: string[];

  email: string[];

  website: string;


  map: {
    embed: string;
  };


  socialMedia: ContactSocial[];


  officeHours: string;

}