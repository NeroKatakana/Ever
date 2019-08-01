import * as Discord from "discord.js";

export interface IBotCommand {
    help(): string;
    isThisCommand(command: string): boolean;
    runCommand(args: string[], msgObject: Discord.Message, client: Discord.Client): Promise<void>;
}

export interface GGEZ {
    help(): string;
    isThisCommand(command: string): boolean;
    runCommand(msgObject: Discord.Message, client: Discord.Client):void;
}