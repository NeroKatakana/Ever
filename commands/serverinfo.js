"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = require("discord.js");
class serverinfo {
    constructor() {
        this._command = "serverinfo";
    }
    help() {
        return "This command is invalid.";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let embed = new Discord.RichEmbed()
                .setColor([124, 252, 0])
                .setTitle("Anime Playlist")
                .setAuthor("BlueRose", (msgObject.author.avatarURL))
                .setFooter("This is pretty cool, Nope!")
                .setThumbnail(msgObject.author.avatarURL)
                .setTimestamp()
                .setImage(msgObject.guild.iconURL)
                .setDescription("A featured playlist created by the author! Consist of Anime OP and ED.")
                .setURL("https://www.youtube.com/playlist?list=PLLuhrQyUVwNBUQBqKzLLswvVdITn77NYD")
                .addField("Server Count:", `Our Server currently has ${msgObject.guild.memberCount} users!`)
                .addField("Commands:", `?serverinfo  .... TBA`);
            msgObject.channel.send(embed)
                .catch(console.error);
        });
    }
}
exports.default = serverinfo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyaW5mby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9zZXJ2ZXJpbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBc0M7QUFHdEMsTUFBcUIsVUFBVTtJQUEvQjtRQUVxQixhQUFRLEdBQUcsWUFBWSxDQUFBO0lBMkI1QyxDQUFDO0lBekJHLElBQUk7UUFDQSxPQUFPLDBCQUEwQixDQUFDO0lBQ3RDLENBQUM7SUFFRCxhQUFhLENBQUMsT0FBZTtRQUN6QixPQUFPLE9BQU8sS0FBSyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3JDLENBQUM7SUFFSyxVQUFVLENBQUMsSUFBYyxFQUFFLFNBQTBCLEVBQUUsTUFBc0I7O1lBQy9FLElBQUksS0FBSyxHQUFHLElBQUksT0FBTyxDQUFDLFNBQVMsRUFBRTtpQkFDbEIsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxDQUFDLENBQUMsQ0FBQztpQkFDckIsUUFBUSxDQUFDLGdCQUFnQixDQUFDO2lCQUMxQixTQUFTLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztpQkFDbkQsU0FBUyxDQUFDLDRCQUE0QixDQUFDO2lCQUN2QyxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7aUJBQ3hDLFlBQVksRUFBRTtpQkFDZCxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7aUJBQ2pDLGNBQWMsQ0FBQyx3RUFBd0UsQ0FBQztpQkFDeEYsTUFBTSxDQUFDLDBFQUEwRSxDQUFDO2lCQUNsRixRQUFRLENBQUMsZUFBZSxFQUFFLDRCQUE0QixTQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsU0FBUyxDQUFDO2lCQUMzRixRQUFRLENBQUMsV0FBVyxFQUFFLHVCQUF1QixDQUFDLENBQUE7WUFFL0QsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2lCQUN4QixLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlCLENBQUM7S0FBQTtDQUNKO0FBN0JELDZCQTZCQyJ9