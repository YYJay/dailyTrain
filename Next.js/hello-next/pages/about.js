import dynamic from 'next/dynamic'
const Billboard = dynamic(import('../components/billboard'))

export default () => (
  <div><Billboard /></div>
)
