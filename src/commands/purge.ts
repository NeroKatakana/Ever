import * as Discord from "discord.js";
import { IBotCommand } from "../api";

export default class purge implements IBotCommand {

    private readonly _command = "purge"

    help(): string {
        return "(Admin Only) Deletes the desired number of message in a channel.";
    }

    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {

        //Clean up our msg
        msgObject.delete()
            .catch(console.error);

        //Make sure the user is an admin
        if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, but this command is only for Admins!`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }

        //Make sure they insert something
        if(!args[0]){
            msgObject.channel.send(`You must supply a number of message to be deleted!`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }

        //Convert arg[0] into a number
        let numberOfMessagesToDelete = Number(args[0]);

        //Make sure arg[0] is actually a number
        if(isNaN(numberOfMessagesToDelete))
        {
            msgObject.channel.send(`Sorry ${msgObject.author.username}, but that is not a valid number!`)
                .then(msg => {
                    (msg as Discord.Message).delete(5000)
                        .catch(console.error);
                });
            return;
        }

        //Make sure the number is an integer
        numberOfMessagesToDelete = Math.round(numberOfMessagesToDelete + 1);

        //Delete the desired number of messages
        msgObject.channel.bulkDelete(numberOfMessagesToDelete)
            .catch(console.error);
    }
}