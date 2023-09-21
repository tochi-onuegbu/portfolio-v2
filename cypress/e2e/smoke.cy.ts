describe("smoke tests", () => {
  afterEach(() => {
    // Clean up any user-related actions if needed
  });

  it("should load the homepage", () => {
    // Visit the homepage or the specific URL you want to test
    cy.visitAndCheck("/");

    // Perform assertions related to the homepage, but skip user-related actions
    // For example, check for specific elements on the page
  });

  // Add more tests for other specific functionality as needed
  // For example, test navigation, interactions, or UI elements
});
