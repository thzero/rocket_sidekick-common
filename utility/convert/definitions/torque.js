const metric = {
    Nm: {
        name: {
            singular: 'Newton-meter',
            plural: 'Newton-meters',
        },
        to_anchor: 1,
    },
};
const imperial = {
    'lbf-ft': {
        name: {
            singular: 'Pound-foot',
            plural: 'Pound-feet',
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
                ratio: 1 / 1.355818,
            },
        },
        imperial: {
            metric: {
                ratio: 1.355818,
            },
        },
    },
};
export default measure;
