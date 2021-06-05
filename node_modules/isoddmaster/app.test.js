const isoddmaster = require("./app");

test("should return even or odd to a given number", () => {
    expect(isoddmaster(11)).toBe("odd");
    expect(isoddmaster(21)).toBe("odd");
    expect(isoddmaster(50)).toBe("even");
    expect(isoddmaster(22)).toBe("even");
});

test("a negative number is changed into an absolute number & return even or odd", () => {
    expect(isoddmaster(-10)).toBe("even");
    expect(isoddmaster(-15)).toBe("odd");
    expect(isoddmaster(-13)).toBe("odd");
    expect(isoddmaster(-22)).toBe("even");
});

test("should work with string", () => {
    expect(isoddmaster("-10")).toBe("even");
    expect(isoddmaster("11")).toBe("odd");
    expect(isoddmaster("-13")).toBe("odd");
    expect(isoddmaster("22")).toBe("even");
});
