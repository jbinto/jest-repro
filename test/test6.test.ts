import { NestExpressApplication } from "@nestjs/platform-express";
import { Test } from "@nestjs/testing";
import { range } from "lodash";
import { AppModule } from "../src/app.module";

describe("test4", () => {
  test.each(range(0, 100))("%i", () => {
    expect(true).toBe(true);
  });
});
