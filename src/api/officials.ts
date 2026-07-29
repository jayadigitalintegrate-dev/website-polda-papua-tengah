import { officials } from "../data/officials";
import type { Official } from "../types/official";

export const officialsApi = {
  async getAll(): Promise<Official[]> {
    return Promise.resolve(officials);
  },

  async getById(
    id: number
  ): Promise<Official | undefined> {
    return Promise.resolve(
      officials.find((item) => item.id === id)
    );
  },
};