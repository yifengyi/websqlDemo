/*
 * @Author: wujf
 * @Date:   2018-09-13 17:40:35
 * @Last Modified by:   wujf
 * @Last Modified time: 2018-09-14 11:08:00
 */
var webSql = {

    initDb: function() {
        var _db = $.db('sinoFlowDB2', '1.0', 'My Database', 5 * 1024 * 1000);

        _db.createTable({
            name: "wmReceiptH",
            columns: [
                "receiptNo TEXT",
                "transactionTypeId INTEGER",
                "transactionTypeName TEXT",
                "investBody TEXT",
                "expectedReceiptDate TEXT",
                "materialsName TEXT",
                "materialsPhone TEXT",
                "storerName TEXT",
                "status TEXT",
                "synStatus TEXT",
                "statusName TEXT",
                "carrierName TEXT",
                "carrierPhone TEXT",
                "vendorName TEXT",
                "sourceDocNo TEXT",
                "receiptId INTEGER PRIMARY KEY",
                "carrier TEXT",
                "sourceReceiptType TEXT",
                "showFlag TEXT",
                "whseModel TEXT",
                "toLpnFlag TEXT",
                "putawayStatus TEXT",
                "whseCode TEXT",
                "whseDesc TEXT"
            ],
            done: function() {
                console.log("Yay!  My first table.");
            },
            fail: function() {
                console.log("Something went wrong....");
            }
        });


        _db.batchInsert("wmReceiptH", {
            data: 
                [{
                    receiptNo: '1',
                    transactionTypeId: 1,
                    transactionTypeName: '1',
                    investBody: '1',
                    expectedReceiptDate: '1',
                    materialsName: '1',
                    materialsPhone: '1',
                    storerName: '1',
                    status: '1',
                    synStatus: '1',
                    statusName: '1',
                    carrierName: '1',
                    carrierPhone: '1',
                    vendorName: '1',
                    sourceDocNo: '1',
                    receiptId: 1,
                    carrier: '1',
                    sourceReceiptType: '1',
                    showFlag: '1',
                    whseModel: '1',
                    toLpnFlag: '1',
                    putawayStatus: '1',
                    whseCode: '1',
                    whseDesc: '1'
                },{
                    receiptNo: '2',
                    transactionTypeId: 2,
                    transactionTypeName: '2',
                    investBody: '2',
                    expectedReceiptDate: '2',
                    materialsName: '2',
                    materialsPhone: '2',
                    storerName: '2',
                    status: '2',
                    synStatus: '2',
                    statusName: '2',
                    carrierName: '2',
                    carrierPhone: '2',
                    vendorName: '2',
                    sourceDocNo: '2',
                    receiptId: 2,
                    carrier: '2',
                    sourceReceiptType: '2',
                    showFlag: '2',
                    whseModel: '2',
                    toLpnFlag: '2',
                    putawayStatus: '2',
                    whseCode: '2',
                    whseDesc: '2'
                }]
            ,
            done: function() {
                console.log("Yay!  I created a wmReceiptH!");

            },
            fail: function() {
                console.log("Something went wrong....");
            }
        });
        _db.criteria("wmReceiptH").list(
            function(transaction, results) {
                var rows = results.rows;

                for (var i = 0; i < rows.length; i++) {
                    var row = rows.item(i);
                    console.log(row);
                }
            },
            function(transaction, error) {
                console.log(transaction);
                console.log(error);

                console.log("Something went wrong....");
            }
        );
    },
    query: function() {

    }
};