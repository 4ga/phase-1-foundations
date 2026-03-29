import {describe, it, expect} from "vitest"
import {kilometersToMiles, milesToKilometers} from "../convert.js";

describe("kilometersToMiles", () =>{
 it("converts kilometers to miles", () => {
  expect(kilometersToMiles(5)).toBe(3.11);
 })

 it("converts 8 kilometers to miles", () =>{
  expect(kilometersToMiles(8)).toBe(4.97);
 })

 it("milesToKilometers", () => {
  expect(milesToKilometers(3)).toBe(4.83);
 })
})
