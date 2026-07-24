import nabire from "../../assets/polres/polres-nabire.webp";
import mimika from "../../assets/polres/polres-mimika.webp";
import paniai from "../../assets/polres/polres-paniai.webp";
import intanjaya from "../../assets/polres/polres-intanjaya.webp";
import puncak from "../../assets/polres/polres-puncak.webp";
import puncakjaya from "../../assets/polres/polres-puncakjaya.webp";
import tolikara from "../../assets/polres/polres-tolikara.webp";
import dogiayi from "../../assets/polres/polres-dogiayi.webp";
import deiyai from "../../assets/polres/polres-deiyai.webp";


export interface Polres {
    id: string;
    nama: string;
    wilayah: string;
    alamat: string;
    kapolres: string;
    gambar: string;
}


export const polresData: Polres[] = [

    {
        id: "polres-nabire",
        nama: "Polres Nabire",
        wilayah: "Kabupaten Nabire",
        alamat: "Nabire, Papua Tengah",
        kapolres: "Kapolres Nabire",
        gambar: nabire
    },

    {
        id: "polres-mimika",
        nama: "Polres Mimika",
        wilayah: "Kabupaten Mimika",
        alamat: "Timika, Papua Tengah",
        kapolres: "Kapolres Mimika",
        gambar: mimika
    },

    {
        id: "polres-paniai",
        nama: "Polres Paniai",
        wilayah: "Kabupaten Paniai",
        alamat: "Enarotali, Papua Tengah",
        kapolres: "Kapolres Paniai",
        gambar: paniai
    },

    {
        id: "polres-intan-jaya",
        nama: "Polres Intan Jaya",
        wilayah: "Kabupaten Intan Jaya",
        alamat: "Sugapa, Papua Tengah",
        kapolres: "Kapolres Intan Jaya",
        gambar: intanjaya
    },

    {
        id: "polres-puncak",
        nama: "Polres Puncak",
        wilayah: "Kabupaten Puncak",
        alamat: "Ilaga, Papua Tengah",
        kapolres: "Kapolres Puncak",
        gambar: puncak
    },

    {
        id: "polres-puncak-jaya",
        nama: "Polres Puncak Jaya",
        wilayah: "Kabupaten Puncak Jaya",
        alamat: "Mulia, Papua Tengah",
        kapolres: "Kapolres Puncak Jaya",
        gambar: puncakjaya
    },

    {
        id: "polres-tolikara",
        nama: "Polres Tolikara",
        wilayah: "Kabupaten Tolikara",
        alamat: "Karubaga, Papua Tengah",
        kapolres: "Kapolres Tolikara",
        gambar: tolikara
    },

    {
        id: "polres-dogiyai",
        nama: "Polres Dogiyai",
        wilayah: "Kabupaten Dogiyai",
        alamat: "Kigamani, Papua Tengah",
        kapolres: "Kapolres Dogiyai",
        gambar: dogiayi
    },

    {
        id: "polres-deiyai",
        nama: "Polres Deiyai",
        wilayah: "Kabupaten Deiyai",
        alamat: "Tigi, Papua Tengah",
        kapolres: "Kapolres Deiyai",
        gambar: deiyai
    }

];