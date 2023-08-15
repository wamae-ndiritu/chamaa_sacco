const { createChamaGroupsTable, createMembersTable, createContributionsTable } = require("./tables");

function createTables() {
    createChamaGroupsTable()
    .then(() => createMembersTable())
    .then(() => createContributionsTable())
    .then(() => {
      console.log("Tables created!")
    })
    .catch(error => {
      console.error("Error creating tables:", error);
    });
}


module.exports = {createTables}