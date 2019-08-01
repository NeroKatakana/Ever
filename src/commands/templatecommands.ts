import * as Discord from "discord.js";
import {IBotCommand} from "../api";

export default class templatecommand implements IBotCommand {
    
    private readonly _command = "templatecommand"
    
    help(): string {
        return "This command is invalid.";
    }
    
    isThisCommand(command: string): boolean {
        return command === this._command;
    }

    async runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void> {
        
        //Let me know it worked
        msgObject.channel.send(":)");
    }
}