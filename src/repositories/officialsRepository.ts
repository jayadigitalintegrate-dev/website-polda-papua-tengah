import { officialsApi } from "../api/officials";
import { officials as localOfficials } from "../data/officials";
import type { Official } from "../types/official";

export const officialsRepository = {
    async getAll(): Promise<Official[]> {
        const local = [...localOfficials].sort(
            (a, b) => a.order - b.order
        );

        try {
            const cmsOfficials = await officialsApi.getAll();

            if (cmsOfficials.length === 0) {
                return local;
            }

            /*
             * Struktur lokal menjadi baseline posisi pejabat.
             *
             * Data CMS hanya menggantikan posisi yang sudah tersedia
             * berdasarkan sort_order. Dengan demikian:
             *
             * - Posisi yang sudah diinput CMS -> gunakan data CMS.
             * - Posisi yang belum diinput CMS -> tetap gunakan data lokal.
             * - Posisi baru dari CMS di luar baseline lokal -> tetap ditambahkan.
             *
             * Jangan mengganti seluruh localOfficials hanya karena API
             * CMS mengembalikan sebagian data.
             */
            const cmsByOrder = new Map(
                cmsOfficials.map((official) => [
                    official.order,
                    official,
                ])
            );

            const merged = local.map((localOfficial) => {
                return (
                    cmsByOrder.get(localOfficial.order) ??
                    localOfficial
                );
            });

            /*
             * Jika CMS memiliki posisi baru yang belum ada di baseline
             * lokal, tambahkan tanpa menghilangkan posisi yang sudah ada.
             */
            const localOrders = new Set(
                local.map((official) => official.order)
            );

            const additionalCmsOfficials = cmsOfficials.filter(
                (official) => !localOrders.has(official.order)
            );

            return [
                ...merged,
                ...additionalCmsOfficials,
            ].sort(
                (a, b) => a.order - b.order
            );
        } catch (error) {
            console.warn(
                "CMS Pejabat tidak dapat diakses. Menggunakan data lokal.",
                error
            );

            return local;
        }
    },

    async getById(
        id: number
    ): Promise<Official | undefined> {
        const officials = await this.getAll();

        return officials.find(
            (item) => item.id === id
        );
    },
};
