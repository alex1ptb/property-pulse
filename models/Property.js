import { Schema, model, models } from "mongoose";

const propertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
      required: [true, "Property name is required"],
    },
    type: {
      type: String,
      required: [true, "Property type is required"],
    },

    //description
    description: {
      type: String,
    },

    //location
    location: {
      street: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zip: {
        type: String,
      },
    },

    //beds
    beds: {
      type: Number,
      required: [true, "Number of beds is required"],
    },

    //baths
    baths: {
      type: Number,
      required: [true, "Number of baths is required"],
    },

    //square feet
    square_feed: {
      type: Number,
      required: [true, "Square feet is required"],
    },

    //amenities
    amenities: [
      {
        type: [String],
      },
    ],

    //rates
    rates: {
      nightly: {
        type: Number,
      },
      weekly: {
        type: Number,
      },
      monthly: {
        type: Number,
      },
    },

    //seller info
    seller_info: {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
    },

    //images
    images: [
      {
        type: String,
      },
    ],

    //is featured
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Property = models.Property || model("Property", propertySchema);

export default Property;
