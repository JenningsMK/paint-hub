import { mount } from "@vue/test-utils";
import { afterEach, describe, expect, test, vi } from "vite-plus/test";
import StageStatus from "./StageStatus.vue";
import { listOfStatues } from "./constants.ts";

const expected = {
  "on-sprue": { colour: "var(--on-sprue)", text: "On sprue" },
  construction: { colour: "var(--construction)", text: "Constructing" },
  painting: { colour: "var(--painting)", text: "Painting" },
  done: { colour: "var(--done)", text: "Done" },
} as const;

describe("StageStatus", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

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

  test("shows an unknown status as text with the base styles but no background", () => {
    const wrapper = mount(StageStatus, { props: { status: "unknown" as never } });

    expect(wrapper.text()).toBe("unknown");
    const known = mount(StageStatus, { props: { status: "done" } });

    expect(wrapper.classes()).toEqual(known.classes());
    expect(wrapper.attributes("style")).toBeUndefined();
  });

  test("warns in development when given an unknown status", () => {
    const warn = vi.spyOn(console, "warn").mockImplementation(() => {});

    mount(StageStatus, { props: { status: "unknown" as never } });

    expect(warn.mock.calls.flat().join(" ")).toContain("Invalid prop");
  });
});
