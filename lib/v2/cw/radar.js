module.exports = {
    'cw.com.tw': {
        _name: '天下雜誌',
        '.': [
            {
                title: '最新上線',
                docs: 'https://docs.rsshub.app/traditional-media.html#tian-xia-za-zhi',
                source: ['/today', '/'],
                target: '/cw/today',
            },
            {
                title: '主頻道',
                docs: 'https://docs.rsshub.app/traditional-media.html#tian-xia-za-zhi',
                source: ['/masterChannel.action'],
                target: (_, url) => `/cw/master/${new URL(url).searchParams.get('idMasterChannel')}`,
            },
            {
                title: '子頻道',
                docs: 'https://docs.rsshub.app/traditional-media.html#tian-xia-za-zhi',
                source: ['/subchannel.action'],
                target: (_, url) => `/cw/sub/${new URL(url).searchParams.get('idSubChannel')}`,
            },
        ],
    },
};