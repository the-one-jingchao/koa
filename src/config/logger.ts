export default {
    log: {
        appenders: {
            out: { type: 'stdout'},
            app: {
                type: 'file',
                filename: 'logs/app.log',
                pattern: '-yyyy-MM-dd',
                maxLogSize: 10485760,
                numBackups: 3,
            }
        },
        categories: {
            default: {
                appenders: [ 'out', 'app' ],
                level: 'info',
            }
        }
    }
}
