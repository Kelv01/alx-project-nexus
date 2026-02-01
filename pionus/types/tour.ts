export type Tour = {
  id: string;
  title: string;
  location: string;
  duration: string;
  price: number;
  image: string;
  groupSize: string;
  verified: boolean;
  description: string;
  highlights: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  guide: {
    name: string;
    photo: string;
    license: string;
    experience: string;
    languages: string[];
    rating: number;
    totalReviews: number;
  };
};
