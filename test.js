describe("Simple Calculations", () => {
  beforeAll(() => {
    console.log("This part executes once before all tests");
  });

  afterAll(() => {
    console.log("This part executes once after all tests");
  });

  describe("Test1", () => {
    beforeEach(() => {
      console.log("executes before every test");
    });

    test("Is returning 5 when adding 2 + 3", () => {
      expect(2 + 3).toBe(5);
    });

    test("Is returning 6 when multiplying 2 * 3", () => {
      expect(2 * 3).toBe(6);
    });
  });

  describe("Test2", () => {
    beforeEach(() => {
      console.log("executes before every test");
    });

    test("Is returning 5 when adding 2 + 3", () => {
      expect(2 + 3).toBe(5);
    });

    test("Is returning 8 when multiplying 2 * 4", () => {
      expect(2 * 4).toBe(8);
    });
  });
});

