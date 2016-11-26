-- create database goodfoodhunting;

create table dishes(
  id SERIAL4 primary key,
  f_id integer,
  name varchar(100),
  img_url varchar(300)
  user_id integer references users(id) on delete cascade
);

insert into dishes(name, img_url, user_id) values ('Xiao Long Bao', 'http://asianliving.me/wp-content/uploads/2010/10/XiaoLongBaoSoup.jpg', 1);
insert into dishes(name, img_url, user_id) values ('Dumplings', 'http://www.taste.com.au/images/recipes/sfi/2010/08/chicken-and-lemongrass-dumplings-20328_l.jpeg', 3);



create table users(
	id SERIAL4 PRIMARY KEY,
	email VARCHAR(200) not null,
	password_digest VARCHAR(500) not null
);

alter table dishes add user_id integer;

-- create table comments (
--   id SERIAL4 PRIMARY Key,
--   comments varchar(2000)
-- )

create table comments(
  dish_id SERIAL4 references dishes(id) on update CASCADE
                                     on delete CASCADE,
  user_id SERIAL4 references users(id) on update cascade
                                    on delete cascade,
  id SERIAL4 PRIMARY KEY,

  comment varchar(2000)
);

--
-- -- Create a table for blog entries.
-- CREATE TABLE entry (
--   id      SERIAL PRIMARY KEY,
--   title   TEXT,
--   content TEXT
-- );
--
-- -- Create a table for tags.
-- CREATE TABLE tag (
--   id   SERIAL PRIMARY KEY,
--   name TEXT
-- );
--
-- -- Create a join table to collect tags for entries.
-- CREATE TABLE entry_coll_tag (
--   entry_id  INTEGER REFERENCES entry(id)
--                     ON UPDATE CASCADE
--                     ON DELETE CASCADE,
--   tag_id    INTEGER REFERENCES tag(id)
--                     ON UPDATE CASCADE
--                     ON DELETE CASCADE,
--   tag_order SMALLINT,
--   PRIMARY KEY (entry_id, tag_id)
-- );
--
-- -- Keep things orderly.
-- CREATE UNIQUE INDEX idx_entry_coll_tag_order
-- ON entry_coll_tag (entry_id, tag_order);










-- CREATE TABLE product (
--   product_id serial PRIMARY KEY  -- implicit primary key constraint
-- , product    text NOT NULL
-- , price      numeric NOT NULL DEFAULT 0
-- );
--
-- CREATE TABLE bill (
--   bill_id  serial PRIMARY KEY
-- , bill     text NOT NULL
-- , billdate date NOT NULL DEFAULT CURRENT_DATE
-- );
--
-- CREATE TABLE bill_product (
--   bill_id    int REFERENCES bill (bill_id) ON UPDATE CASCADE ON DELETE CASCADE
-- , product_id int REFERENCES product (product_id) ON UPDATE CASCADE
-- , amount     numeric NOT NULL DEFAULT 1
-- , CONSTRAINT bill_product_pkey PRIMARY KEY (bill_id, product_id)  -- explicit pk
-- );
