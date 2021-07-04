// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.statusCode = 200
  res.json({ name: 'Hello World!' })
}

let Discord;
                let Database;
                if(typeof window !== "undefined"){
                    Discord = DiscordJS;
                    Database = EasyDatabase;
                } else {
                    Discord = require("discord.js");
                    Database = require("easy-json-database");
                }
                const delay = (ms) => new Promise((resolve) => setTimeout(() => resolve(), ms));
                const s4d = {
                    Discord,
                    client: null,
                    tokenInvalid: false,
                    reply: null,
                    joiningMember: null,
                    database: new Database("./db.json"),
                    checkMessageExists() {
                        if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                        if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                    }
                };
                s4d.client = new s4d.Discord.Client({
                    fetchAllMembers: true
                });
                s4d.client.on('raw', async (packet) => {
                    if(['MESSAGE_REACTION_ADD', 'MESSAGE_REACTION_REMOVE'].includes(packet.t)){
                        const guild = s4d.client.guilds.cache.get(packet.d.guild_id);
                        if(!guild) return;
                        const member = guild.members.cache.get(packet.d.user_id) || guild.members.fetch(d.user_id).catch(() => {});
                        if(!member) return;
                        const channel = s4d.client.channels.cache.get(packet.d.channel_id);
                        if(!channel) return;
                        const message = channel.messages.cache.get(packet.d.message_id) || await channel.messages.fetch(packet.d.message_id).catch(() => {});
                        if(!message) return;
                        s4d.client.emit(packet.t, guild, channel, message, member, packet.d.emoji.name);
                    }
                });
                var bm;


s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!stfu') {
    bm = 0;
    s4dmessage.channel.send(String('Beschützermodus deactivated :/'));
  }

});

s4d.client.login('ODM2ODkwMjc0NzU0OTg1OTk1.YIkkzg.A8INzRi1PjwOM-55bwPAaHVj3eQ').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e; });

s4d.client.on('message', async (s4dmessage) => {
  if (!((s4dmessage.content) == '!attacke') && bm == 1) {
    s4dmessage.channel.send(String('selber'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!attacke') {
    bm = 1;
    s4dmessage.channel.send(String('Beschützermodus activated'));
  }

});

s4d.client.on('message', async (s4dmessage) => {
  if ((s4dmessage.content) == '!Schule') {
    s4dmessage.react('👎');await delay(Number(2)*1000);
    s4dmessage.channel.send(String('gar kein Bock!'));
  }

});

s4d.client.on('guildMemberAdd', async (param1) => {
s4d.joiningMember = param1;
  s4d.client.channels.cache.get('826491033609044038').send(String('Hola!'));
s4d.joiningMember = null
});

s4d.client.on('guildMemberRemove', async (param1) => {
s4d.leavingMember = param1;
  s4d.client.channels.cache.get('826491033609044038').send(String('Adios!'));
s4d.leavingMember = null
});

s4d.client.on('message', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == '!jk') {
    s4dmessage.channel.send(String((arguments2.join(' '))));
  }

});

                s4d;
