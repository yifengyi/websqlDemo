/*
 * @Author: wujf
 * @Date:   2018-09-13 17:40:35
 * @Last Modified by:   wujf
 * @Last Modified time: 2018-09-26 17:47:47
 */
var webSql = {

    //初始化数据库
    initDb: function() {
        var _db = $.db('myDB', '', 'My Database', 5 * 1024 * 1000);
        _db.createTable({
            name: "teacher",
            columns: [
                "teacherId INTEGER PRIMARY KEY",
                "name TEXT",
                "age INTEGER",
                "sex TEXT"
            ],
            done: function() {
                console.log("Yay!  My first table.");
            },
            fail: function() {
                console.log("Something went wrong....");
            }
        });
    },
    //插入数据
    insertData: function() {
        var _db = $.db('myDB', '', 'My Database', 5 * 1024 * 1000);
        //批量添加
        _db.batchInsert("teacher", {
            data: [{
                teacherId: 1,
                name: "张三",
                age: 20,
                sex: "男"
            }, {
                teacherId: 2,
                name: "李方",
                age: 22,
                sex: "女"
            }, {
                teacherId: 3,
                name: "李芳",
                age: 23,
                sex: "女"
            }],
            done: function() {
                console.log("Yay!  I created a teacher!");

            },
            fail: function() {
                console.log("Something went wrong....");
            }
        });
    },
    queryAll: function() {
        var _db = $.db('myDB', '', 'My Database', 5 * 1024 * 1000);
        _db.criteria('teacher').list(function(transaction, results) {
                var rows = results.rows;
                var str = '<tr>';
                var arr = [];
                $.each(rows.item(0),function(key,val){
                    arr.push(key);
                   str +='<th>'+key+'</th>';
                });
                str +='</tr>';

                console.log(str);
                console.log(arr);
                var str2 = '';
                for (var i = 0; i < rows.length; i++) {
                    str2 += '<tr>'
                    var row = rows.item(i);

                    for(var j=0;j<arr.length;j++){
                       str2 +='<td>'+ row[arr[j]]+'</td>';
                    }
                    str2 +='</tr>';
                }
                
                console.log(str2);
                $('#table').append($(str+str2));
            },
            function(transaction, error) {
                console.log("Something went wrong....");
            });
    },
    criteriaQuery: function(param) {
        var _db = $.db('myDB', '', 'My Database', 5 * 1024 * 1000);
        //单个条件查询,
        /*var whereParm = _db.restriction.eq('sex', '女');
        var whereParm2 = _db.restriction.gt('age', 22);
        _db.criteria('teacher').add(whereParm).add(whereParm2).list(function(transaction, results) {
                var rows = results.rows;

                for (var i = 0; i < rows.length; i++) {
                    var row = rows.item(i);
                    console.log(row);
                    console.log(row.sex + " " + row.name + " " + row.age);
                }
            },
            function(transaction, error) {
                console.log("Something went wrong....");
            });*/


        //多条件查询
        var whereParm3 = _db.restriction.allEq(param);

        _db.criteria('teacher').add(whereParm3).list(function(transaction, results) {
                var rows = results.rows;
                var str = '';
                for (var i = 0; i < rows.length; i++) {
                    var row = rows.item(i);
                    //console.log(row);
                    str += row.sex + " " + row.name + " " + row.age;
                    //console.log(row.sex + " " + row.name + " " + row.age);
                }
                $('#result').html(str);
            },
            function(transaction, error) {
                console.log("Something went wrong....");
            });
    },
    deletData: function(id) {
        var _db = $.db('myDB', '', 'My Database', 5 * 1024 * 1000);
        var whereParm = _db.restriction.eq('teacherId', id);
        //删除头
        _db.criteria('teacher').add(whereParm).destroy(function(data) {

            alert('a teacher is deleted which teacherId is ' + data);
            console.log('delte a teacher id=' + data);
        }, function(error) {
            console.log('delte  error' + (error));
        });
    }
};