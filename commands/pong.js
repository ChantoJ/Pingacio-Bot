const { SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pong')
        .setDescription('Replies to ping with ping'),
    async execute(interaction){
        await interaction.reply('ping!');

    }
}