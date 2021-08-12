export type Bundle = {
  id: string;
  keyArtUrl: string;
  color: string;
  author: string;
  name: string;
  items: string[];
  priceUsd: number;
  description: string;
  forSale: boolean;
};

export const partialBundleSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    keyArtUrl: { type: "string" },
    color: { type: "string" },
    author: { type: "string" },
    name: { type: "string" },
    priceUsd: { type: "number" },
    description: { type: "string" },
    forSale: { type: "boolean" },
    items: {
      type: "array",
      minItems: 1,
      items: [
        { type: "string" },
      ],
    },
  },
};

export const bundleSchema = {
  ...partialBundleSchema,
  required: ["keyArtUrl", "color", "name", "priceUsd", "description", "forSale", "items", "author"],
};
