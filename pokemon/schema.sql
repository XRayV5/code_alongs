create table pokemoncollection(
  id serial4 primary key,
  species varchar(100),
  nickname varchar(100),
  type varchar(100),
  levels integer
)

insert into pokemoncollection(species, nickname, type,levels) values ('Bulbasaur', 'Li', 'Grass/Poison', 5);
insert into pokemoncollection(species, nickname, type,levels) values ('Blastoise', 'Zhang', 'Water', 10);
  insert into pokemoncollection(species, nickname, type, levels) values ('Psyduck', 'Wang', 'Water', 8);
