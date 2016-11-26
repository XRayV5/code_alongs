create table cars(
  id SERIAL4 primary key,
  reg varchar(50),
  type varchar(100),
  manufacturer varchar(100),
  model varchar(200),
  make varchar(50),
  price decimal,
  img_url varchar(500),
  user_id integer references users(id) on delete cascade
);

create table users(
  id SERIAL4 primary key,
  email varchar(200) not null,
  password_digest varchar(500) not null,
);
