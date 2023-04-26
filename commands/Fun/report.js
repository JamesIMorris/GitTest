const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('report')
        .setDescription('Reports a user to China')
        .addUserOption(option => option.setName('target').setDescription('The member to report').setRequired(true)),
    async execute(interaction) {
        const member = interaction.options.getMember('target');
        return interaction.reply({ content: `${member.user.username} has been reported to China`, ephemeral: true });
    },
};