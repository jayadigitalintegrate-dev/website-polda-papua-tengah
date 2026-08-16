import { officialsApi } from "../api/officials";
import { officials as localOfficials } from "../data/officials";
import type { Official } from "../types/official";

export const officialsRepository = {
    async getAll(): Promise<Official[]> {
        try {
            const officials = await officialsApi.getAll();

            if (officials.length > 0) {
                return [...officials].sort(
                    (a, b) => a.order - b.order
                );
            }
        } catch (error) {
            console.warn(
                "CMS Pejabat tidak dapat diakses. Menggunakan data lokal.",
                error
            );
        }

        return [...localOfficials].sort(
            (a, b) => a.order - b.order
        );
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
