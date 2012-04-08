/*
 * File: app/controller/Legislator.js
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

Ext.define('GeoCon.controller.Legislator', {
    extend: 'Ext.app.Controller',
    config: {
        control: {
            "#legislatorTabPanel": {
                activate: 'onLegislatorShow'
            },
            "#legislatorList": {
                itemtap: 'onLegislatorTap'
            },
            "#billList": {
                activate: 'onBillListActivate',
                itemtap: 'onBillTap'
            },
            "#voteList": {
                activate: 'onVoteListActivate'
            },
            "#legislatorBackButton": {
                tap: 'onLegislatorBackButtonTap'
            },
            "#billSummaryBackButton": {
                tap: 'onBillSummaryBackButtonTap'
            }
        }
    },

    onLegislatorShow: function(container, newActiveItem, oldActiveItem, options) {
        Ext.getCmp('viewport').getLayout().getAnimation().setReverse(false);
    },

    onLegislatorTap: function(dataview, index, target, record, e, options) {
        if (this.currentLegislator == record.data) {
            Ext.getCmp('viewport').setActiveItem(1);
            return;
        }

        this.currentLegislator = record.data;

        this.currentLegislator.committees = Ext.getStore('Committees').load({
            params: {
                bioguide_id: this.currentLegislator.bioguide_id
            }
        });

        var legislator = Ext.getCmp('legislatorTabPanel');
        Ext.getCmp('splashScreen').animateTo('left');

        if (legislator) {
            legislator.setData(this.currentLegislator);
            Ext.getCmp('viewport').setActiveItem(1);
        } else {
            Ext.getCmp('viewport').setActiveItem({
                xclass: 'GeoCon.view.legislator.TabPanel'
            });
        }

        Ext.getCmp('legislatorBio').setData(this.currentLegislator);
        Ext.getCmp('legislatorToolbar').setTitle(this.currentLegislator.title + " " + this.currentLegislator.lastname);
        Ext.getCmp('legislatorTabPanel').setActiveItem(0);
    },

    onBillListActivate: function(container, newActiveItem, oldActiveItem, options) {
        if (this.currentBills != this.currentLegislator.bioguide_id) {
            Ext.getStore('Bills').load({
                params: {
                    sponsor_id: this.currentLegislator.bioguide_id
                }
            });
            this.currentBills = this.currentLegislator.bioguide_id;
        }
    },

    onBillTap: function(dataview, index, target, record, e, options) {
        var billSummary = Ext.getCmp('billSummary');
        Ext.getCmp('splashScreen').animateTo('left');

        if (billSummary) {
            billSummary.setData(record.data);
            Ext.getCmp('viewport').setActiveItem(billSummary);
        } else {
            Ext.getCmp('viewport').setActiveItem({
                xclass: 'GeoCon.view.bill.Show',
                data: record.data
            });
        }

        Ext.getCmp('billSummaryToolbar').setTitle(record.data.bill_id);
    },

    onVoteListActivate: function(container, newActiveItem, oldActiveItem, options) {
        if (this.currentVotes != this.currentLegislator.bioguide_id) {

            var storeParams = {
                sections: "basic,voter_ids." + this.currentLegislator.bioguide_id
            };
            storeParams['voter_ids.' + this.currentLegislator.bioguide_id + '__exists'] = true;

            Ext.getStore('Votes').load({
                params: storeParams
            });

            this.currentVotes = this.currentLegislator.bioguide_id;
        }
    },

    onLegislatorBackButtonTap: function(button, e, options) {
        Ext.getCmp('splashScreen').animateTo('right');
        Ext.getCmp('viewport').setActiveItem(Ext.getCmp('splashScreen'));
    },

    onBillSummaryBackButtonTap: function(button, e, options) {
        Ext.getCmp('splashScreen').animateTo('right');
        Ext.getCmp('viewport').setActiveItem(Ext.getCmp('legislatorTabPanel'));
    }

});