export interface Potato {
    id: string | number;
    name: string; 
    image: StaticImageData;
    details: {
      description: string;
      best_uses: string[]
    }
  }