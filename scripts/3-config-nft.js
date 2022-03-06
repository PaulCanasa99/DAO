import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x7b39c7E06A231a51355AD7B1EF76Ee33399959bA",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Jabulani",
        description: "This NFT will give you access to FitnessDAO!",
        image: readFileSync("scripts/assets/jabulani.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()