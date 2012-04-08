/*
 * File: app/view/legislator/TabPanel.js
 *
 * This file was generated by Sencha Designer version 2.0.0.
 * http://www.sencha.com/products/designer/
 *
 * This file requires use of the Sencha Touch 2.0.x library, under independent license.
 * License of Sencha Designer does not include license for Sencha Touch 2.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('GeoCon.view.legislator.TabPanel', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.legislatortabpanel',
    requires: [
        'GeoCon.view.legislator.Info',
        'GeoCon.view.bill.List',
        'GeoCon.view.vote.List'
    ],

    config: {
        id: 'legislatorTabPanel',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                id: 'legislatorToolbar',
                title: '.',
                items: [
                    {
                        xtype: 'button',
                        id: 'legislatorBackButton',
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'legislatorinfo',
                title: 'Bio'
            },
            {
                xtype: 'billlist',
                title: 'Bills'
            },
            {
                xtype: 'votelist',
                title: 'Votes'
            }
        ]
    }

});