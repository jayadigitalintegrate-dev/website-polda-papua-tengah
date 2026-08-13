import nabire from "../../assets/polres/IxzZ08MmBu7ME2W9gz3fpj3H2SIog5mmt9vbfXBt.png";
import mimika from "../../assets/polres/naOVbGj8eMoCLO4E2vE0953l20VFVjXrrd1BlEyi.webp";
import paniai from "../../assets/polres/cWIA4EjWfP8ITJ8454OeH74NmrkfPqK5XdAJS3fb.png";
import intanJaya from "../../assets/polres/7fXWrEcQ8GkSIojZliQBbmMnWxsd8BfipyugVHUD.png";

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
        id: "1",
        nama: "Polres Nabire",
        wilayah: "Kabupaten Nabire, Provinsi Papua Tengah",
        alamat:
            "Jl. Jend. Sudirman No.1, Karang Mulia, Distrik Nabire, Kabupaten Nabire, Papua Tengah 98815",
        kapolres: "AKBP Samuel D. Tatiratu, S.I.K., CPHR",
        gambar: nabire,
    },
    {
        id: "2",
        nama: "Polres Mimika",
        wilayah: "Mimika, Papua Tengah",
        alamat:
            "Jl. Agimuga - Mile 32, Distrik Kuala Kencana, Kabupaten Mimika, Papua Tengah.",
        kapolres:
            "AKBP Alredo Agustinus Rumbiak, S.I.K., M.Tr.Mil., M.Han.",
        gambar: mimika,
    },
    {
        id: "3",
        nama: "Polres Paniai",
        wilayah:
            "Daerah Badauwo, Distrik Paniai Timur, Kabupaten Paniai, Provinsi Papua Tengah",
        alamat:
            "Daerah Badauwo, Distrik Paniai Timur, Kabupaten Paniai, Provinsi Papua Tengah (Kode Pos: 98781)",
        kapolres:
            "AKBP Roycke H. F. Betaubun, S.IP., S.I.K., M.Si., M.Tr.Opsla.",
        gambar: paniai,
    },
    {
        id: "4",
        nama: "Polres Intan Jaya",
        wilayah:
            "Wilayah hukum Polres Intan Jaya mencakup seluruh wilayah administratif Kabupaten Intan Jaya, yang berada di bawah naungan Kepolisian Daerah (Polda) Papua Tengah.",
        alamat: "",
        kapolres: "KOMPOL Sofian Corneles Akuila Samakori",
        gambar: intanJaya,
    },
];
