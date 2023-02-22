import * as WidgetApi from '@puzzel/widget-api-lib';

WidgetApi.connect().then(
    () => console.log('connected'),
    (error: any) => console.error('Failed to connect', error),
)
