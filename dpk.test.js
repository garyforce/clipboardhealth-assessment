const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the hash value when the input length is bigger than 256", () => {
    const event = {
      partitionKey:
        "a1a2a3a4a5a6a7a8a9a0a1a2a3a4a5a6a7a8a9a0a1a2a3a4a5a6a7a8a9a0a1a2a3a4a5a6a7a8a9a0a1a2a3a4a5a6a7a8a9a0a1a2a3a4a5a6a7a8a9a0a1a2a3a4a5a6a7a8a9a0a1a2a3a4a5a6a7a8a9a0a1a2a3a4a5a6a7a8a9a0a1a2a3a4a5a6a7a8a9a0a1a2a3a4a5a6a7a8a9a0a1a2a3a4a5a6a7a8a9a0a1a2a3a4a5a6a7a8a9a0a1a2a3a4a5a6a7a8a9a0a1a2a3a4a5a6a7a8a9a0",
    };
    const trivialKey = deterministicPartitionKey(event);

    expect(trivialKey.length).toBe(128);
  });
  it("Returns the same partition key when the input length is smaller than 256", () => {
    const event = {
      partitionKey: "partitionKey",
    };
    const trivialKey = deterministicPartitionKey(event);
    expect(trivialKey).toBe("partitionKey");
  });
});
