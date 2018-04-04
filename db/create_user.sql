insert into users (facebook_id, user_name, first_name, last_name, image, score )
values ($1, $2, $3, $4, $5, 0)
returning *;
-- changed from select all users because in the return we only want the newly created user.
-- select * from users;