/*
 * File: app/view/Settings.js
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

Ext.define('GeoCon.view.Settings', {
    extend: 'Ext.form.Panel',
    alias: 'widget.settings',

    config: {
        id: 'settingsForm',
        items: [
            {
                xtype: 'fieldset',
                items: [
                    {
                        xtype: 'selectfield',
                        id: 'selectState',
                        label: 'State',
                        displayField: 'state',
                        store: 'States',
                        valueField: 'abbr'
                    },
                    {
                        xtype: 'spinnerfield',
                        id: 'districtSpinner',
                        label: 'District',
                        maxValue: 0,
                        minValue: 0,
                        increment: 1
                    }
                ]
            },
            {
                xtype: 'button',
                id: 'lookupBtn',
                ui: 'confirm',
                text: 'Lookup'
            }
        ]
    }

});