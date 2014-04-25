/*
 * File: app/view/ui/MainMenu2.js
 * Date: Fri Apr 25 2014 11:04:11 GMT+0200 (CEST)
 *
 * This file was generated by Ext Designer version 1.2.3.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('istsos.view.ui.MainMenu2', {
    extend: 'Ext.panel.Panel',

    id: 'webadmincmp',
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    border: 0,
                    id: 'mainCenter',
                    autoScroll: true,
                    layout: {
                        type: 'fit'
                    },
                    title: '',
                    region: 'center'
                },
                {
                    xtype: 'panel',
                    height: 150,
                    id: 'submenu',
                    margin: '0px 0px 1px 0px ',
                    layout: {
                        align: 'stretch',
                        type: 'hbox'
                    },
                    collapsed: true,
                    hideCollapseTool: true,
                    title: '',
                    region: 'north',
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            flex: 1,
                            dock: 'top',
                            layout: {
                                padding: '4 0 4 0',
                                type: 'hbox'
                            },
                            items: [
                                {
                                    xtype: 'button',
                                    componentCls: 'test',
                                    id: 'menuServer',
                                    enableToggle: true,
                                    pressed: true,
                                    text: 'Server',
                                    toggleGroup: 'mainmenu'
                                },
                                {
                                    xtype: 'button',
                                    id: 'btnService',
                                    enableToggle: true,
                                    text: 'Services',
                                    toggleGroup: 'mainmenu',
                                    menu: {
                                        xtype: 'menu',
                                        id: 'menuServices'
                                    }
                                },
                                {
                                    xtype: 'button',
                                    id: 'btnObservations',
                                    enableToggle: true,
                                    text: 'Data viewer',
                                    toggleGroup: 'mainmenu'
                                },
                                {
                                    xtype: 'container',
                                    html: ' <div class=\'mainHeaderTitle\'><a href=\'http://istgeo.ist.supsi.ch/software/istsos/\' target=\'_BLANK\'><img height=28 src=\'images/istsos-logo.png\'/></a></div>',
                                    flex: 1
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    border: 0,
                    height: 25,
                    html: '<a style=\'color: white; text-decoration: none;\' href=\'http://www.supsi.ch/ist\' target=\'_BLANK\'>Open Source Software by Institute of Earth Science - SUPSI</a>',
                    id: 'mainFoot',
                    bodyCls: 'mainFooter',
                    bodyPadding: 8,
                    title: '',
                    region: 'south'
                }
            ]
        });

        me.callParent(arguments);
    }
});