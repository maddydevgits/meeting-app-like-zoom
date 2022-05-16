export const BASE_HREF = '';

// API endpoint for retrieving the attendees list, joining the room, and ending the room
export const CHIME_ROOM_API = 'https://cvcb0cx1de.execute-api.us-east-1.amazonaws.com/Prod/';

// Chime-SDK allows up to 16 attendee videos
export const CHIME_ROOM_MAX_ATTENDEE = 16;

// Default video stream to play inside the video player
export const DEFAULT_VIDEO_STREAM =
  'https://352f62d334b5.us-east-1.playback.live-video.net/api/video/v1/us-east-1.496667932506.channel.3MxfJvpjis5Z.m3u8';

// Default Chat websocket link
export const CHAT_WEBSOCKET = 'wss://ekky2bcnbl.execute-api.us-east-1.amazonaws.com/Prod';

// Chime-SDK logging level: INFO, WARN, ERROR, DEBUG
export const CHIME_LOG_LEVEL = 'WARN';

// Chime-Web UI debugging logging: true / false
export const DEBUG = false;
