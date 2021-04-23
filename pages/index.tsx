import Dashboard from '../components/pages/dashboard'
import { BASE_URL } from '../utils/constants'

const Page = ({ data }: any) => (
  <Dashboard data={data} />
)


export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(`${BASE_URL}/list`)
  const data = await res.json()
  const filteredData = data.filter((item: any) => item.identitas.nama)

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      data: filteredData,
    },
  }
}

export default Page