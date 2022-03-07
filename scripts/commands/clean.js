const { Command } = require("commander");

const cleanCommand = new Command('clean')
  .description('清理环境')
  .action(() => {
    
  })


module.exports = cleanCommand