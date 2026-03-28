import { describe, it, expect } from "vitest";
import { add, subtract, multiply, divide } from "../math.js";

describe("add", () => {
  it("adds two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });
});

describe("subtract", () => {
 it("subtracts two numbers", () => {
   expect(subtract(7,2)).toBe(5);
 })
})

describe("multiply", () => {
 it("multiply two numbers", () => {
   expect(multiply(4, 3)).toBe(12);
 })
})

describe("divide", () => {
 it("divide two numbers", () =>{
   expect(divide(10, 2)).toBe(5);
 })
})
