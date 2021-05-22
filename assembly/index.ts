import {
  BadLadsObject,
  decodeString,
  postPlayerMessage,
} from "@chemicalheads/as-badlads";

export function onPlayerChatMessage(
  playerState: BadLadsObject,
  messageBuffer: ArrayBuffer,
  channel_index: i32
): bool {
  const message = decodeString(messageBuffer);
  if (message.toLowerCase().startsWith("bad")) {
    postPlayerMessage(playerState, "You've said the bad word!");
    return false;
  }
  return true;
}
