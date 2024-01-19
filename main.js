const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions, 
    ],
});

client.once('ready', () => {
    console.log('Bot is online!');
});

const Roles = async (message, roleId) => {
    try {
        const role = await message.guild.roles.fetch(roleId);
        if (role) {
            await message.member.roles.add(role);
            message.react('✅');
            return true;
        }
    } catch (error) {
        console.error(error);
        await message.react('⚠️');
        message.reply('역할을 추가하는 중에 문제가 발생했습니다.');
    }
    return false;
};

const ALL = async (lists, message, WhatTear1,RoleCode) => {
    if (message.channel.name === "ع˖⁺-⋆｡⋆༶역할-부여" && lists[lists.length - 1][0].toUpperCase() === WhatTear1) {
        return await Roles(message, RoleCode); 
    } 
};

client.on('messageCreate', async message => {
    if (message.author.bot) return;
    let lists = message.content.split(' ');
    lists = lists.filter(item => item !== '');

    let roleAssigned = false;
    if (await ALL(lists, message, 'U', '1178874545550143598')) roleAssigned = true;
    else if (await ALL(lists, message, 'I',  '1178867058021257256')) roleAssigned = true;
    else if (await ALL(lists, message, 'B',  '1178869859103293440')) roleAssigned = true;
    else if (await ALL(lists, message, 'S',  '1178869850475602011')) roleAssigned = true;
    else if (await ALL(lists, message, 'G',  '1178869785740705842')) roleAssigned = true;
    else if (await ALL(lists, message, 'P',  '1178869784423698544')) roleAssigned = true;
    else if (await ALL(lists, message, 'E',  '1178869782142009344')) roleAssigned = true;
    else if (await ALL(lists, message, 'D',  '1178869683982704672')) roleAssigned = true;
    else if (await ALL(lists, message, 'M',  '1178869682816688128')) roleAssigned = true;
    else if (await ALL(lists, message, 'GM', '1178869681415802990')) roleAssigned = true;
    else if (await ALL(lists, message, 'C',  '1178869672574210148')) roleAssigned = true;
    
    if (!roleAssigned && message.channel.name === "ع˖⁺-⋆｡⋆༶역할-부여") {
        const replyMessage = await message.reply(`"생년 닉넴#태그 성별 티어 적어주시면 역할 부여됩니다.
        ex) 01 수 정#kr1 여 E"`);
        await replyMessage.react('❌');               
    }
});

client.login(token);
