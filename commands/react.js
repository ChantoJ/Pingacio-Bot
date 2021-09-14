const { SlashCommandBuilder} = require('@discordjs/builders');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('funnynumbers')
        .setDescription('Reacts with emojis'),
    async execute(msg){
        msg.react('6️⃣')
        .then(() => msg.react('9️⃣'))
        .then(() => msg.react('4️⃣'))
        .then(() => msg.react('2️⃣'))
        .then(() => msg.react('0️⃣'))
        .catch(error => console.error('Se despichó el emoji', error));
        
    }
}
