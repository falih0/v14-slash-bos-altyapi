
const { SlashCommandBuilder, PermissionFlagsBits, ButtonBuilder, ActionRowBuilder, ButtonStyle, Events, EmbedBuilder} = require('discord.js');
const client = require('discord.js')
module.exports = class another {
    constructor() {
        (this.name = 'deneme'),
            (this.slashCommand = new SlashCommandBuilder()
                .setName('deneme')
                .setDescription('Test komududur.')
                .toJSON());
    }

async run(interaction) {
const embed = new EmbedBuilder()
.setTitle('Test Komut!')
.setDescription(`deneme komududur.
Discordumuz: [buraya tıkla](https://discord.gg/PsDK77e4Wj)`)
await interaction.reply({ embeds: [embed], ephemeral: false });
    }
};