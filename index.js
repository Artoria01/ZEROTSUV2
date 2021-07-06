const { ShardingManager } = require("discord.js");
const config = require("./informations/config.json");
const manager = new ShardingManager('./main.js', {
	totalShards: "auto",
  	respawn: true,
  	token: process.env.TOKEN});
manager.spawn();
// Le bot gère les shards tout seul.