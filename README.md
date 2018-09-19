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
