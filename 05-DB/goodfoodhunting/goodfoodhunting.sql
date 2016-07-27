-- create database goodfoodhunting;

create table dishes(
  id SERIAL4 primary key,
  f_id integer,
  name varchar(100),
  img_url varchar(300),
);

insert into dishes(name, img_url) values ('Xiao Long Bao', 'http://asianliving.me/wp-content/uploads/2010/10/XiaoLongBaoSoup.jpg');
insert into dishes(name, img_url) values ('Dumplings', 'http://www.taste.com.au/images/recipes/sfi/2010/08/chicken-and-lemongrass-dumplings-20328_l.jpeg');
