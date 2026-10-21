import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vite-plus/test";
import StageStatus from "./StageStatus.vue";
import { listOfStatues } from "./constants.ts";

const expected = {
  "on-sprue": { colour: "var(--on-sprue)", text: "On sprue" },
  construction: { colour: "var(--construction)", text: "Constructing" },
  painting: { colour: "var(--painting)", text: "Painting" },
  done: { colour: "var(--done)", text: "Done" },
} as const;

describe("StageStatus", () => {
  test.each(listOfStatues)("renders the %s status", (status) => {
    const wrapper = mount(StageStatus, { props: { status } });

    expect(wrapper.text()).toBe(expected[status].text);
    expect(wrapper.attributes("style")).toContain(expected[status].colour);
  });

  test("defaults to on-sprue when no status is given", () => {
    const wrapper = mount(StageStatus);

    expect(wrapper.text()).toBe(expected["on-sprue"].text);
  });

  test("covers every status in listOfStatues", () => {
    expect([...listOfStatues].sort((a, b) => a.localeCompare(b))).toEqual(
      Object.keys(expected).sort((a, b) => a.localeCompare(b)),
    );
  });

  test("does not crash on an unknown status", () => {
    expect(() => mount(StageStatus, { props: { status: "unknown" as never } })).not.toThrow();
  });
});
