import React from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = (props) => (
  <li>
    <Link as={`/fakeUrl/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <div>
    <Layout>
      <p>children</p>
    </Layout>
    <ul>
      <PostLink title="Hello Next.js" id="id1"/>
      <PostLink title="Learn Next.js is awesome" id="id2"/>
      <PostLink title="Deploy apps with Zeit" id="id3"/>
    </ul>
    <style jsx>{`
        ul {
          margin: 5px;
          color: red;
        }
        a:hover {
          opacity: 0.6;
        }
        p {
          color: red;
        }
        `}</style>
  </div>
)
export default Index

// as为展示在地址栏的信息,刷新后将作为真实信息, href为真实信息,
// style 会为父元素增加class名,并对父元素及以下元素生效
