import { officialsApi } from "../api/officials";
import type { Official } from "../types/official";

export const officialsRepository = {
  async getAll(): Promise<Official[]> {
    const officials = await officialsApi.getAll();

    return [...officials].sort(
      (a, b) => a.order - b.order
    );
  },

  async getById(
    id: number
  ): Promise<Official | undefined> {
    return officialsApi.getById(id);
  },
};
