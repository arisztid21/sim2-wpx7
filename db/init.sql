drop table if exists houses cascade;

create table houses(
    id serial primary key
    ,name varchar(30)
    ,address varchar(100)
    ,city varchar(100)
    ,state varchar(2)
    ,zip integer
    ,img text
    ,mortgage decimal
    ,rent decimal
);

insert into houses(name, address, city, state, zip)
 values($1, $2, $3, $4, $5);

