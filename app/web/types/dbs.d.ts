import type * as dbs from 'dbs'

declare global {
  const db: typeof dbs.db & { query: (sql: string) => Promise<any> }
  const node_modules: typeof dbs.node_modules & { query: (sql: string) => Promise<any> }
}
  