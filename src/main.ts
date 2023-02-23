import {connect, Api} from "@puzzel/widget-api-lib";

function logTextArea(msg: string) {
    if (!textarea || !(textarea instanceof HTMLTextAreaElement)) {
        return;
    }

    textarea.textContent += msg + "\n";
    textarea.scrollTop = textarea.scrollHeight;
}

async function OnConnected(api: Api) {
    logTextArea('Connected');

    api.on('SYSTEM_USER_STATUS_CHANGED', onUserStatusChanged)
    api.on('SYSTEM_CALL_STATE_CHANGE', onCallStateChange)
    api.on('SYSTEM_STATE_UPDATED', onUserStatusUpdated)
    
    api.ready();

    logTextArea('Ready');
}

function onUserStatusChanged(arg: any) {
    logTextArea(`onUserStatusChanged: ${JSON.stringify(arg)}`);
}

function onCallStateChange(arg: any) {
    logTextArea(`onCallStateChange: ${JSON.stringify(arg)}`);
}

function onUserStatusUpdated(arg: any) {
    logTextArea(`onUserStatusUpdated: ${JSON.stringify(arg)}`);
}


const textarea = document.querySelector("textarea.console");

connect().then(
    (api) => OnConnected(api),
    (error: any) => logTextArea('Failed to connect Puzzel agent: ' + error),
)
