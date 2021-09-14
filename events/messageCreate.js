const config = require("../config.json");

module.exports = {
    name: "messageCreate",
    on: true,
    async execute(msg, client) {
        if (!msg.content.startsWith(config.prefix)) return;

        var command = msg.content.substring(1);
        command = command.split(" ")[0];

        if (!client.commands.has(command)) return;

        try {
            await client.commands.get(command).execute(msg, client);
        } catch (error) {
            console.error(error);
            await msg.reply({ content: "rata me bugee", ephemeral: true })
        }
    },
}