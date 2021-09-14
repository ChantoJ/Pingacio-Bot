const { SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pingacio')
        .setDescription('Replies to pingacio with an insult'),
    async execute(interaction){
        await interaction.reply('Chupeme un huevo.');

    }
}