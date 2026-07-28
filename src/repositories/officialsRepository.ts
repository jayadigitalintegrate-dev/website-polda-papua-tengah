import { officials } from "../data/officials";
import type { Official } from "../types/official";

export const officialsRepository = {
  getAll(): Official[] {
    return [...officials].sort(
      (a, b) => a.order - b.order
    );
  },

  getById(
    id: number
  ): Official | undefined {
    return officials.find(
      (item) => item.id === id
    );
  },
};