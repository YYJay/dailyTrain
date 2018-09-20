import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  isOutputType,
} from 'graphql'

import mongoose from 'mongoose'
const Info = mongoose.model('Info')

const objType = new GraphQLObjectType({
  name: 'mete',
  fields: {
    createdAt: {
      type: GraphQLString,
    },
    updatedAt: {
      type: GraphQLString,
    },
  },
})

export let InfoType = new GraphQLObjectType({
  name: 'Info',
  fields: {
    _id: {
      type: GraphQLID,
    },
    height: {
      type: GraphQLString,
    },
    weight: {
      type: GraphQLString,
    },
    hobby: {
      type: new GraphQLList(GraphQLString),
    },
    meta: {
      type: objType,
    },
  },
})

export const infos = {
  type: new GraphQLList(InfoType),
  args: {},
  resolve(root, params, options) {
    return Info.find({}).exec()
  },
}

export const info = {
  type: InfoType,
  args: {
    height: {
      name: 'height',
      type: GraphQLString,
    },
  },
  resolve(root, params, options) {
    return Info.findOne({
      height: params.height,
    }).exec()
  },
}
const userType = new GraphQLObjectType({
  name: 'user',
  fields: {
    account: {
      type: GraphQLString,
    },
  },
})

export const users = {
  type: userType,
  args: {
    account: {
      name: 'account',
      type: GraphQLString,
    },
    paw: {
      name: 'paw',
      type: GraphQLString,
    },
  },
  resolve(root, params, options) {
    return { account: params.account }
  },
}
