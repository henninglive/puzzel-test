import {connect, Api} from "@puzzel/widget-api-lib";

connect().then(
    (api) => OnConnected(api),
    (error: any) => console.error('Failed to connect Puzzel agent', error),
)

async function OnConnected(api: Api) {
    console.log('Connected')
    
    api.on('SYSTEM_CALL_STATE_CHANGE', onCallStateChange)
    api.on('SYSTEM_USER_STATUS_CHANGED', onUserStatusChanged)
    api.ready();

    console.log('Ready')
}

function onCallStateChange(arg1: any, arg2: any) {
    console.log('onCallStateChange', arg1, arg2);
}

function onUserStatusChanged(arg1: any) {
    console.log('onUserStatusChanged', arg1);
}