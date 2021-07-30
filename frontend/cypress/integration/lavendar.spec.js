const randID = Math.floor(Math.random() * 10000);

describe("Lavendar", function () {
  beforeEach(function () {
    cy.visit("http://localhost:3000");
  });

  it("All auth forms are shown", function () {
    cy.contains("LOG IN");
    cy.contains("REGISTER");
    cy.contains("ID");
  });

  it("API page is shown", function () {
    cy.contains("API").click();
    cy.contains("Lavendar REST API");
  });

  describe("Auth", function () {
    it("Register succeeds", function () {
      cy.contains("REGISTER").click();
      cy.get("#email").type(`test@${randID}.ok`);
      cy.get("#password").type("123456");
      cy.contains("Register").click();
      cy.contains("Logout");
    });

    it("fails with wrong credentials through login", function () {
      cy.get("#email").type("invalid");
      cy.get("#password").type("invalid");
      cy.get("#login-btn").click();

      cy.contains("Email or password is wrong");
    });

    it("succeeds with correct credentials through login", function () {
      cy.get("#email").type(`test@${randID}.ok`);
      cy.get("#password").type("123456");
      cy.get("#login-btn").click();
      cy.contains("Logout");
    });

    it("fails with invalid ID through ID", function () {
      cy.contains("ID").click();
      cy.contains("Load").click();
      cy.contains("ID is invalid");
    });
  });

  describe("When logged in", function () {
    beforeEach(function () {
      cy.get("#email").type(`test@${randID}.ok`);
      cy.get("#password").type("123456");
      cy.get("#login-btn").click();
      cy.contains("Logout");
    });

    it("event can be created", function () {
      cy.get("#add-event").click();
      cy.get("#calendar-title").type(`event${randID}`);
      cy.contains("Create").click();
    });

    it("event can be removed", function () {
      cy.contains(`event${randID}`).click();
      cy.contains("close").click();
      cy.contains(`event${randID}`).should("not.exist");
    });

    it("task can be created", function () {
      cy.contains("date_range").click();
      cy.contains("add").click();
      cy.get("#task-title").type(`task${randID}`);
      cy.contains("Create").click();
    });

    it("task can be removed", function () {
      cy.contains("date_range").click();
      cy.contains("close").click();
      cy.contains(`task${randID}`).should("not.exist");
    });
  });
});
