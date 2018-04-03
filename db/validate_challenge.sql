update userChallenges
set is_validated = 1
where challenge_id = $1;
-- select *  
-- from userchallenges uc
-- join challenges c on c.id = uc.challenge_id
-- where uc.validator_id = $2 and uc.is_validated = 0;

