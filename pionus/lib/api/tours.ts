import { tours, openGroups } from "@/data/tours";

export async function getAllTours() {
  return tours;
}

export async function getTourById(tourid: string) {
  return tours.find((t) => t.id === tourid) || null;
}

export async function getOpenGroupsByTourId(tourid: string) {
  return openGroups.filter((group) => group.tourId === tourid);
}
