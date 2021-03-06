/*
 * File: app/store/Votes.js
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

Ext.define('GeoCon.store.Votes', {
    extend: 'Ext.data.Store',
    requires: [
        'GeoCon.model.Vote'
    ],

    config: {
        groupDir: 'DESC',
        groupField: 'voted_at_str',
        model: 'GeoCon.model.Vote',
        storeId: 'Votes',
        proxy: {
            type: 'jsonp',
            extraParams: {
                apikey: '8a341f85c657435989e75c9a83294762'
            },
            limitParam: '',
            noCache: false,
            pageParam: '',
            startParam: '',
            url: 'http://api.realtimecongress.org/api/v1/votes.json',
            reader: {
                type: 'json',
                rootProperty: 'votes'
            }
        }
    }
});