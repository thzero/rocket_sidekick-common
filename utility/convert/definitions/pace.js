const metric = {
    'min/km': {
        name: {
            singular: 'Minute per kilometre',
            plural: 'Minutes per kilometre',
        },
        to_anchor: 0.06,
    },
    's/m': {
        name: {
            singular: 'Second per metre',
            plural: 'Seconds per metre',
        },
        to_anchor: 1,
    },
};
const imperial = {
    'min/mi': {
        name: {
            singular: 'Minute per mile',
            plural: 'Minutes per mile',
        },
        to_anchor: 0.0113636,
    },
    's/ft': {
        name: {
            singular: 'Second per foot',
            plural: 'Seconds per foot',
        },
        to_anchor: 1,
    },
};
const measure = {
    systems: {
        metric,
        imperial,
    },
    anchors: {
        metric: {
            imperial: {
                ratio: 0.3048,
            },
        },
        imperial: {
            metric: {
                ratio: 1 / 0.3048,
            },
        },
    },
};
export default measure;
