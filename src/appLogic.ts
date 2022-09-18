import { actions, kea, path, reducers } from 'kea'

import type { appLogicType } from './appLogicType'

export const appLogic = kea<appLogicType>([
  path(['src', 'App']),
  actions({ setCount: (value: number) => ({ value }) }),
  reducers({ count: [0, { setCount: (_, { value }) => value }] }),
])
