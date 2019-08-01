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
class kick {
    constructor() {
        this._command = "kick";
    }
    help() {
        return "Kicks the mentioned user";
    }
    isThisCommand(command) {
        return command === this._command;
    }
    runCommand(args, msgObject, client) {
        return __awaiter(this, void 0, void 0, function* () {
            let mentionedUser = msgObject.mentions.users.first();
            let suppliedReason = args.slice(1).join(" ") || "";
            let kickLog = `${msgObject.author.username}: ${suppliedReason}`;
            msgObject.delete(0)
                .catch(console.error);
            if (!msgObject.member.hasPermission("ADMINISTRATOR")) {
                msgObject.channel.send(`Nice try ${msgObject.author.username}, but you don't have permission to kick people!`)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            if (!mentionedUser) {
                msgObject.channel.send(`Sorry ${msgObject.author.username}, I couldn't find that user to kick.`)
                    .then(msg => {
                    msg.delete(5000)
                        .catch(console.error);
                });
                return;
            }
            msgObject.guild.member(mentionedUser).kick(kickLog)
                .then(console.log)
                .catch(console.error);
        });
    }
}
exports.default = kick;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia2ljay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tYW5kcy9raWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFHQSxNQUFxQixJQUFJO0lBQXpCO1FBRXFCLGFBQVEsR0FBRyxNQUFNLENBQUE7SUEwQ3RDLENBQUM7SUF4Q0csSUFBSTtRQUNBLE9BQU8sMEJBQTBCLENBQUM7SUFDdEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxPQUFlO1FBQ3pCLE9BQU8sT0FBTyxLQUFLLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDckMsQ0FBQztJQUVLLFVBQVUsQ0FBQyxJQUFjLEVBQUUsU0FBMEIsRUFBRSxNQUFzQjs7WUFFL0UsSUFBSSxhQUFhLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDckQsSUFBSSxjQUFjLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ25ELElBQUksT0FBTyxHQUFHLEdBQUcsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssY0FBYyxFQUFFLENBQUM7WUFFaEUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7aUJBQ2QsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUUxQixJQUFHLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLEVBQUU7Z0JBQ2pELFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLGlEQUFpRCxDQUFDO3FCQUN6RyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ1gsR0FBdUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3lCQUNoQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPO2FBQ1Y7WUFFRCxJQUFHLENBQUMsYUFBYSxFQUNqQjtnQkFDSSxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxzQ0FBc0MsQ0FBQztxQkFDM0YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUNYLEdBQXVCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQzt5QkFDaEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ1AsT0FBTzthQUNWO1lBRUQsU0FBUyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztpQkFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUM7aUJBQ2pCLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDN0IsQ0FBQztLQUFBO0NBQ0o7QUE1Q0QsdUJBNENDIn0=