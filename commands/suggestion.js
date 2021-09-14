const { SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('suggestion')
        .setDescription('Sends suggestions to the suggestion channel'),
    async execute(interaction, client){
        var suggestion, suggestionChannel;
        var suggestionChannelId = '887386194214789210';

        interaction.reply('Conoce, ya mandé la sugerencia!');
        suggestion = interaction.content.replace('-suggestion', '');

        suggestionChannel = client.channels.cache.get(suggestionChannelId);

        await suggestionChannel.send('Suggestion: ' + suggestion).then(function(message){
            message.react('✅');
            message.react('❌')
        })
    }
}