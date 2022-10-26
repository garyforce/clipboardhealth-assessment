const crypto = require("crypto");

const createHashfromKey = (key) => {
  return crypto.createHash("sha3-512").update(key).digest("hex");
};

exports.deterministicPartitionKey = (event) => {
  const MAX_PARTITION_KEY_LENGTH = 256;
  let partitionKey = "0";

  if (event && typeof event === "object") {
    if (event.partitionKey) {
      partitionKey = event.partitionKey;
      partitionKey =
        partitionKey.length > MAX_PARTITION_KEY_LENGTH
          ? createHashfromKey(partitionKey)
          : partitionKey;
    } else {
      partitionKey = createHashfromKey(JSON.stringify(event));
    }
  }
  return partitionKey;
};
