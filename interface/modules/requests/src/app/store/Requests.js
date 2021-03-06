/*
 * File: app/store/Requests.js
 *
 * This file was generated by Sencha Architect
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.2.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.2.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('requests.store.Requests', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'Requests',
            data: [
                {
                    id: 1,
                    name: 'GetCapabilities',
                    method: 'GET',
                    conf: [
                        [
                            'service',
                            'SOS'
                        ],
                        [
                            'version',
                            '1.0.0'
                        ],
                        [
                            'request',
                            'getCapabilities'
                        ],
                        [
                            'section',
                            'serviceidentification,serviceprovider,operationsmetadata,contents'
                        ]
                    ]
                },
                {
                    id: 2,
                    name: 'DescribeSensor',
                    method: 'GET',
                    conf: [
                        [
                            'service',
                            'SOS'
                        ],
                        [
                            'version',
                            '1.0.0'
                        ],
                        [
                            'request',
                            'DescribeSensor'
                        ],
                        [
                            'outputFormat',
                            'text/xml;subtype="sensorML/1.0.1"'
                        ],
                        [
                            'procedure',
                            'T_LUGANO'
                        ]
                    ]
                },
                {
                    id: 3,
                    name: 'GetObservation XML',
                    method: 'GET',
                    conf: [
                        [
                            'service',
                            'SOS'
                        ],
                        [
                            'version',
                            '1.0.0'
                        ],
                        [
                            'request',
                            'GetObservation'
                        ],
                        [
                            'offering',
                            'temporary'
                        ],
                        [
                            'procedure',
                            'BELLINZONA'
                        ],
                        [
                            'eventTime',
                            '2015-06-02T00:00:00+01:00/2015-06-03T00:00:00+01:00'
                        ],
                        [
                            'observedProperty',
                            'rainfall,temperature,humidity,wind'
                        ],
                        [
                            'responseFormat',
                            'text/xml;subtype="om/1.0.0"'
                        ]
                    ]
                },
                {
                    id: 4,
                    name: 'GetObservation CSV',
                    method: 'GET',
                    conf: [
                        [
                            'service',
                            'SOS'
                        ],
                        [
                            'version',
                            '1.0.0'
                        ],
                        [
                            'request',
                            'GetObservation'
                        ],
                        [
                            'offering',
                            'temporary'
                        ],
                        [
                            'procedure',
                            'BELLINZONA'
                        ],
                        [
                            'eventTime',
                            '2015-06-02T00:00:00+01:00/2015-06-03T00:00:00+01:00'
                        ],
                        [
                            'observedProperty',
                            'rainfall,temperature,humidity,wind'
                        ],
                        [
                            'responseFormat',
                            'text/plain'
                        ]
                    ]
                },
                {
                    id: 5,
                    name: 'GetObservation JSON',
                    method: 'GET',
                    conf: [
                        [
                            'service',
                            'SOS'
                        ],
                        [
                            'version',
                            '1.0.0'
                        ],
                        [
                            'request',
                            'GetObservation'
                        ],
                        [
                            'offering',
                            'temporary'
                        ],
                        [
                            'procedure',
                            'BELLINZONA'
                        ],
                        [
                            'eventTime',
                            '2015-06-02T00:00:00+01:00/2015-06-03T00:00:00+01:00'
                        ],
                        [
                            'observedProperty',
                            'rainfall,temperature,humidity,wind'
                        ],
                        [
                            'responseFormat',
                            'application/json'
                        ]
                    ]
                },
                {
                    id: 6,
                    name: 'GetObservation BBOX',
                    method: 'GET',
                    conf: [
                        [
                            'service',
                            'SOS'
                        ],
                        [
                            'version',
                            '1.0.0'
                        ],
                        [
                            'request',
                            'GetObservation'
                        ],
                        [
                            'offering',
                            'temporary'
                        ],
                        [
                            'featureOfInterest',
                            '<ogc:BBOX><ogc:PropertyName>the_geom</ogc:PropertyName><gml:Box srsName=\'EPSG:4326\'><gml:coordinates>8.90196,45.98220 9.00762,46.06625</gml:coordinates></gml:Box></ogc:BBOX>'
                        ],
                        [
                            'eventTime',
                            '2015-06-02T00:00:00+01:00/2015-06-03T00:00:00+01:00'
                        ],
                        [
                            'observedProperty',
                            'rainfall,temperature,humidity,wind'
                        ],
                        [
                            'responseFormat',
                            'text/xml;subtype="om/1.0.0"'
                        ]
                    ]
                },
                {
                    id: 7,
                    name: 'GetFeatureOfInterest',
                    method: 'GET',
                    conf: [
                        [
                            'service',
                            'SOS'
                        ],
                        [
                            'version',
                            '1.0.0'
                        ],
                        [
                            'request',
                            'getFeatureOfInterest'
                        ],
                        [
                            'srsName',
                            '21781'
                        ],
                        [
                            'FeatureOfInterestId',
                            'LUGANO'
                        ]
                    ]
                },
                {
                    id: 10,
                    name: 'GetCapabilities XML',
                    method: 'POST',
                    conf: 'getCapabilities.xml'
                },
                {
                    id: 11,
                    name: 'DescribeSensor',
                    method: 'POST',
                    conf: 'describeSensor.xml'
                },
                {
                    id: 12,
                    name: 'InsertObservation',
                    method: 'POST',
                    conf: 'locarnoinsertobservation.xml'
                },
                {
                    id: 13,
                    name: 'GetObservation',
                    method: 'POST',
                    conf: 'getObservation.xml'
                },
                {
                    id: 14,
                    name: 'GetFeatureOfInterest',
                    method: 'POST',
                    conf: 'getFeatureOfInterest.xml'
                }
            ],
            fields: [
                {
                    name: 'id'
                },
                {
                    name: 'name'
                },
                {
                    name: 'method'
                },
                {
                    name: 'conf'
                }
            ]
        }, cfg)]);
    }
});