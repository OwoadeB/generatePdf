const CronJob = require("cron").CronJob;
const fs = require("fs");

module.exports = () => {
  if (!fs.existsSync("public")) return;
  else {
    const job = new CronJob(
      // "0 */4 * * *",
      "* * * * * *",
      function () {
        fs.rmdirSync("public", { recursive: true });
      },
      null,
      true,
      "America/Los_Angeles"
    );
    console.info("file deleted");
    job.start();
  }
};
