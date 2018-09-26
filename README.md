#  websqlDemo
 ### jQuery.db的修改与应用demo
 #### jQuery.db用法
 - 创建数据链接
 ```javascript
    var db = db('myDb','1.0','My Database',5*1024*1000);
 ```
 - 创建表
 ```javascript
   db.createTable({
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
```
- 插入数据 主键一样是修改(insert or replace into )
``` javascript
  _db.batchInsert("teacher", {
            data: [{
                teacherId: 1,
                name: "张三",
                age: 20,
                sex: "男"
            }, .......],
            done: function() {
                console.log("Yay!  I created a teacher!");

            },
            fail: function() {
                console.log("Something went wrong....");
            }
        });
```
- 查询数据 (等值查询)
```javascript
       
       //查询条件  param格式 {sex:女,age:20}
        var whereParm = _db.restriction.allEq(param);

        _db.criteria('teacher').add(whereParm).list(function(transaction, results) {
                var rows = results.rows;
                var str = '';
                for (var i = 0; i < rows.length; i++) {
                    var row = rows.item(i);
                    str+= row.sex + " " + row.name + " " + row.age ;
                }
                $('#result').html(str);
            },
            function(transaction, error) {
                console.log("Something went wrong....");
            });
```
