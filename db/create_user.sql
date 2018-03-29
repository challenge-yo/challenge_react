insert into users (facebook_id, user_name, first_name, last_name, image )
values ($1, $2, $3, $4, $5);
select * from users;