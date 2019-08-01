import * as Discord from "discord.js";
import { IBotCommand } from "./api";
import * as ConfigFile from "./config";

const client: Discord.Client = new Discord.Client();

let commands: IBotCommand[] = [];

loadCommands(`${__dirname}/commands`)

client.on("ready", () => {

    //Let me know if ready
    console.log("Ready to go!");

    //Set the bot activity
    client.user.setActivity("Anime OP/ED", {type: "LISTENING"}); 
})

client.on("guildMemberAdd", member => {
  
    let welcomeChannel = member.guild.channels.find(channel => channel.name === "🍌💦i-like-katkit🍌💦") as Discord.TextChannel;
    let embed = new Discord.RichEmbed()
                    .setColor('RANDOM')
                    .setThumbnail("https://cdn.discordapp.com/attachments/340683078899073034/606110685885235201/0oYW3Ta.jpg")
                    .addField(':bust_in_silhouette: | Private Server by : ', `${welcomeChannel.guild.owner}`)
                    .addField(':microphone2: | Welcome!', `Welcome to the server, ${welcomeChannel.guild.name}`)
                    .addField(':id: | User :', "**[" + `${welcomeChannel.guild.id}` + "]**")
                    .addField(':family_mwgb: | You are member number', `${welcomeChannel.guild.memberCount}`)
                    .addField("Name", `<@` + `${welcomeChannel.id}` + `>`, true)
                    .addField('Server', `${welcomeChannel.guild.name}`, true )
                    .setFooter(`**${welcomeChannel.guild.name}**`)
                    .setTimestamp()
             welcomeChannel.send(embed)
         .catch(console.error);
   })

client.on("guildMemberAdd", member => {

    let welcomeChannel = member.guild.channels.find(channel => channel.name === "🍌💦i-like-katkit🍌💦") as Discord.TextChannel;
    welcomeChannel.send(`Welcome ${member.displayName}! This stupid command took 2 days to make!`)

    let memberRole = member.guild.roles.find(role => role.id == "578838550045523998");
    member.addRole(memberRole);

})

client.on("guildMemberRemove", member => {

    let welcomeChannel = member.guild.channels.find(channel => channel.name === "🍌💦i-like-katkit🍌💦") as Discord.TextChannel;
    welcomeChannel.send(`Wow, ${member.displayName}! Why you left...`)
})

client.on("message", msg => {

    //Ignore the message if it was by the bot
    if (msg.author.bot) { return; }

    //Ignore the message if send in dm
    if (msg.channel.type == "dm") { return; }

    //Ignore message that dont have prefix
    if (!msg.content.startsWith(ConfigFile.config.prefix)) { return; }
    
    //Handle the command
    handleCommand(msg);

})

async function handleCommand(msg: Discord.Message){

    //Split the string into the command and all the string
    let command = msg.content.split(" ")[0].replace(ConfigFile.config.prefix, "").toLowerCase();
    let args = msg.content.split(" ").slice(1);

    //loop through all of our commands
    for(const commandClass of commands){

        //Attempt to execute code but ready in case of a possible error
        try{

            //Check if our command class is the correct one
            if(!commandClass.isThisCommand(command)){

                //Go to the next iteration of the loop if this isnt the correct command class
                continue;
            }

            //Pause execution whilst we run the command's code
            await commandClass.runCommand(args, msg, client);
        }
        catch(exception){

            //If there is an error, then log in exception
            console.log(exception);
        }
    }
}

function loadCommands(commandsPath: string) {

    //Exit if there are no commands
    if(!ConfigFile.config || (ConfigFile.config.commands as string[]).length === 0) { return; }

    //Loop through all commands in config file
    for(const commandName of ConfigFile.config.commands as string[]) {

        const commandsClass = require(`${commandsPath}/${commandName}`).default;

        const command = new commandsClass() as IBotCommand;

        commands.push(command);
    }
}

client.login(ConfigFile.config.token);