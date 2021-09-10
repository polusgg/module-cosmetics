export type Bundle = {
  id: string;
  numberId: number;
  keyArtUrl: string;
  color: string;
  name: string;
  items: string[];
  priceUsd: number;
  description: string;
  forSale: boolean;
  recurring: boolean;
  assignsDiscordRole?: string;
} & (
  {
    type: "COSMETIC",
  } | {
    type: "PERK"
  }
);

export const partialBundleSchema = {
  type: "object",
  properties: {
    id: { type: "string" },
    type: { type: "string" },
    keyArtUrl: { type: "string" },
    color: { type: "string" },
    name: { type: "string" },
    priceUsd: { type: "number" },
    description: { type: "string" },
    forSale: { type: "boolean" },
    recurring: { type: "boolean" },
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
  required: ["type", "keyArtUrl", "color", "name", "priceUsd", "description", "forSale", "items", "recurring"],
};
