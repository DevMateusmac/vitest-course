import { describe, it, expect } from "vitest";
import { HttpError, ValidationError } from "./errors";

describe("class HttpError()", () => {
  it("should contain the provided status code, message and data", () => {
    const testStatus = 1;
    const testMessage = "Test";
    const testData = { key: "test" };

    const testError = new HttpError(testStatus, testMessage, testData);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).toBe(testData);
  });

  it("should contain undefined as data if no data is provided", () => {
    const testStatus = 1;
    const testMessage = "Test";

    const testError = new HttpError(testStatus, testMessage);

    expect(testError.statusCode).toBe(testStatus);
    expect(testError.message).toBe(testMessage);
    expect(testError.data).not.toBeDefined();
  });
});

describe("class ValidationError", () => {
  it("should contain the provided message", () => {
    const message = "test";
    const testErrorMessage = new ValidationError(message);

    expect(testErrorMessage.message).toBe(message)
  });
});
