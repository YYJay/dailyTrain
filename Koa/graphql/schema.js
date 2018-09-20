
import {
  GraphQLSchema,
  GraphQLObjectType,
} from 'graphql'
// 引入 type
import { info, infos } from './info'
import { users } from './user'
import { student } from './student'

// 建立 schema
export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Queries',
    fields: {
      infos,
      info,
      student,
      users,
    },
  }),
})
