db.getUsers();
db.dropUser("almighty");
db.createUser(
    {
        user: "almighty",
        pwd: "xxxxx",
        roles: [
            {
                role: "userAdminAnyDatabase",
                db  : "admin"
            },
            {
                role: "readWriteAnyDatabase",
                db  : "admin"
            },
            {
                role: "clusterAdmin",
                db  : "admin"
            },
            {
                role: "dbAdminAnyDatabase",
                db  : "admin"
            },
        ]
    }
);
