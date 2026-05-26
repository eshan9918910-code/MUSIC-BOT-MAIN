// config.js
module.exports = {
  token: process.env.DISCORD_TOKEN,
  prefix: "!",
  enablePrefix: true,
  supportServer: "https://discord.gg/jV6FHZSGFb",

  activity: {
    name: "/help",
    type: "LISTENING" // PLAYING, LISTENING, WATCHING, STREAMING, COMPETING, VIBE EMPIRE
  },

  express: {
    enabled: true,
    port: 5000
  },

  emojis: {
    play: "<:nutzresume:1505275158942847206>",
    pause: "<:nutzpause:1505275198201397391>",
    stop: "<:nutzstop:1505279018180677822>",
    skip: "<:nutzskip:1505279295709249658>",
    queue: "<:queue:1505276310069706986>",
    music: "<a:music_2:1505276512944001065>",
    loop: "<:nutzloop:1505275594324316282>",
    shuffle: "<:nutzshuffle:1505275644991508691>",
    volume: "<:Volume_up:1505276148878413956>",
    success: "<:tick:1505276212765786153>",
    error: "<:cross:1505276265991639321>",
    info: "<:info:1505276363513270493>"
  },

  aliases: {
    play: ['p'],
    pause: ['pa'],
    resume: ['r', 'res'],
    skip: ['s', 'next'],
    stop: ['st', 'leave', 'disconnect'],
    volume: ['v', 'vol'],
    queue: ['q'],
    nowplaying: ['np', 'current'],
    shuffle: ['sh', 'mix'],
    loop: ['l', 'repeat'],
    remove: ['rm', 'delete'],
    move: ['mv'],
    clearqueue: ['cq', 'clear'],
    '247': ['24/7', 'stay'],
    stats: ['status', 'info'],
    ping: ['latency'],
    invite: ['inv'],
    support: ['server'],
    help: ['h', 'commands', 'cmd']
  },

  lavalink: {
    nodes: [
      {
        name: "Main Node",
        host: "eh1.ellenhost.qzz.io",
        port: 2012,
        password: "ellencloud.qzz.io",
        secure: false
      }
    ]
  }
};
