insert into userchallenges 
(challenge_id, user_id, validator_id, start_time, end_time, users_wager, is_validated, email, currency, customer, source, validation_window)
values($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
