export interface AnnouncementData {
  id: number;

  aktif: boolean;

  judul: string;

  isi: string;

  tipe: "text" | "image" | "youtube";

  gambar?: string;

  youtube?: string;

  downloadAktif: boolean;

  downloadLabel: string;

  downloadFile?: string;

  mulai: string;

  selesai: string;

  tampilSekaliPerHari: boolean;

  tombolTutup: string;
}

export const announcement: AnnouncementData = {
  id: 1,

  aktif: true,

  judul: "PENGUMUMAN RESMI",

  isi:
    "Dalam rangka Hari Bhayangkara ke-80, seluruh pelayanan SIM pada tanggal 1 Juli 2026 ditutup sementara. Pelayanan akan kembali normal pada hari berikutnya. Mohon maaf atas ketidaknyamanannya.",

  tipe: "text",

  gambar: "",

  youtube: "",

  downloadAktif: true,

  downloadLabel: "Download Surat",

  downloadFile: "/files/pengumuman.pdf",

  mulai: "2026-07-01",

  selesai: "2026-07-31",

  tampilSekaliPerHari: true,

  tombolTutup: "Saya Mengerti",
};