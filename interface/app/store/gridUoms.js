/*
 * File: app/store/gridUoms.js
 * Date: Fri Apr 25 2014 11:04:11 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.store.gridUoms', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'griduoms',
            proxy: {
                type: 'ajax',
                url: '',
                reader: {
                    type: 'json',
                    idProperty: 'definition',
                    messageProperty: 'message',
                    root: 'data'
                }
            },
            fields: [
                {
                    name: 'name',
                    type: 'string'
                },
                {
                    name: 'description',
                    type: 'string'
                },
                {
                    name: 'procedures'
                }
            ]
        }, cfg)]);
    }
});