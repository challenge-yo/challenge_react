select *  
from userchallenges uc
join challenges c on c.id = uc.challenge_id
where uc.validator_id = $1 and uc.is_validated = 0;