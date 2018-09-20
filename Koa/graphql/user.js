import { GraphQLObjectType, GraphQLString } from 'graphql'
const got = require('got')

const userType = new GraphQLObjectType({
  name: 'user',
  fields: {
    account: {
      type: GraphQLString,
    },
  },
})

const getUser = async(username, password) => {
  const options = {
    json: true,
    body: {
      password,
      username,
    },
  }
  const url = `http://192.169.2.19:35434/iam/actions/login`
  const res = await got.post(url, options)
  const { token } = res.body
  return token
}

export const users = {
  type: userType,
  args: {
    account: {
      name: 'account',
      type: GraphQLString,
    },
    passWord: {
      name: 'passWord',
      type: GraphQLString,
    },
  },
  resolve(root, params, options) {
    const { account, passWord } = params
    const name = getUser(account, passWord)
    return { account: name }
  },
}
