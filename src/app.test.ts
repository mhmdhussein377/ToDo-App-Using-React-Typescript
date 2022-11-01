import { describe, expect, it } from "vitest";
import { add } from "./App";

describe("isZero's", () => {
    it("should return null", () => {
        expect(add(2,4)).toBe(6)
    })
})