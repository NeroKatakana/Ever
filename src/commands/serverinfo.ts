import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class serverinfo implements IBotCommand {
    
    private readonly _command = "serverinfo"
    
    help(): string {
        return "This command is invalid.";
    }
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        let embed = new Discord.RichEmbed()
                        .setColor([124,252,0])
                        .setTitle("Anime Playlist")
                        .setAuthor("BlueRose", (msgObject.author.avatarURL))
                        .setFooter("This is pretty cool, Nope!")
                        .setThumbnail(msgObject.author.avatarURL)
                        .setTimestamp()
                        .setImage(msgObject.guild.iconURL)
                        .setDescription("A featured playlist created by the author! Consist of Anime OP and ED.")
                        .setURL("https://www.youtube.com/playlist?list=PLLuhrQyUVwNBUQBqKzLLswvVdITn77NYD")
                        .addField("Server Count:", `Our Server currently has ${msgObject.guild.memberCount} users!`)
                        .addField("Commands:", `?serverinfo  .... TBA`)

        msgObject.channel.send(embed)
            .catch(console.error);
    }
}