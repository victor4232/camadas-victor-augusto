import { InvalidInput } from '../errors'
import { NewEmployee } from '../types'

export function employeeDTO(body: unknown): NewEmployee {
  if (!body || typeof body !== 'object') {
    throw new InvalidInput()
  }

  const data = body as Record<string, unknown>

  if (typeof data.name !== 'string' || data.name.length < 3) {
    throw new InvalidInput(['name'])
  }

  if (typeof data.email !== 'string' || !data.email.includes('@')) {
    throw new InvalidInput(['email'])
  }

  if (typeof data.salary !== 'number') {
    throw new InvalidInput(['salary'])
  }

  if (typeof data.companyId !== 'number') {
    throw new InvalidInput(['companyId'])
  }

  return {
    name: data.name,
    email: data.email,
    salary: data.salary,
    companyId: data.companyId
  }
}