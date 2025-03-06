import { defineAbilityFor } from '@saas/auth'

const ability = defineAbilityFor({ role: 'ADMIN' })

const userCanCreateUser = ability.can('create', 'User')

console.log(userCanCreateUser)
