export interface stores {
  info: {
    name: string;
    address: string;
    phone: string;
    store_count: number;
  };

  menu: {
    categories: [
      {
        name: string;
        description: string;
      }
    ];
    optionGroups: [
      {
        name: string;
        max_select: number;
        min_select: number;
        options: [
          {
            name: string;
            price: number;
            is_available: boolean;
          }
        ];
      }
    ];
    item: [
      {
        name: string;
        price: string;
        description: string;
        images: string[]; // urls
        categories: string[];
        optionGroups: string[];
        is_available: boolean;
      }
    ];
  };
}

export interface orders {
  bucket: [];
  receipt: [];
}
